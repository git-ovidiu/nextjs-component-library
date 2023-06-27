import React, {ReactElement, ReactNode} from "react";
import "./Interactive-panel.scss";

export interface InteractivePanelProps {
  card?: ReactElement;
  button?: ReactElement;
}
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import {Splide, SplideSlide} from "@splidejs/react-splide"
export default function InteractivePanel( props: InteractivePanelProps) {
  const splideRef = React.useRef<any>(null);

  const handleButtonClick = (slideIndex: number) => {
    splideRef.current?.go(slideIndex);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Splide ref={splideRef}>
                <SplideSlide>
                  <h1>card1</h1>
                </SplideSlide>
                <SplideSlide>
                  <h1>card2</h1>
                </SplideSlide>
                <SplideSlide>
                  <h1>card3</h1>
                </SplideSlide>
              </Splide>
            </div>
            <div className="col-md-6">
              <button onClick={() => handleButtonClick(0)}>button1</button>
              <button onClick={() => handleButtonClick(1)}>button2</button>
              <button onClick={() => handleButtonClick(2)}>button3</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
