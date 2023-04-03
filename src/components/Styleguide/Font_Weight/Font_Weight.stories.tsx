import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Font_Weight from './Font_Weight';


const Extra_Info = `
<br>
<table>
  <tr>
    <td>$font-weight-s</td>
    <td>400</td>
  </tr>
  <tr>
    <td>$font-weight-m</td>
    <td>500</td>
  </tr>
  <tr>
    <td>$font-weight-l</td>
    <td>600</td>
  </tr>
  <tr>
    <td>$font-weight-xl</td>
    <td>800</td>
  </tr>
</table>

`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
title: 'Styleguide/Font_Weight',
component: Font_Weight,
parameters: {
controls: { disabled: true },
actions: { disabled: true },
docs: {
description: {
component: Extra_Info
}
}
}
} as ComponentMeta<typeof Font_Weight>;


  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Font_Weight> = () =>
    <Font_Weight />;


    export const Font_Weight_story = Template.bind({});