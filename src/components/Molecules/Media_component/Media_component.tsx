import React, {CSSProperties, ReactElement, useEffect, useRef, useState} from "react";
import {AiOutlineStepBackward, AiOutlineStepForward} from "react-icons/ai";
import {FaPlay} from "react-icons/fa";
import {FiPauseCircle} from "react-icons/fi";
import {BsArrowsFullscreen} from "react-icons/bs";
import './Media_component.scss';

interface ProgressLineBackgroundColor extends CSSProperties {
  "--a-video-progress-line-background"?: string;
  "--a-video-object-fit"?: string;
}

interface MediaComponentProps {
  style?: ProgressLineBackgroundColor;
  image?: ReactElement;
  label?: ReactElement;
  label_top_left?: ReactElement;
  label_top_right?: ReactElement;
  label_bottom_left?: ReactElement;
  label_bottom_right?: ReactElement;
  // video
  video?: string;
  playsInline?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  showControlsProperty?: boolean;
  fullscreen_icon_color?: string;
  prev_icon_color?: string;
  play_icon_color?: string;
  pause_icon_color?: string;
  forward_icon_color?: string;
  progress_bar_color?: string;
  object_fit?: string;
}

export default function MediaComponent(props: MediaComponentProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  // const [videoTime, setVideoTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(props.showControlsProperty ?? false);
  const rafRef = useRef<number>(0);

  const videoHandler = (control: string) => {
    if (videoRef.current) {
      if (control === "play") {
        videoRef.current.play();
        setPlaying(true);
      } else if (control === "pause") {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setProgress((currentTime / videoRef.current.duration) * 100);
      // Remove the line: setVideoTime(videoRef.current.duration);
    }
    rafRef.current = requestAnimationFrame(updateProgress);
  };

  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 0.5;
    }
  };

  const revert = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 0.5;
    }
  };


  useEffect(() => {
    if (videoRef.current) {
      rafRef.current = requestAnimationFrame(updateProgress);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleFullscreen = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement
            .requestFullscreen()
            .catch((error) => console.log("Fullscreen request failed:", error));
      } else if (videoElement.requestFullscreen) {
        videoElement
            .requestFullscreen()
            .catch((error) => console.log("Fullscreen request failed:", error));
      }
    }
  };

  return (
      <>
        <div
            className="a-media"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
          {props.video ? (
              <div className="a-media__video">
                <div className="video-container">
                  <video
                      src={props.video}
                      ref={videoRef}
                      style={{ width: "100%", "--a-video-object-fit": props.object_fit, ...props.style }}
                      playsInline={props.playsInline}
                      autoPlay={props.autoPlay}
                      muted={props.muted}
                      loop={props.loop}
                  />
                </div>
                <div className="progress-line-container" style={{ "--a-video-progress-line-background": props.progress_bar_color, ...props.style }}>
                  <div
                      className="progress-line"
                      style={{ width: `${progress}%` }}
                  ></div>
                </div>
                {showControls && (
                    <>
                      <div className="fullscreen-icon">
                        <BsArrowsFullscreen
                            style={{ color: props.fullscreen_icon_color }}
                            onClick={handleFullscreen}
                            className="controls-icon"
                        />
                      </div>
                      <div className="controls-container">
                        <div className="controls">
                          <div className="icon-container">
                            <AiOutlineStepBackward
                                style={{ color: props.prev_icon_color }}
                                className="controls-icon"
                                onClick={revert}
                            />
                          </div>
                          {playing ? (
                              <div className="icon-container">
                                <FiPauseCircle
                                    style={{ color: props.pause_icon_color }}
                                    onClick={() => videoHandler("pause")}
                                    className="controls-icon action-icon"
                                />
                              </div>
                          ) : (
                              <div className="icon-container">
                                <FaPlay
                                    style={{ color: props.play_icon_color }}
                                    onClick={() => videoHandler("play")}
                                    className="controls-icon action-icon"
                                />
                              </div>
                          )}
                          <div className="icon-container">
                            <AiOutlineStepForward
                                style={{ color: props.forward_icon_color }}
                                className="controls-icon"
                                onClick={fastForward}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                )}
              </div>
          ) : (
              <div className="a-media__image">
                {props.label_top_left ? (
                    <div className="label top-left">{props.label_top_left}</div>
                ) : (
                    ""
                )}
                {props.label_top_right ? (
                    <div className="label top-right">{props.label_top_right}</div>
                ) : (
                    ""
                )}
                {props.label_bottom_left ? (
                    <div className="label bottom-left">
                      {props.label_bottom_left}
                    </div>
                ) : (
                    ""
                )}
                {props.label_bottom_right ? (
                    <div className="label bottom-right">
                      {props.label_bottom_right}
                    </div>
                ) : (
                    ""
                )}
                {props.image}
              </div>
          )}
        </div>
      </>
  );
}
