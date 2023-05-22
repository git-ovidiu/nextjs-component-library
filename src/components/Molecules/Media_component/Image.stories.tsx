import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Media from "./Media_component";
import Image from "next/image";
import {BsPlayCircleFill} from "react-icons/bs";

const Extra_Info = `
<br>
<h2><u>PROPS</u></h2>


`;

export default {
  title: "Molecules/Media Component/Image",
  component: Media,
    argTypes:{
        "object-fit": {
            control: "radio",
            options: ["cover", "contain"],
        },
    },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args) => (

    <div
      style={{
        maxWidth: "500px",
        width: "100%",
        height: "auto",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <>
        {/*IMAGE*/}
        <Media
            image-border-radius={args["image-border-radius"]}
          image={
            <Image
              //@ts-ignore
              src={args["image-source"]}
              alt="placeholder"
              //@ts-ignore
              style={{ objectFit: args["object-fit"] }}
            />
          }
          label-top-left={
            <Image
              //@ts-ignore
              src={args["label-top-left"]}
              alt="Placeholder"
            />
          }
          label-top-right={
            <Image
              //@ts-ignore
              src={args["label-top-right"]}
              alt="Placeholder"
            />
          }
          label-bottom-left={
            <Image
              //@ts-ignore
              src={args["label-bottom-left"]}
              alt="Placeholder"
            />
          }
          label-bottom-right={
            <Image
              //@ts-ignore
              src={args["label-bottom-right"]}
              alt="Placeholder"
            />
          }
        />
      </>
    </div>
);

export const Media_component_story = Template.bind({});

Media_component_story.args = {
  // @ts-ignore

  "image-source":
    "https://res.cloudinary.com/dxbivmheq/image/upload/v1674309864/OvidiuBunghez_diagramic_drawing_simple_color_Yellow_Orange_only_3d2d259b-ddf5-4fb3-94ef-fe74a7954ad8_cvowat.png",
  "object-fit": "cover",

  // @ts-ignore
  "label-top-right": "https://fakeimg.pl/100x50/000000/ffff00?text=right",
  // @ts-ignore
  "label-top-left": "https://fakeimg.pl/100x50/000000/00ffff?text=left",
  // @ts-ignore
  "label-bottom-right": "https://fakeimg.pl/100x50/ffffff/ff0000?text=right",
  // @ts-ignore
  "label-bottom-left": "https://fakeimg.pl/100x50/000000/ff00ff?text=left",
  video:
    "https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4",
  ["auto-play"]: false,
  muted: true,
  loop: true,
  "show-controls": true,
  hideShowControls: true,

  "fullscreen-icon-color": "white",
  "prev-icon-color": "white",
  "play-icon-color": "red",
  "pause-icon-color": "white",
  "forward-icon-color": "white",
  "progress-bar-color": "red",

  // ----

    "custom-fullscreen-icon": undefined,
    "custom-prev-icon": undefined,
    "custom-pause-icon": undefined,
    "custom-play-icon": <BsPlayCircleFill className="controls-icon action-icon" />,

    "video-border-radius": undefined,
    "image-border-radius": undefined,
};
