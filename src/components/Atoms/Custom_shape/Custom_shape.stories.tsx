import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Custom_shape from "./Custom_shape";

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
    <td>text</td>
    <td>string</td>
    <td>-</td>
  </tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
  <li>--a-test-component-right-column-background</li>
</ol>

<table>
  <tr>
    <td>--a-test-component-right-column-background</td>
    <td>gray</td>
  </tr>
</table>
`;

export default {
	title: "Atoms/Custom Shape",
	component: Custom_shape,
	argTypes: {
		selectOption: {
			control: "radio",
			options: ["selectOption_1", "selectOption_2", "selectOption_3", "selectOption_4"],
		}
	},
	parameters: {
		actions: { disabled: true },
		docs: {
			description: {
				component: Extra_Info,
			},
		},
	},
} as ComponentMeta<typeof Custom_shape>;

const Template: ComponentStory<typeof Custom_shape> = (args) => (
	<Custom_shape {...args}
		  margin-top= "40px"
	/>
);

export const Custom_shape_STORY = Template.bind({});

Custom_shape_STORY.args = {

};