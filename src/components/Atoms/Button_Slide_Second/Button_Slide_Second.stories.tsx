import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button_Slide_Second from './Button_Slide_Second';

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
`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
title: 'Atoms/Button_Slide_Second',
component: Button_Slide_Second,
parameters: {
actions: {disabled: true},
docs: {
description: {
component: Extra_Info
}
}
}
} as ComponentMeta<typeof Button_Slide_Second>;


  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Button_Slide_Second> = (args) =>
    <Button_Slide_Second {...args} />;


    export const Button_Slide_Second_story = Template.bind({});
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    Button_Slide_Second_story.args = {
    text: 'Hello world!',
    hover_effect: "tertiary"
    };