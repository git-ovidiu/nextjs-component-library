import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiOutlineDownload } from "react-icons/ai";
import Card from "./Card";
import { Animated_text, Button_slide } from "../../../index";

const Extra_Info = `
<br>

<h2><u>CSS VARIABLES</u></h2>
<ul>

</ul>

`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Card",
  component: Card,
  argTypes: {},
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{width: "360px"}}>
    <Card {...args} />
  </div>
);
export const Card_story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card_story.args = {
  image: (
    <img
      src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659799/samples/ecommerce/leather-bag-gray.jpg"
      alt="placeholder" width="100%"
    />
  ),
  labels: <p>labels</p>,
  title: <Animated_text
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
  variant="h3"
/>,
  description: <Animated_text
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!"
  variant="p"
/>,
  buttons:   <Button_slide
  hover_effect="slide-right"
  icon={<AiOutlineDownload size={20} />}
  iconPosition="right"
  text="Placeholder text"
/>,
};
