import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Simple_divider from "./Simple_divider";

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
<td>color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>height</td>
<td>string</td>
<td>0px | 100%</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>0px | 100%</td>
</tr>
<tr>
<td>animate</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>animation-duration</td>
<td>string</td>
<td>1s</td>
</tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--a-simple-divider-background</li>
<li>--a-simple-divider-height</li>
<li>--a-simple-divider-width</li>
<li>--a-simple-divider-animation-duration</li>
</ol>

<table>
<tr>
<td>--a-simple-divider-background</td>
<td>$primary-color</td>
</tr>
<tr>
<td>--a-simple-divider-height</td>
<td>3px</td>
</tr>
<tr>
<td>--a-simple-divider-width</td>
<td>100%</td>
</tr>
<tr>
<td>--a-simple-divider-animation-duration</td>
<td>1s</td>
</tr>
</table>
`;

export default {
	title: "Atoms/Simple_divider",
	component: Simple_divider,
	parameters: {
		actions: { disabled: true },
		docs: {
			description: {
				component: Extra_Info,
			},
		},
	},
} as ComponentMeta<typeof Simple_divider>;

const Template: ComponentStory<typeof Simple_divider> = (args) => (
	<Simple_divider
		color= {args.color}
		height={args.height}
		width= {args.width}
		animate={args.animate}
		animation-duration={args["animation-duration"]}
	/>
);

export const Simple_divider_STORY = Template.bind({});

Simple_divider_STORY.args = {
	color: "#4cbfa6",
	height: "2px",
	width: "100%",
	animate: true,
	"animation-duration": "1s"
};