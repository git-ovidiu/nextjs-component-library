import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import FaqItem from "./FAQ-item";
import AnimatedText from "../Animated-text/Animated-text";
import {HiChevronDown} from "react-icons/hi";

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
    <td>title</td>
    <td>ReactElement</td>
    <td>-</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>arrow</td>
    <td>ReactElement</td>
    <td>React Icon</td>
  </tr>
</table>
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
  <li>--faq-item-icon-margin-top</li>
  <li>--faq-item-background</li>
  <li>--faq-item-border-radius</li>
  <li>--faq-item-box-shadow</li>
  <li>--faq-item-padding</li>
  <li>--faq-item-content-padding-right</li>
  <li>--faq-item-content-title-opacity</li>
  <li>--faq-item-content-title-font-weight</li>
  <li>--faq-item-content-title-transition</li>
  <li>--faq-item-arrow-opacity</li>
  <li>--faq-item-max-width</li>
</ol>
<table>
  <tr>
    <td>--faq-item-icon-margin-top</td>
    <td>-2px</td>
  </tr>
  <tr>
    <td>--faq-item-background</td>
    <td>$color-white</td>
  </tr>
  <tr>
    <td>--faq-item-border-radius</td>
    <td>$border-radius-m</td>
  </tr>
  <tr>
    <td>--faq-item-box-shadow</td>
    <td>$box-shadow-xl</td>
  </tr>
  <tr>
    <td>--faq-item-padding</td>
    <td>40px</td>
  </tr>
  <tr>
    <td>--faq-item-content-padding-right</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>--faq-item-content-title-opacity</td>
    <td>0.7</td>
  </tr>
  <tr>
    <td>--faq-item-content-title-font-weight</td>
    <td>600</td>
  </tr>
  <tr>
    <td>--faq-item-content-title-transition</td>
    <td>all #{$transition-duration-normal}</td>
  </tr>
  <tr>
    <td>--faq-item-arrow-opacity</td>
    <td>0.7</td>
  </tr>
  <tr>
    <td>--faq-item-max-width</td>
    <td>95%</td>
  </tr>
</table>
`;

export default {
  title: "Atoms/Text/FAQ Item",
  component: FaqItem,

  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof FaqItem>;

const Template: ComponentStory<typeof FaqItem> = (args) => (
  <FaqItem {...args} title={<AnimatedText
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis officia libero dolores. Delectus repellendus dolore accusamus!"
      variant="h2"
  />}
  arrow={<HiChevronDown size={25} />}/>
);

export const FaqItem_story = Template.bind({});
FaqItem_story.args = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla facere minus eum similique voluptatum necessitatibus magni corporis accusantium ad deserunt harum architecto sint fuga eius voluptas quisquam maiores placeat",
};
