import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {AiOutlineDownload} from "react-icons/ai";
import Card from "./Card";
import {AnimatedText, ButtonSlide, Description, Label, Logo, MediaImage} from "../../../index";
import ButtonLineDrawing from "../../Atoms/Button-line-drawing";
import Image from "next/image"

const Extra_Info = `
<br>
<h2><u>PROPS</u></h2>
<table>
  <tr>
    <td><b>NAME</b></td>
    <td><b>TYPE</b></td>
  </tr>
  <tr>
    <td>image</td>
    <td>ReactElement</td>
  </tr>
  <tr>
    <td>labels</td>
    <td>ReactElement</td>
  </tr>
  <tr>
    <td>title</td>
    <td>ReactElement</td>
  </tr>
  <tr>
    <td>description</td>
    <td>ReactElement</td>
  </tr>
  <tr>
    <td>buttons</td>
    <td>ReactElement</td>
  </tr>
  <tr>
    <td>image-full-width</td>
    <td>boolean</td>
  </tr>
  <tr>
    <td>is-overlapped</td>
    <td>boolean</td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--m-card-background</li>
<li>--m-card-padding</li>
<li>--m-card-box-shadow</li>
<li>--m-card-border-radius</li>
<li>--m-card-content-background</li>
<li>--m-card-height</li>
<li>--m-card-image-height</li>
<li>--m-card-image-object-fit</li>
<li>--m-card-labels-gap</li>
<li>--m-card-title-margin-top</li>
<li>--m-card-description-margin-top</li>
<li>--m-card-buttons-margin-top</li>
<li>--m-card-buttons-gap</li>
<li>--m-card-overlapped-width</li>
<li>--m-card-overlapped-margin-top</li>
<li>--m-card-overlapped-side-distance-mobile</li>
<li>--m-card-overlapped-side-distance-tablet</li>
<li>--m-card-overlapped-side-distance-desktop</li>
<li>--m-card-labels-margin-top</li>
</ol>
<table>
  <tr>
    <td>--m-card-background</td>
    <td>rgba(255, 255, 255, 0.425)</td>
  </tr>
  <tr>
    <td>--m-card-padding</td>
    <td>24px</td>
  </tr>
  <tr>
    <td>--m-card-box-shadow</td>
    <td>$box-shadow-xxxl</td>
  </tr>
  <tr>
    <td>--m-card-border-radius</td>
    <td>20px 20px 60px 20px</td>
  </tr>
  <tr>
    <td>--m-card-content-background</td>
    <td>$color-white</td>
  </tr>
  <tr>
    <td>--m-card-height</td>
    <td>100%</td>
  </tr>
  <tr>
    <td>--m-card-image-height</td>
    <td>250px</td>
  </tr>
  <tr>
  <td>--m-card-labels-margin-top</td>
  <td>24px</td>
</tr>
  <tr>
    <td>--m-card-image-object-fit</td>
    <td>cover</td>
  </tr>
  <tr>
    <td>--m-card-labels-gap</td>
    <td>8px</td>
  </tr>
  <tr>
    <td>--m-card-title-margin-top</td>
    <td>12px</td>
  </tr>
  <tr>
    <td>--m-card-description-margin-top</td>
    <td>4px</td>
  </tr>
  <tr>
    <td>--m-card-buttons-margin-top</td>
    <td>24px</td>
  </tr>
  <tr>
    <td>--m-card-buttons-gap</td>
    <td>16px</td>
  </tr>
  <tr>
    <td>--m-card-overlapped-width</td>
    <td>75%</td>
  </tr>
  <tr>
    <td>--m-card-overlapped-margin-top</td>
    <td>-40px</td>
  </tr>
<tr>
<td>--m-card-overlapped-side-distance-mobile</td>
<td>60px</td>
</tr>
<tr>
<td>--m-card-overlapped-side-distance-tablet</td>
<td>70px</td>
</tr>
<tr>
<td>--m-card-overlapped-side-distance-desktop</td>
<td>80px</td>
</tr>
</table>

`;

export default {
  title: "Molecules/Card",
  component: Card,
  argTypes:{
    variant: {
      control: "radio",
      options: [
        "please refresh the page if you change the values below",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
      ],
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
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ maxWidth: "360px", background: "white" }}>
    <Card
        image-height-mobile={args["image-height-mobile"]}
        image-height-tablet={args["image-height-tablet"]}
        image-height-desktop={args["image-height-desktop"]}
      {...args}

        shape={
          <Image fill src={"https://camonysi.sirv.com/portofolio/interactive-panel-card-background.svg"} alt={"Placeholder"} />
        }

      image={
        <MediaImage
            image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://camonysi.sirv.com/NextJS%20Component%20Library/react-component-library-2.jpg"/>}
            image-border-radius="30px"
            object-fit="cover"
            padding-bottom-desktop="0%"
            padding-bottom-mobile="0%"
            padding-bottom-tablet="0%"
        />
      }
      labels={
        <>
          <Label
            background-color="black"
            color="white"
            text="Placeholder text"
          />
          <Label
            background-color="black"
            color="white"
            text="Placeholder text"
          />
        </>
      }
      title={
        <AnimatedText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
          //@ts-ignore
          variant="h5"
        />
      }
      description={
        <Description
            text={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!</p>}
        />
      }
      buttons={
        <>
          <ButtonSlide
              hover-effect="slide-right"
              icon={<AiOutlineDownload size={20} />}
              icon-position="right"
              link-url="https://www.google.com"
              open-in-new-tab
              padding="xs"
              text="Placeholder text"
          />
          <>
            <ButtonLineDrawing
                icon={<AiOutlineDownload size={20} />}
                icon-position="right"
                line-effect="line-below"
                link-url="https://www.google.com"
                open-in-new-tab
                padding="m"
                text="Placeholder text"
            />
          </>
        </>
      }
    />
  </div>
);
export const Card_story = Template.bind({});
Card_story.args = {
  "is-overlapped": true,
  "image-full-width": true,
  buttons: undefined,
  "image-height-mobile": "250px",
  "image-height-tablet": "250px",
  "image-height-desktop": "250px",
};
