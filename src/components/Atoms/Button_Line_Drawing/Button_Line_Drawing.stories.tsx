import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button_Line_Drawing from './Button_Line_Drawing';

const Extra_Info = `
<br>

<h2><u>CSS VARIABLES</u></h2>
<ul>
  <li>--a-button-line-drawing-font-size</li>
  <li>--a-button-line-drawing-padding</li>
  <li>--a-button-line-drawing-line-height</li>
  <li>--a-button-line-drawing-font-weight</li>
  <li>--a-button-line-drawing-text-color</li>
  <li>--a-button-line-drawing-line-color</li>
  <li>--a-button-line-drawing-background-color</li>
  <li>--a-button-line-drawing-animation-transition</li>
  <li>--a-button-line-drawing-animation-transition-fast</li>
  <li>--a-button-line-drawing-animation-transition-faster</li>
  <li>--a-button-line-drawing-animation-transition-ultra-fast</li>
</ul>

<table>
  <tr>
    <td>--a-button-line-drawing-font-size</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-padding</td>
    <td>20px 30px</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-line-height</td>
    <td>2</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-font-weight</td>
    <td>400</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-text-color</td>
    <td>$color-black</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-line-color</td>
    <td>$tertiary-color</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-background-color</td>
    <td>transparent</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition</td>
    <td>$transition-duration-normal</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition-fast</td>
    <td>$transition-duration-fast</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition-faster</td>
    <td>$transition-duration-faster</td>
  </tr>
  <tr>
    <td>--a-button-line-drawing-animation-transition-ultra-fast</td>
    <td>$transition-duration-ultra-fast</td>
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
    <td>string</td>
    <td>-</td>
  </tr>
  <tr>
    <td>line_effect</td>
    <td>string</td>
    <td>line-below, line-above, line-side</td>
  </tr>
</table>
`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
title: 'Atoms/Button_Line_Drawing',
component: Button_Line_Drawing,
argTypes: {
line_effect: {
control: "radio",
options: ["line-below", "line-above", "line-side"]
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
} as ComponentMeta<typeof Button_Line_Drawing>;


  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Button_Line_Drawing> = (args) =>
    <Button_Line_Drawing {...args} />;


    export const Button_Line_Drawing_story = Template.bind({});
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    Button_Line_Drawing_story.args = {
    text: 'Hello world!',
    line_effect: "line-below"
    };