import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SimpleDivider from "./Simple-divider";

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
<tr>
<td>border-radius</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
<tr>
<td>loop</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>animation-delay</td>
<td>string</td>
<td>0s</td>
</tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--a-simple-divider-background</li>
<li>--a-simple-divider-height</li>
<li>--a-simple-divider-width</li>
<li>--a-simple-divider-animation-duration</li>
<li>--a-simple-divider-border-radius</li>
<li>--a-simple-divider-animation-delay</li>
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
<tr>
<td>--a-simple-divider-border-radius</td>
<td>0px</td>
</tr>
<tr>
<td>--a-simple-divider-animation-delay</td>
<td>0s</td>
</tr>
</table>
`;

export default {
	title: "Atoms/Simple Divider",
	component: SimpleDivider,
	parameters: {
		actions: { disabled: true },
		docs: {
			description: {
				component: Extra_Info,
			},
		},
	},
} as ComponentMeta<typeof SimpleDivider>;

const Template: ComponentStory<typeof SimpleDivider> = (args) => (
	<SimpleDivider
		color= {args.color}
		height={args.height}
		width= {args.width}
		animate={args.animate}
		animation-duration={args["animation-duration"]}
		animate-vertical={args["animate-vertical"]}
		border-radius={args["border-radius"]}
		loop={args.loop}
		animation-delay={args["animation-delay"]}
	/>
);

export const SimpleDivider_STORY = Template.bind({});

SimpleDivider_STORY.args = {
	color: "#4cbfa6",
	height: "2px",
	width: "100%",
	"border-radius": "0px",
	animate: true,
	loop: true,
	"animate-vertical": false,
	"animation-duration": "1s",
	"animation-delay": "0s"
};