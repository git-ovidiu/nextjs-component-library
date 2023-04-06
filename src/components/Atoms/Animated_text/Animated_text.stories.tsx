import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Animated_text from './Animated_text';

const Extra_Info = `
<br>

<h2><u>CSS VARIABLES</u></h2>
<ul>
  animated text scss vars will be placed here
</ul>
`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
title: 'Atoms/Animated_text',
component: Animated_text,
argTypes: {
hover_effect: {
control: "radio",
options: ["slide-up", "slide-down", "slide-right", "slide-left"]
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
    text: 'Test!',
    };