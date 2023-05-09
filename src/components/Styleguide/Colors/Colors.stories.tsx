import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Colors from "./Colors";

const Extra_Info = `
<br>

<table>
  <tr>
    <td>$primary-color</td>
    <td>'#4cbfa6'</td>
  </tr>
  <tr>
    <td>$secondary-color</td>
    <td>'#f6ebf4'</td>
  </tr>
  <tr>
    <td>$tertiary-color</td>
    <td>'#482673'</td>
  </tr>
  <tr>
    <td>$extra-color</td>
    <td>'#301008'</td>
  </tr>
  <tr>
    <td>$border-color</td>
    <td>rgb(110, 108, 108)</td>
  </tr>
  <tr>
    <td>$color-black</td>
    <td>'#000000'</td>
  </tr>
  <tr>
    <td>$color-white</td>
    <td>'#ffffff'</td>
  </tr>
</table>
`;

export default {
  title: "Styleguide/Colors",
  component: Colors,
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const Colors_story = Template.bind({});
