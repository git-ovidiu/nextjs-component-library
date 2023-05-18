import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title_and_description from "./Title_and_description";

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
	title: "Atoms/Molecules/Organisms/Title_and_description",
	component: Title_and_description,
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
} as ComponentMeta<typeof Title_and_description>;

const Template: ComponentStory<typeof Title_and_description> = (args) => (
	<Title_and_description {...args} />
);

export const Title_and_description_STORY = Template.bind({});

Title_and_description_STORY.args = {
	selectOption: 'selectOption_3',
	text: "Placeholder text",
};