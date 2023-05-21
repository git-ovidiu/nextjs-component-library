import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Media from "./Media_component";
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
       <td>label</td>
       <td>ReactElement</td>
       <td>-</td>
    </tr>
    <tr>
    <td>label-top-left</td>
    <td>ReactElement</td>
    <td>use next/image | text</td>
</tr>
    <tr>
    <td>label-top-right</td>
    <td>ReactElement</td>
    <td>use next/image | text</td>
</tr>
    <tr>
    <td>label-bottom-left</td>
    <td>ReactElement</td>
    <td>use next/image | text</td>
</tr>
    <tr>
    <td>label-bottom-right</td>
    <td>ReactElement</td>
    <td>use next/image | text</td>
</tr>
<br/>
<br/>
<h4>VIDEO</h4>
<tr>
<td>video</td>
<td>string</td>
<td>video url (youtube link soon)</td>
</tr>
<tr>
<td>muted</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>loop</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>showControlsProperty</td>
<td>boolean</td>
<td>-</td>
</tr>

<tr>
<td>auto-play</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>object-fit</td>
<td>string</td>
<td>cover | contain</td>
</tr>
<tr>
<td>fullscreen-icon-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>prev-icon-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>play-icon-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>pause-icon-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>forward-icon-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>progress-bar-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<br/>
<br/>
<h4>IMAGE</h4>
<li>--a-media-label-top-left-margin-top</li>
<li>--a-media-label-top-left-margin-left</li>
<li>--a-media-label-top-right-margin-top</li>
<li>--a-media-label-top-right-margin-right</li>
<li>--a-media-label-bottom-left-margin-bottom</li>
<li>--a-media-label-bottom-left-margin-left</li>
<li>--a-media-label-bottom-right-margin-top</li>
<li>--a-media-label-bottom-right-margin-right</li>
<li>--a-media-image-border-radius</li>
<br/>
<br/>
<h4>VIDEO</h4>
<li>--a-video-progress-line-height</li>
<li>--a-video-fullscreen-icon-margin-right</li>
<li>--a-video-fullscreen-icon-margin-bottom</li>
<li>--a-video-border-radius</li>
<li>--a-video-controls-gap</li>
<li>--a-video-controls-background</li>
<li>--a-video-controls-border-radius</li>
<li>--a-video-controls-padding</li>
<li>--a-video-controls-hover-animation</li>
<li>--a-video-controls-container-height</li>
<li>--a-video-controls-container-width</li>
<li>--a-video-controls-icon-width</li>
<li>--a-video-controls-icon-height</li>
<li>--a-video-controls-icon-play-width</li>
<li>--a-video-controls-icon-play-height</li>
<li>--a-video-controls-fullscreen-padding</li>
<li>--a-video-controls-hover-scale</li>
<li>--a-video-controls-default-scale</li>
</ol>

<br>
<h2><u>CURRENT VALUES</u></h2>
<br/>
<br/>
<h4>IMAGE</h4>
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
<br/>
<br/>
<h4>VIDEO</h4>
<tr>
    <td>--a-video-progress-line-height</td>
    <td>5px;</td>
</tr>
<tr>
    <td>--a-video-fullscreen-icon-margin-right</td>
    <td>20px;</td>
</tr>
<tr>
    <td>--a-video-fullscreen-icon-margin-bottom</td>
    <td>20px;</td>
</tr>
<tr>
    <td>--a-video-border-radius</td>
    <td>unset;</td>
</tr>
<tr>
    <td>--a-video-controls-gap</td>
    <td>24px;</td>
</tr>
<tr>
    <td>--a-video-controls-background</td>
    <td>rgba(0, 0, 0, 0.308);</td>
</tr>
<tr>
    <td>--a-video-controls-border-radius</td>
    <td>30px;</td>
</tr>
<tr>
    <td>--a-video-controls-padding</td>
    <td>30px 50px;</td>
</tr>
<tr>
    <td>--a-video-controls-hover-animation</td>
    <td>all 0.175s ease-in-out;</td>
</tr>
<tr>
    <td>--a-video-controls-container-height</td>
    <td>auto;</td>
</tr>
<tr>
    <td>--a-video-controls-container-width</td>
    <td>auto;</td>
</tr>
<tr>
    <td>--a-video-controls-icon-width</td>
    <td>20px;</td>
</tr>
<tr>
    <td>--a-video-controls-icon-height</td>
    <td>20px;</td>
</tr>
<tr>
    <td>--a-video-controls-icon-play-width</td>
    <td>30px;</td>
</tr>
<tr>
    <td>--a-video-controls-icon-play-height</td>
    <td>30px;</td>
</tr>
<tr>
    <td>--a-video-controls-fullscreen-padding</td>
    <td>8px;</td>
