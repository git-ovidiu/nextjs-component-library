import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Custom_grid_column from "./Custom_grid_column";
import "../../../../styles/bootstrap/css/bootstrap.css";


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
	title: "Styleguide/Grid/Column",
	component: Custom_grid_column,
	argTypes: {
		size: {
			control: {
				type: 'range',
				min: 1,
				max: 12,
				step: 1
			},

		},
		"offset-size": {
			control: {
				type: 'range',
				min: 0,
				max: 11,
				step: 1
			}
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
} as ComponentMeta<typeof Custom_grid_column>;

const Template: ComponentStory<typeof Custom_grid_column> = (args) => (
	<Custom_grid_column {...args}
		// breakpoint={args.breakpoint}
		// size={args.size}
		// offset-breakpoint={args["offset-breakpoint"]}
		// offset-size={args["offset-size"]}
		// extra-classes=""
		xs={args.size}
		sm={args.size}
		md={args.size}
		lg={args.size}
		xl={args.size}
		xxl={args.size}

		xs-offset={args["offset-size"]}
		sm-offset={args["offset-size"]}
		md-offset={args["offset-size"]}
		lg-offset={args["offset-size"]}

	>
		<h1 style={{border: "2px solid red"}}>offset-{args["offset-breakpoint"]}-{args["offset-size"]} & col-{args.breakpoint}-{args.size}</h1>
	</Custom_grid_column>
);

export const Custom_grid_column_STORY = Template.bind({});

Custom_grid_column_STORY.args = {
	// breakpoint: 'md',
	// size: 5,
	// "offset-breakpoint": 'sm',
	// "offset-size": 0
};