import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from "./Divider";
import {SimpleDivider} from "components/components"

const Extra_Info = `
<br>
<h2><u>PROPS</u></h2>
<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
<tr>
<td>divider</td>
<td>ReactElement</td>
<td>use 'Simple_divider'</td>
</tr>
<tr>
<td>position</td>
<td>string</td>
<td><b>left | center | right</b></td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--m-divider-width</li>
<li>--m-divider-padding</li>
</ol>

<table>
 <tr>
 <td>--m-divider-width</td>
 <td>100%</td>
</tr>
 <tr>
 <td>--m-divider-padding</td>
 <td>unset</td>
</tr>
</table>
`;

export default {
  title: "Molecules/Divider/Horizontal",
  component: Divider,
    argTypes:{
      position:{
          control: "radio",
          options: ["left", "center", "right"]
      },
    },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
    <Divider
      divider={
            <>
              <SimpleDivider loop={false} border-radius="10px 0px 0px 10px" animate={true} animation-duration="1s" width="100%" height="5px" color="red" />
              <SimpleDivider loop={false} border-radius="0px" animate={true} animation-duration="1s" width="100%" height="5px" color="blue" />
              <SimpleDivider loop={false} border-radius="0px 10px 10px 0px" animate={true} animation-duration="1s" width="100%" height="5px" color="green" />
            </>
      }
      position={args.position}
      width={args.width}
    />
);

export const Divider_STORY = Template.bind({});

Divider_STORY.args = {
    position: "left",
    width: "200px"
};