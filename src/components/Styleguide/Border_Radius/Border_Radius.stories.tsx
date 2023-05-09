import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Border_Radius from "./Border_Radius";

const Extra_Info = `
<br>
<table>
  <tr>
    <td>$border-radius-0</td>
    <td>unset</td>
  </tr>
  <tr>
    <td>$border-radius-xs</td>
    <td>4px</td>
  </tr>
  <tr>
    <td>$border-radius-s</td>
    <td>8px</td>
  </tr>
  <tr>
    <td>$border-radius-m</td>
    <td>12px</td>
  </tr>
  <tr>
    <td>$border-radius-l</td>
    <td>16px</td>
  </tr>
  <tr>
    <td>$border-radius-xl</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>$border-radius-xxl</td>
    <td>30px</td>
  </tr>
  <tr>
    <td>$border-radius-xxxl</td>
    <td>40px</td>
  </tr>
</table>
`;

export default {
  title: "Styleguide/Border_Radius",
  component: Border_Radius,
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Border_Radius>;

const Template: ComponentStory<typeof Border_Radius> = () => <Border_Radius />;

export const Border_Radius_story = Template.bind({});
