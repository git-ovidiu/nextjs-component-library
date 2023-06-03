import React from "react";
import { render } from "@testing-library/react";
import MediaVideo from "./Media-video";

describe("Media_component", () => {
  test("renders the Media_component", () => {
    render(
      <div>
        <div
          style={{
            height: "500px",
            margin: "0 auto",
            maxWidth: "500px",
            position: "relative",
            width: "100%",
          }}
        >
          <MediaVideo
            auto-play
            loop
            muted
            object-fit="cover"
            progress-bar-color="red"
            video="https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4"
            video-source="https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4"
          />
        </div>
      </div>
    );
  });
});
