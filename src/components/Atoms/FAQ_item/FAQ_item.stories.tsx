import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FAQ_item from './FAQ_item';
import Animated_text from '../Animated_text/Animated_text'

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
  <li>--faq-item-transition-duration</li>
  <li>--faq-item-transition-timing-function</li>
  <li>--faq-item-arrow-opacity</li>
  <li>--faq-item-max-width</li>
</ul>
<table>
  <tr>
    <td>--faq-item-icon-margin-top</td>
    <td>10px</td>
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
    <td>--faq-item-transition-duration</td>
    <td>0.5s</td>
  </tr>
  <tr>
    <td>--faq-item-transition-timing-function</td>
    <td>cubic-bezier(0.19, 1, 0.22, 1)</td>
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
      <FAQ_item {...args} />
    </>


    export const FAQ_item_story = Template.bind({});
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    FAQ_item_story.args = {
    title: <Animated_text variant="h1" text={<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, facere.</h1>}/>,
      description:
      <Animated_text variant="p" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, facere." />,
      arrow: <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L13 1" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      close: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L1 13M1 1L13 13" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      }