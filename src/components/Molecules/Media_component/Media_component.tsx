import React, {CSSProperties, ReactElement, useEffect, useRef, useState} from "react";
import {AiOutlineStepBackward, AiOutlineStepForward} from "react-icons/ai";
import {FaPlay} from "react-icons/fa";
import {FiPauseCircle} from "react-icons/fi";
import {BsArrowsFullscreen} from "react-icons/bs";
import "./Media_component.scss";

interface ProgressLineBackgroundColor extends CSSProperties {
  "--a-video-progress-line-background"?: string;
  "--a-video-object-fit"?: string;
  "--a-media-image-border-radius"?: string;
  "--a-video-border-radius"?: string;
}

interface MediaComponentProps {
  style?: ProgressLineBackgroundColor;
  image?: ReactElement;
  "object-fit"?: string;
  "label-top-left"?: ReactElement;
  "label-top-right"?: ReactElement;
  "label-bottom-left"?: ReactElement;
  "label-bottom-right"?: ReactElement;
  "image-border-radius"?: string;
  video?: string;
  muted?: boolean;
  loop?: boolean;
  "show-controls"?: boolean;
  "remove-controls"?: boolean;
  "video-border-radius"?: string;
  "auto-play"?: boolean;
  "progress-bar-color"?: string;
  "custom-fullscreen-icon"?: ReactElement;
  "custom-play-icon"?: ReactElement;
  "custom-pause-icon"?: ReactElement;
  "custom-prev-icon"?: ReactElement;
  "custom-next-icon"?: ReactElement;
}

export default function Media(props: MediaComponentProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(props["show-controls"] ?? false);
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
      }
    }
  };

  return (
      <div className="a-media" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {props.video ? (
            <div className="a-media__video" style={{ "--a-video-border-radius": props["video-border-radius"], ...props.style }}>
              <div className="video-container">
                <video
                    src={props.video}
                    ref={videoRef}
                    style={{ width: "100%", "--a-video-object-fit": props["object-fit"], ...props.style }}
                    autoPlay={props["remove-controls"] || props["auto-play"]}
                    muted={!!(props["remove-controls"] || props.muted)}
                    loop={props.loop}
                />
              </div>
              <div className="progress-line-container" style={{ "--a-video-progress-line-background": props["progress-bar-color"], ...props.style }}>
                <div className="progress-line" style={{ width: `${progress}%` }}></div>
              </div>
              {props["remove-controls"] ? null : (
                  showControls && (
                      <>
                        <div className="fullscreen-icon">
                          {props["custom-fullscreen-icon"] ? (
                              <div onClick={handleFullscreen}>{props["custom-fullscreen-icon"]}</div>
                          ) : (
                              <BsArrowsFullscreen onClick={handleFullscreen} className="controls-icon" />
                          )}
                        </div>
                        <div className="controls-container">
                          <div className="controls">
                            <div className="icon-container">
                              {props["custom-prev-icon"] ? (
                                  <div onClick={revert}>{props["custom-prev-icon"]}</div>
                              ) : (
                                  <AiOutlineStepBackward className="controls-icon" onClick={revert} />
                              )}
                            </div>
                            {playing ? (
                                <div className="icon-container">
                                  {props["custom-pause-icon"] ? (
                                      <div onClick={() => videoHandler("pause")}>{props["custom-pause-icon"]}</div>
                                  ) : (
                                      <FiPauseCircle onClick={() => videoHandler("pause")} className="controls-icon action-icon" />
                                  )}
                                </div>
                            ) : (
                                <div className="icon-container">
                                  {props["custom-play-icon"] ? (
                                      <div onClick={() => videoHandler("play")}>{props["custom-play-icon"]}</div>
                                  ) : (
                                      <FaPlay onClick={() => videoHandler("play")} className="controls-icon action-icon" />
                                  )}
                                </div>
                            )}
                            <div className="icon-container">
                              {props["custom-next-icon"] ? (
                                  <div onClick={fastForward}>{props["custom-next-icon"]}</div>
                              ) : (
                                  <AiOutlineStepForward className="controls-icon" onClick={fastForward} />
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                  )
              )}
            </div>
        ) : (
            <div className="a-media__image" style={{ "--a-media-image-border-radius": props["image-border-radius"], ...props.style }}>
              {props["label-top-left"] && <div className="label top-left">{props["label-top-left"]}</div>}
              {props["label-top-right"] && <div className="label top-right">{props["label-top-right"]}</div>}
              {props["label-bottom-left"] && <div className="label bottom-left">{props["label-bottom-left"]}</div>}
              {props["label-bottom-right"] && <div className="label bottom-right">{props["label-bottom-right"]}</div>}
              {props.image}
            </div>
        )}
      </div>
  );
}
