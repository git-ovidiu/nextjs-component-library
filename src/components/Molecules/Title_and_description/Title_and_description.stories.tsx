import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title_and_description from "./Title_and_description";
import Description from "../../Atoms/Description";
import Animated_text from "../../Atoms/Animated_text";
import Button_slide from "../../Atoms/Button_Slide";

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
	title: "Molecules/Title_and_description",
	component: Title_and_description,
	argTypes: {
		text_align: {
			control: "radio",
			options: ["left", "center", "right"],
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
	<div style={{maxWidth:  "600px"}}>
		<Title_and_description {...args} />
	</div>
);

export const Title_and_description_STORY = Template.bind({});

Title_and_description_STORY.args = {
	text_align: "left",
	label: <Description text={<p>label</p>} color="red" />,
	title: <Animated_text variant="h2" text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti" />,
	description: <Description text={<p>semper sed adolescens vocent molestiae equidem tale consectetuer repudiandae viverra nostra habeo legere bibendum ceteros vivendo voluptatibus quem voluptatum diam tantas nisl debet oporteat solet epicurei lorem voluptatibus parturient aliquet</p>}
	/>,
	action: <Button_slide text="button text" hover_effect="slide-right" padding="xs" />,
};