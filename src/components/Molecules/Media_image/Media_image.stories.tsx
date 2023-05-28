import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Media_image from "./Media_image";
import Image from "next/image";

const Extra_Info = `
<br>
<h2><u>PROPS</u></h2>
<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
  <tr>
  <td>image</td>
  <td>ReactElement</td>
  <td>use next/image</td>
</tr>
<tr>
    <td>object-fit</td>
    <td>string</td>
    <td>cover | contain</td>
</tr>
<tr>
    <td>label-top-left</td>
    <td>ReactElement</td>
    <td>-</td>
</tr>
<tr>
    <td>label-top-right</td>
    <td>ReactElement</td>
    <td>-</td>
</tr>
<tr>
    <td>label-bottom-left</td>
    <td>ReactElement</td>
    <td>-</td>
</tr>
<tr>
    <td>label-bottom-right</td>
    <td>ReactElement</td>
    <td>-</td>
</tr>
<tr>
    <td>image-border-radius</td>
    <td>string </td>
    <td>0px | 0%</td>
</tr>
</table>
<br/>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--a-media-label-top-left-margin-top</li>
<li>--a-media-label-top-left-margin-left</li>
<li>--a-media-label-top-right-margin-top</li>
<li>--a-media-label-top-right-margin-right</li>
<li>--a-media-label-bottom-left-margin-bottom</li>
<li>--a-media-label-bottom-left-margin-left</li>
<li>--a-media-label-bottom-right-margin-top</li>
<li>--a-media-label-bottom-right-margin-right</li>
<li>--a-media-image-border-radius</li>
</ol>
<table>
<tr>
    <td>--a-media-label-top-left-margin-top</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-label-top-left-margin-left</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-label-top-right-margin-top</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-label-top-right-margin-right</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-label-bottom-left-margin-bottom</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-label-bottom-left-margin-left</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-label-bottom-right-margin-top</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-label-bottom-right-margin-right</td>
    <td>50px</td>
</tr>
<tr>
    <td>--a-media-image-border-radius</td>
    <td>unset</td>
</tr>
</table>

`;

export default {
  title: "Molecules/Media/Image",
  component: Media_image,
  argTypes: {
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
} as ComponentMeta<typeof Media_image>;

const Template: ComponentStory<typeof Media_image> = (args) => (
  <div
    style={{
      maxWidth: "500px",
      width: "100%",
      height: "100%",
      position: "relative",
      margin: "0 auto",
    }}
  >
      <Media_image
        image-border-radius={args["image-border-radius"]}

        image={
          <Image
            //@ts-ignore
            src={args["image-source"]}
            alt="placeholder"
            //@ts-ignore
            style={{ objectFit: args["object-fit"] }}
            fill
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
  </div>
);

export const Media_component_story = Template.bind({});

Media_component_story.args = {
  "object-fit": "cover",

  "image-source":
    "https://res.cloudinary.com/dxbivmheq/image/upload/v1674309864/OvidiuBunghez_diagramic_drawing_simple_color_Yellow_Orange_only_3d2d259b-ddf5-4fb3-94ef-fe74a7954ad8_cvowat.png",

  // @ts-ignore
  "label-top-right": "https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp",
  // @ts-ignore
  "label-top-left": "https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp",
  // @ts-ignore
  "label-bottom-right": "https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp",
  // @ts-ignore
  "label-bottom-left": "https://res.cloudinary.com/dxbivmheq/image/upload/v1685288101/dummy_100x50_ffffff_000000_q4dp06.webp",
  //@ts-ignore
  "image-border-radius": "0px",
};
