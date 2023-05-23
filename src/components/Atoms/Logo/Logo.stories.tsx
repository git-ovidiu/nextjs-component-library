import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Logo from "./Logo";
import Image from "next/image";

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

// Mock implementation for Link component
const Link = ({ href, target, children }) => (
	<a href={href} target={target} rel="noopener noreferrer">
		{children}
	</a>
);

export default {
	title: "Atoms/Logo",
	component: Logo,
	argTypes: {
		selectOption: {
			control: "radio",
			options: ["selectOption_1", "selectOption_2", "selectOption_3", "selectOption_4"],
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
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
	<Logo {...args} />
);

export const Logo_STORY = Template.bind({});

Logo_STORY.args = {
	logo: (
		<Link href="https://www.google.com" target="_blank">
			<Image src="https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png" alt="Placeholder"/>
		</Link>
	),
	background: "gray",
};
