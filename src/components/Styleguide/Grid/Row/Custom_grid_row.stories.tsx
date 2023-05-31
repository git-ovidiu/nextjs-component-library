import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Custom_grid_row from "./Custom_grid_row";
import Custom_grid_column from "../Column/Custom_grid_column"

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
	title: "Styleguide/Grid/Row",
	component: Custom_grid_row,
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
} as ComponentMeta<typeof Custom_grid_row>;

const Template: ComponentStory<typeof Custom_grid_row> = (args) => (
	<div className="container">
	<Custom_grid_row {...args}>
		<Custom_grid_column
			breakpoint="md"
			extra-classes=""
			offset-breakpoint="sm"
			offset-size={0}
			size={6}
		>
			<h1
				style={{
					border: '2px solid red'
				}}
			>
				offset-sm-0 & col-md-12
			</h1>
		</Custom_grid_column>

		<Custom_grid_column
			breakpoint="md"
			extra-classes=""
			offset-breakpoint="sm"
			offset-size={0}
			size={6}
		>
			<h1
				style={{
					border: '2px solid red'
				}}
			>
				offset-sm-0 & col-md-12
			</h1>
		</Custom_grid_column>
	</Custom_grid_row>
			</div>
);

export const Custom_grid_row_STORY = Template.bind({});

Custom_grid_row_STORY.args = {
	text: "Placeholder text",
};