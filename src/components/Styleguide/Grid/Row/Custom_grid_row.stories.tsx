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
		"reverse-breakpoint": {
			control: "radio",
			options: ["sm", "md", "lg", "xl", "xxl"],
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
	<Custom_grid_row {...args}
		vertical-alignment={args["vertical-alignment"]}
		reverse-breakpoint={args["reverse-breakpoint"]}
	>
		<Custom_grid_column
			xs={12}
			sm={5}
			md={5}
			lg={5}
			xl={5}
			xxl={5}
		>
			<h1
				style={{
					border: '2px solid #4cbfa6'
				}}
			>
				offset-- & col--6 1
			</h1>
		</Custom_grid_column>
		<Custom_grid_column
			xs={12}
			sm={7}
			md={7}
			lg={7}
			xl={7}
			xxl={7}
		>
			<h1
				style={{
					border: '2px solid #4cbfa6'
				}}
			>
				offset-- & col--6 2
			</h1>
		</Custom_grid_column>
	</Custom_grid_row>
);

export const Custom_grid_row_STORY = Template.bind({});

Custom_grid_row_STORY.args = {
	"vertical-alignment": "center",
	"reverse-breakpoint": undefined
};