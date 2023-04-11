import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiOutlineDownload } from "react-icons/ai";
import Card from "./Card";
import { Animated_text, Button_slide, Label } from "../../../index";

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
    <td>image_full_width</td>
    <td>boolean</td>
  </tr>
  <tr>
    <td>is_overlapped</td>
    <td>boolean</td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ul>
<li>--m-card-background</li>
<li>--m-card-padding</li>
<li>--m-card-box-shadow</li>
<li>--m-card-border-radius</li>
<li>--m-card-content-background</li>
<li>--m-card-height</li>
<li>--m-card-image-height</li>
<li>--m-card-image-object-fit</li>
<li>--m-card-labels-margin-top</li>
<li>--m-card-labels-gap</li>
<li>--m-card-title-margin-top</li>
<li>--m-card-description-margin-top</li>
<li>--m-card-buttons-margin-top</li>
<li>--m-card-buttons-gap</li>
<li>--m-card-button-padding</li>
<li>--m-card-overlapped-width</li>
<li>--m-card-overlapped-margin-top</li>
</ul>
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
    <td>300px</td>
  </tr>
  <tr>
    <td>--m-card-image-object-fit</td>
    <td>cover</td>
  </tr>
  <tr>
    <td>--m-card-labels-margin-top</td>
    <td>24px</td>
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
    <td>--m-card-button-padding</td>
    <td>10px 20px</td>
  </tr>
  <tr>
    <td>--m-card-overlapped-width</td>
    <td>75%</td>
  </tr>
  <tr>
    <td>--m-card-overlapped-margin-top</td>
    <td>-40px</td>
  </tr>
</table>

`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Card",
  component: Card,
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
  <div style={{ width: "360px" }}>
    <Card {...args} />
  </div>
);
export const Card_story = Template.bind({});
Card_story.args = {
  is_overlapped: true,
  image: (
    <img
      src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659799/samples/ecommerce/leather-bag-gray.jpg"
      alt="placeholder"
      width="100%"
    />
  ),
  image_full_width: false,
  labels: (
    <>
      <Label
        backgroundColor="black"
        color="white"
        text="Placeholder text"
      />
      <Label
        backgroundColor="black"
        color="white"
        text="Placeholder text"
      />
    </>
  ),
  title: (
    <Animated_text
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
      variant="h3"
    />
  ),
  description: ( 
    <Animated_text
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!"
      variant="p"
      />
  ),
  buttons: (
    <>
      <Button_slide
        hover_effect="slide-right"
        icon={<AiOutlineDownload size={20} />}
        iconPosition="right"
        text="Placeholder text"
      />
      <Button_slide
        hover_effect="slide-right"
        icon={<AiOutlineDownload size={20} />}
        iconPosition="right"
        text="Placeholder text"
      />
    </>
  ),
};
