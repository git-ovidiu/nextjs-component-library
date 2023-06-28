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
      <section className="o-interactive-panel">
          <CustomWrapper
              border-radius="0px"
              space-bottom="m"
              space-top="m"
              custom-background-color={"white"}
          >
            <CustomGridRow vertical-alignment="center" reverse-breakpoint={"md"}>
              <CustomGridColumn
                  column-background="black"
                  column-background-opacity="0.37"
                  column-border-radius="0px"
                  column-padding-bottom="unset"
                  column-padding-top="unset"
                  columns-equal-paddings
                  md={4}
                  md-offset={2}
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
                  column-background="black"
                  column-background-opacity="0.37"
                  column-border-radius="0px"
                  column-padding-bottom="unset"
                  column-padding-top="unset"
                  columns-equal-paddings
                  md={6}
              >
                <Splide ref={splideRef} onMoved={handleSlideMoved} options={{ perPage: 1 }}>
                  {card &&
                      card.map((cardElement: ReactNode, index: number) => (
                          <SplideSlide key={index}>{cardElement}</SplideSlide>
                      ))}
                </Splide>
              </CustomGridColumn>
            </CustomGridRow>
          </CustomWrapper>
      </section>
  );
}