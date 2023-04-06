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
<li>--animated-title-transition-duration: 1s;</li>
<li>--animated-title-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);</li>
<br>
<h2><u>IT HAS 2 PROPS</u></h2>
<ol>
<li>text</li>
<li>variant 
<ul>
<li>h1</li>
<li>h2</li>
<li>h3</li>
<li>h4</li>
<li>p</li>
</ul></li>
</ol>

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
    text: <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis officia libero dolores. Delectus repellendus dolore accusamus!</h1>
    };