</tr>
<tr>
    <td>--a-video-controls-hover-scale</td>
    <td>scale(1.5);</td>
</tr>
<tr>
    <td>--a-video-controls-default-scale</td>
    <td>scale(1.2);</td>
</tr>
</table>

`;

export default {
  title: "Molecules/Media",
  component: Media,
  argTypes: {
    "Object Fit": {
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

// @ts-ignore
const Template: ComponentStory<typeof Media> = (args) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
    }}
  >
    <div
      style={{
        maxWidth: "500px",
        width: "100%",
        height: "400px",
        position: "relative",
      }}
    >
      <>
        {/*IMAGE*/}
        <Media
          {...args}
          image={
            <Image
              //@ts-ignore
              src={args["Image Source"]}
              alt="placeholder"
              //@ts-ignore
              style={{ objectFit: args["Object Fit"] }}
            />
          }
          label-top-left={
            <Image
              //@ts-ignore
              src={args["Label Top Right"]}
              alt="Placeholder"
            />
          }
          label-top-right={
            <Image
              //@ts-ignore
              src={args["Label Top Left"]}
              alt="Placeholder"
            />
          }
          label-bottom-left={
            <Image
              //@ts-ignore
              src={args["Label Bottom Right"]}
              alt="Placeholder"
            />
          }
          label-bottom-right={
            <Image
              //@ts-ignore
              src={args["Label Bottom Left"]}
              alt="Placeholder"
            />
          }
        />
      </>
    </div>

    <div
      style={{
        maxWidth: "500px",
        width: "100%",
        height: "400px",
        position: "relative",
      }}
    >
      <>
        {/*IMAGE*/}
        <Media
          {...args}
          image={
            <Image
              //@ts-ignore
              src={args["Image Source"]}
              alt="placeholder"
              //@ts-ignore
              style={{ objectFit: args["Object Fit"] }}
            />
          }
          label-top-left={
            <Image
              //@ts-ignore
              src={args["Label Top Right"]}
              alt="Placeholder"
            />
          }
          label-top-right={
            <Image
              //@ts-ignore
              src={args["Label Top Left"]}
              alt="Placeholder"
            />
          }
          label-bottom-left={
            <Image
              //@ts-ignore
              src={args["Label Bottom Right"]}
              alt="Placeholder"
            />
          }
          label-bottom-right={
            <Image
              //@ts-ignore
              src={args["Label Bottom Left"]}
              alt="Placeholder"
            />
          }
          //@ts-ignore
          video={args["Video"]}
          //@ts-ignore
          auto-play={args["Autoplay"]}
          //@ts-ignore
          muted={args["Muted"]}
          //@ts-ignore
          loop={args["Loop"]}
          //@ts-ignore
          showControlsProperty={args["Show Controls"]}
          //@ts-ignore
          fullscreen-icon-color={args["Fullscreen Icon Color"]}
          //@ts-ignore
          prev-icon-color={args["Prev Icon Color"]}
          //@ts-ignore
          play-icon-color={args["Play Icon Color"]}
          //@ts-ignore
          pause-icon-color={args["Pause Icon Color"]}
          //@ts-ignore
          forward-icon-color={args["Forward Icon Color"]}
          //@ts-ignore
          progress-bar-color={args["Progress Bar Color"]}
        />
      </>
    </div>
  </div>
);

export const Media_component_story = Template.bind({});

Media_component_story.args = {
  // @ts-ignore
  "Image Options Below": "------------------------------------------------",

  "Image Source":
    "https://res.cloudinary.com/dxbivmheq/image/upload/v1674309864/OvidiuBunghez_diagramic_drawing_simple_color_Yellow_Orange_only_3d2d259b-ddf5-4fb3-94ef-fe74a7954ad8_cvowat.png",
  "Object Fit": "cover",

  "Label Top Right": "https://fakeimg.pl/100x50/000000/ffffff?text=right",
  "Label Top Left": "https://fakeimg.pl/100x50/000000/ffffff?text=right",
  "Label Bottom Right": "https://fakeimg.pl/100x50/000000/ff0000?text=right",
  "Label Bottom Left": "https://fakeimg.pl/100x50/000000/ffffff?text=right",
  "Video Options Below": "------------------------------------------------",
  Video:
    "https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4",
  Autoplay: false,
  Muted: true,
  Loop: true,
  "Show Controls": true,
  hideShowControls: true,

  "Control Icons Color Below":
    "------------------------------------------------",
  "Fullscreen Icon Color": "white",
  "Prev Icon Color": "white",
  "Play Icon Color": "red",
  "Pause Icon Color": "white",
  "Forward Icon Color": "white",
  "Progress Bar Color": "red",
  // ----
};
