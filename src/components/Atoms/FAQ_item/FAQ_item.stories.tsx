import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FAQ_item from './FAQ_item';

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
title: 'Atoms/FAQ_item',
component: FAQ_item,

parameters: {
actions: {disabled: true},
docs: {
description: {
component: Extra_Info
}
}
}
} as ComponentMeta<typeof FAQ_item>;


  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof FAQ_item> = (args) =>
  <>
    <FAQ_item {...args} />
  </>


    export const FAQ_item_story = Template.bind({});
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    FAQ_item_story.args = {
     title: <h1>cacat</h1>,
     description: <div><br /><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad autem dolorem praesentium vel hic vero similique quasi ex inventore laborum beatae, provident molestias fuga labore dignissimos nesciunt alias.</p></div>,
    arrow: <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L13 1" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>,
    close: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 1L1 13M1 1L13 13" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    }
