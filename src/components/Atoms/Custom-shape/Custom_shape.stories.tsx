import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomShape from "./Custom-shape";
import Image from "next/image"

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
	component: CustomShape,
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
} as ComponentMeta<typeof CustomShape>;

const Template: ComponentStory<typeof CustomShape> = (args) => (
	<CustomShape {...args}
		  margin-top= "40px"
				 shape={
					 <Image
						 src="https://camonysi.sirv.com/NextJS%20Component%20Library/Shapes_mlzoj0.svg"
						 alt="Placeholder"
						 width={350}
						 height={300}
					 />
				 }
	/>
);

export const CustomShape_STORY = Template.bind({});

CustomShape_STORY.args = {

};