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
<td>object-fit</td>
<td>string</td>
<td>cover | contain</td>
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
<td>by default, the controls will not be shown (those will appear only while on mouse hover)</td>
</tr>
<tr>
<td>hideShowControls</td>
<td>boolean</td>
<td>-</td>
<td>use to remove the controls entirely (used for cards with autoplay on)</td>
</tr>

<tr>
<td>auto-play</td>
<td>boolean</td>
<td>-</td>
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
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
    }}
  >
    {/*IMAGE*/}
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
          image={
            <Image
              //@ts-ignore
              src={args["Image Source"]}
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

    {/*VIDEO*/}
    <div
      style={{
        maxWidth: "500px",
        width: "100%",
        height: "400px",
        position: "relative",
      }}
    >
      <>
        <Media
          {...args}
          //@ts-ignore
          video={args.video}
          //@ts-ignore
          auto-play={args["auto-play"]}
          //@ts-ignore
          muted={args.muted}
          //@ts-ignore
          loop={args.loop}
          //@ts-ignore
          showControlsProperty={args["show-controls"]}
          //@ts-ignore
          fullscreen-icon-color={args["fullscreen-icon-color"]}
          //@ts-ignore
          prev-icon-color={args["prev-icon-color"]}
          //@ts-ignore
          play-icon-color={args["play-icon-color"]}
          //@ts-ignore
          pause-icon-color={args["pause-icon-color"]}
          //@ts-ignore
          forward-icon-color={args["forward-icon-color"]}
          //@ts-ignore
          progress-bar-color={args["progress-bar-color"]}
        />
      </>
    </div>
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
};
