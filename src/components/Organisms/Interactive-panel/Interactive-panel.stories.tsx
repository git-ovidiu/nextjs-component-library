import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
	AnimatedText,
	ButtonLineDrawing,
	ButtonSlide,
	Card,
	CustomGridColumn,
	CustomGridRow,
	CustomWrapper,
	Description, Divider,
	Label,
	MediaImage, SimpleDivider,
	TitleAndDescription,
} from "../../index";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import {BiCoffeeTogo} from "react-icons/bi"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import InteractivePanel from "./Interactive-panel"

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
	title: "Organisms/Interactive Panel",
	parameters: {
		actions: { disabled: true },
		controls: { disabled: true },
		layout: "fullscreen",
		docs: {
			description: {
				component: Extra_Info,
			},
		},
	},
};

//@ts-ignore
const Template: ComponentStory<{}> = (args) => {


	return (
		<InteractivePanel
			card={
			<>
			<h1>card1</h1>
			<h1>card2</h1>
			</>
			}
			button={
				<>
					<button>button1</button>
					<button>button2</button>
				</>
			}
		/>
	);
};

export const ListingCards_STORY = Template.bind({});