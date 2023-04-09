import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineDownload } from "react-icons/ai";
import Button_slide from './Button_Slide';

const Extra_Info = `
<br>

<h2><u>CSS VARIABLES</u></h2>
<ul>
  <li>--a-button-slide-background</li>
  <li>--a-button-slide-background-hover</li>
  <li>--a-button-slide-animation-transition</li>
  <li>--a-button-slide-border-radius</li>
  <li>--a-button-slide-font-size</li>
  <li>--a-button-slide-padding</li>
  <li>--a-button-slide-line-height</li>
  <li>--a-button-slide-font-weight</li>
  <li>--a-button-line-drawing-text-color</li>
</ul>
<table>
  <tr>
    <td>--a-button-slide-background</td>
    <td>$tertiary-color</td>
  </tr>
  <tr>
    <td>--a-button-slide-background-hover</td>
    <td>$primary-color</td>
  </tr>
  <tr>
    <td>--a-button-slide-animation-transition</td>
    <td>0.3s</td>
  </tr>
  <tr>
    <td>--a-button-slide-border-radius</td>
    <td>$border-radius-0</td>
  </tr>
  <tr>
    <td>--a-button-slide-font-size</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>--a-button-slide-padding</td>
    <td>20px 30px</td>
  </tr>
  <tr>
    <td>--a-button-slide-line-height</td>
    <td>1</td>
  </tr>
  <tr>
    <td>--a-button-slide-font-weight</td>
    <td>400</td>
  </tr>
  <tr>
    <td>--a-button-slide-text-color</td>
    <td>$color-white</td>
  </tr>
</table>
`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
title: 'Atoms/Button_slide',
component: Button_slide,
argTypes: {
hover_effect: {
control: "radio",
options: ["slide-up", "slide-down", "slide-right", "slide-left"]
},
iconPosition:{
  control: "radio",
  options: ["left", "right"]
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
} as ComponentMeta<typeof Button_slide>;


  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Button_slide> = (args) =>
  <div style={{display: "flex", gap: "50px"}}>
    <Button_slide {...args} />
    <Button_slide text="Placeholder text" hover_effect='slide-right' />
  </div>


    export const Button_slide_story = Template.bind({});
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    Button_slide_story.args = {
    text: 'Placeholder text',
    hover_effect: "slide-right",
    icon: <AiOutlineDownload size={20}/>,
    iconPosition: "right"
    };