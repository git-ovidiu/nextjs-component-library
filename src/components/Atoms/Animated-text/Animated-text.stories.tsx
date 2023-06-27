import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AnimatedText from "./Animated-text";

const Extra_Info = `<br/>
<h2><u>PROPS</u></h2>
<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
  <tr>
    <td>text</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>variant</td>
    <td>string</td>
    <td>h1, h2, h3, h4, p</td>
  </tr>
  <tr>
    <td>color</td>
    <td>string</td>
    <td>hex || color name || rgb</td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--animated-title-transition-duration</li>
<li>--animated-title-transition-timing-function</li>
<li>--a-animated-text-color</li>
</ol>

<br>
<h2><u>CURRENT VALUES</u></h2>
<table>
  <tr>
    <td>--animated-title-transition-duration</td>
    <td>1s</td>
  </tr>
  <tr>
    <td>--animated-title-transition-timing-function</td>
    <td>cubic-bezier(0.19, 1, 0.22, 1)</td>
  </tr>
    <tr>
        <td>--a-animated-text-color</td>
        <td>$color-black</td>
    </tr>
</table>
<table>
`;


export default {
  title: "Atoms/Text/Animated Text",
  component: AnimatedText,
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "please refresh the page if you change the values below",
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
      ],
    },
  },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info
      },

    },
  },
} as ComponentMeta<typeof AnimatedText>;

const Template: ComponentStory<typeof AnimatedText> = (args) => (
  <span>
    <AnimatedText {...args} />
  </span>
);
export const AnimatedText_story = Template.bind({});

AnimatedText_story.args = {
  variant: "h1",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis officia libero dolores. Delectus repellendus dolore accusamus!",
  color: "black",
};
