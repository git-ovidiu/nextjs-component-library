import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FAQ_item from './FAQ_item';
import Animated_text from '../Animated_text/Animated_text'
import { HiChevronDown } from "react-icons/hi";

const Extra_Info = `
<br>

<h2><u>CSS VARIABLES</u></h2>
<ul>
  <li>--faq-item-icon-margin-top</li>
  <li>--faq-item-border-radius</li>
  <li>--faq-item-box-shadow</li>
  <li>--faq-item-padding</li>
  <li>--faq-item-content-padding-right</li>
  <li>--faq-item-content-title-opacity</li>
  <li>--faq-item-content-title-font-weight</li>
  <li>--faq-item-content-title-transition</li>
  <li>--faq-item-arrow-opacity</li>
  <li>--faq-item-max-width</li>
</ul>
<table>
  <tr>
    <td>--faq-item-icon-margin-top</td>
    <td>-2px</td>
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
    <td>all $transition-duration-normal</td>
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
`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/FAQ_item',
  component: FAQ_item,

  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info
      }
    }
  }
} as ComponentMeta<typeof FAQ_item>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FAQ_item> = (args) => <FAQ_item { ...args } />



export const FAQ_item_story = Template.bind({});
FAQ_item_story.args = {
  title: <Animated_text
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis officia libero dolores. Delectus repellendus dolore accusamus!"
  variant = "h2"/>,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla facere minus eum similique voluptatum necessitatibus magni corporis accusantium ad deserunt harum architecto sint fuga eius voluptas quisquam maiores placeat ut facilis mollitia voluptatem, minima repellendus? Quos vero molestiae, asperiores ex distinctio nesciunt minima repudiandae. Odit facere obcaecati dolores exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla facere minus eum similique voluptatum necessitatibus magni corporis accusantium ad deserunt harum architecto sint fuga eius voluptas quisquam maiores placeat ut facilis mollitia voluptatem, minima repellendus? Quos vero molestiae, asperiores ex distinctio nesciunt minima repudiandae. Odit facere obcaecati dolores exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nulla facere minus eum similique voluptatum necessitatibus magni corporis accusantium ad deserunt harum architecto sint fuga eius voluptas quisquam maiores placeat ut facilis mollitia voluptatem, minima repellendus? Quos vero molestiae, asperiores ex distinctio nesciunt minima repudiandae. Odit facere obcaecati dolores exercitationem!",
  arrow: <HiChevronDown size={ 25 } />,

}

