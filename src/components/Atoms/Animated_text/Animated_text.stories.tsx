import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Animated_text from './Animated_text';

const Extra_Info = `
<br>
<h2><u>CSS VARIABLES</u></h2>
<ul>
<li>--animated-title-transition-duration</li>
<li>--animated-title-transition-timing-function</li>
</ul>

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
</table>
<br>
<h2><u>IT HAS 2 PROPS</u></h2>
<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
  <tr>
    <td>text</td>
    <td>ReactElement</td>
    <td>-</td>
  </tr>
  <tr>
    <td>variant</td>
    <td>string</td>
    <td>h1, h2, h3, h4, p</td>
  </tr>
</table>

`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
title: 'Atoms/Animated_text',
component: Animated_text,
argTypes: {
  variant: {
  control: "radio",
  options: ["h1", "h2", "h3", "h4", "p"]
  },
  },
parameters: {
actions: {disabled: true},
docs: {
description: {
component: Extra_Info
}
}
}
} as ComponentMeta<typeof Animated_text>;


  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Animated_text> = (args) =>
    <Animated_text {...args} />;


    export const Animated_text_story = Template.bind({});
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    Animated_text_story.args = {
    variant: 'h1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis officia libero dolores. Delectus repellendus dolore accusamus!'
    };
