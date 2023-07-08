import React, {ReactElement, ReactNode, useEffect, useState} from "react";
import "./Interactive-panel.scss";

export interface InteractivePanelProps {
  card?: ReactNode[];
  button?: ReactNode[];
}
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import {Splide, SplideSlide} from "@splidejs/react-splide"
import {CustomGridColumn, CustomGridRow, CustomWrapper} from "../../index"





export default function InteractivePanel({ card, button }: InteractivePanelProps) {
  const splideRef = React.useRef<any>(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);

  useEffect(() => {
    if (button && button.length > 0) {
      setActiveButtonIndex(0);
    }
  }, [button]);

  const handleButtonClick = (slideIndex: number, buttonIndex: number) => {
    splideRef.current?.go(slideIndex);
    setActiveButtonIndex(buttonIndex);
  };

  const handleSlideMoved = (splide: any) => {
    setActiveButtonIndex(splide.index);
  };

  return (
      <div className={"o-interactive-panel"}>
          <CustomGridRow vertical-alignment="center" reverse-breakpoint={"md"}>
              <CustomGridColumn
                  column-background="transparent"
                  columns-equal-paddings
                  md={4}
                  md-offset={1}
                  lg={3}
              >
                <div className="buttons-container">
                  {button &&
                      button.map((buttonElement: ReactNode, index: number) => (
                          <div
                              key={index}
                              className={index === activeButtonIndex ? "active" : "default"}
                              onClick={() => handleButtonClick(index, index)}
                          >
                            {buttonElement}
                          </div>
                      ))}
                </div>
              </CustomGridColumn>

              <CustomGridColumn
                  column-background="transparent"
                  columns-equal-paddings
                  md={7}
                  lg={8}
              >
                <Splide ref={splideRef} onMoved={handleSlideMoved} options={{ perPage: 1, width: "100%" }}>
                  {card &&
                      card.map((cardElement: ReactNode, index: number) => (
                          <SplideSlide key={index}>{cardElement}</SplideSlide>
                      ))}
                </Splide>
              </CustomGridColumn>
          </CustomGridRow>
      </div>
  );
}