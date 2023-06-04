import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomGridRow from "./Custom-grid-row";
import CustomGridColumn from "../Column/Custom-grid-column";

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
  <td>vertical-alignment</td>
  <td>string</td>
  <td>start | center | end</td>
</tr>
  <tr>
  <td>reverse-breakpoint</td>
  <td>string</td>
  <td>sm | md | lg | xl | xxl</td>
</tr>
  <tr>
  <td>row-background</td>
  <td>string</td>
  <td>hex || color name || rgb</td>
</tr>
</table>
<br>
`;

export default {
	title: "Styleguide/Grid/Row",
	component: CustomGridRow,
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
} as ComponentMeta<typeof CustomGridRow>;

const Template: ComponentStory<typeof CustomGridRow> = (args) => (
	<CustomGridRow {...args}
		vertical-alignment={args["vertical-alignment"]}
		reverse-breakpoint={args["reverse-breakpoint"]}
	    row-background={args["row-background"]}
	>
		<CustomGridColumn
			xs={12}
			sm={5}
			md={5}
			lg={5}
			xl={5}
			xxl={5}
		>
			<h1
				style={{
					border: '2px solid black',
					padding: '20px',
					background: 'black',
					color: '#4cbfa6'
				}}
			>
				offset-- & col--6 1
			</h1>
		</CustomGridColumn>
		<CustomGridColumn
			xs={12}
			sm={7}
			md={7}
			lg={7}
			xl={7}
			xxl={7}
		>
			<h1
				style={{
					border: '2px solid black',
					padding: '20px',
					background: 'black',
					color: '#4cbfa6'
				}}
			>
				offset-- & col--6 2
			</h1>
		</CustomGridColumn>
	</CustomGridRow>
);

export const CustomGridRow_STORY = Template.bind({});

CustomGridRow_STORY.args = {
	"vertical-alignment": "center",
	"reverse-breakpoint": "md",
	"row-background": '#4cbfa6'
};