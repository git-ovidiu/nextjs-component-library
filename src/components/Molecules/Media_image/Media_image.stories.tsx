import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Media_image from "./Media_image";
import Image from "next/image";
import Logo from "../../Atoms/Logo";

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
<tr>
<td>padding-bottom-mobile</td>
<td>string</td>
<td>0% | 0px</td>
</tr>
<tr>
<td>padding-bottom-tablet</td>
<td>string</td>
<td>0% | 0px</td>
</tr>
<tr>
<td>padding-bottom-desktop</td>
<td>string</td>
<td>0% | 0px</td>
</tr>
</table>
<br/>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--m-media-label-top-left-margin-top</li>
<li>--m-media-label-top-left-margin-left</li>
<li>--m-media-label-top-right-margin-top</li>
<li>--m-media-label-top-right-margin-right</li>
<li>--m-media-label-bottom-left-margin-bottom</li>
<li>--m-media-label-bottom-left-margin-left</li>
<li>--m-media-label-bottom-right-margin-top</li>
<li>--m-media-label-bottom-right-margin-right</li>
<li>--m-media-image-border-radius</li>
<li>--m-label-width</li>
<li>--m-label-height</li>
<li>--m-media-image-object-fit</li>
<li>--m-media-image-padding-bottom-mobile</li>
<li>--m-media-image-padding-bottom-tablet</li>
<li>--m-media-image-padding-bottom-desktop</li>
</ol>
<table>
<tr>
    <td>--m-media-label-top-left-margin-top</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-label-top-left-margin-left</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-label-top-right-margin-top</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-label-top-right-margin-right</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-label-bottom-left-margin-bottom</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-label-bottom-left-margin-left</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-label-bottom-right-margin-top</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-label-bottom-right-margin-right</td>
    <td>50px</td>
</tr>
<tr>
    <td>--m-media-image-border-radius</td>
    <td>unset</td>
</tr>
<tr>
<td>--m-label-width</td>
<td>150px</td>
</tr>
<tr>
<td>--m-label-height</td>
<td>50px</td>
</tr>
<tr>
<td>--m-media-image-object-fit</td>
<td>cover</td>
</tr>
<tr>
<td>--m-media-image-padding-bottom-mobile</td>
<td>100%</td>
</tr>
<tr>
<td>--m-media-image-padding-bottom-tablet</td>
<td>100%</td>
</tr>
<tr>
<td>--m-media-image-padding-bottom-desktop</td>
<td>100%</td>
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
      <Media_image
        image-border-radius={args["image-border-radius"]}
        object-fit={args["object-fit"]}
        padding-bottom-desktop="0%"
        padding-bottom-mobile="0%"
        padding-bottom-tablet="0%"
        image={
            <Image
                fill
                alt="Placeholder"
                src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <Logo
                background="#4cbfa6"
                border-radius="20px "
                image-source="https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png"
                logo="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
                logo-href="https://www.google.com"
            />
        }
      />
);

export const Media_component_story = Template.bind({});

Media_component_story.args = {
  "object-fit": "cover",

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
