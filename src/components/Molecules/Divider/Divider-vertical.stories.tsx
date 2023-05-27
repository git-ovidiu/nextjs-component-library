import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from "./Divider";
import { Simple_Divider } from "../../index";

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
<td>vertical</td>
<td>boolean</td>
<td>true (default)</td>
</tr>
<tr>
<td>position</td>
<td>string</td>
<td><b>bottom | center | top</b></td>
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
  title: "Molecules/Divider/Vertical",
  component: Divider,
    argTypes:{
        position:{
            control: "radio",
            options: ["bottom", "center", "top"]
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
  <div style={{display: 'flex', flexDirection: 'column', height: "100px"}}>
    <Divider
      divider={
        <>
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="red" />
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="black" />
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="orange" />
          <Simple_Divider animate-vertical={true} animation-duration="1s" width="3px" height="100%" color="red" />
        </>
      }
      position={args.position}
      vertical={true}
    />
  </div>
);

export const Divider_STORY = Template.bind({});

Divider_STORY.args = {
    position: "bottom",
};