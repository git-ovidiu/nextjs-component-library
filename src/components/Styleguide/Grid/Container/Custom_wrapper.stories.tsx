import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Custom_wrapper from "./Custom_wrapper";
import {
	Animated_text,
	Button_slide,
	Custom_grid_column, Custom_grid_row,
	Description,
	Logo,
	Media_image,
	Title_and_description
} from "../../../index"
import Image from "next/image"

import "../../../../styles/Global-Settings/Paddings.css";


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
	title: "Styleguide/Grid/Custom Wrapper",
	component: Custom_wrapper,
	argTypes: {
		selectOption: {
			control: "radio",
			options: ["selectOption_1", "selectOption_2", "selectOption_3", "selectOption_4"],
		}
	},
	parameters: {
		actions: { disabled: true },
		layout: 'fullscreen',
		docs: {
			description: {
				component: Extra_Info,
			},
		},
	},
} as ComponentMeta<typeof Custom_wrapper>;

const Template: ComponentStory<typeof Custom_wrapper> = (args) => (
	<Custom_wrapper {...args}
	space-top={args["space-top"]}
	space-bottom={args["space-bottom"]}
	background-color-theme="primary"
	custom-background-color='red'
	// custom-background-image="https://res.cloudinary.com/dxbivmheq/image/upload/v1685726349/gradient_1_ypzsxq.png"
	custom-background-video
	>
		<Custom_grid_row vertical-alignment="center">
			<Custom_grid_column
				lg={5}
				xs={12}
			>
				<Media_image
					image={<Image alt="Placeholder" fill src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>}
					image-border-radius="30px"
					label-bottom-right={<Logo background="white" border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
					object-fit="cover"
					padding-bottom-desktop="0%"
					padding-bottom-mobile="0%"
					padding-bottom-tablet="0%"
				/>
			</Custom_grid_column>
			<Custom_grid_column
				lg={7}
				xs={12}
			>
					<Title_and_description
						action={<Button_slide hover-effect="slide-right" padding="xs" text="button text"/>}
						description={<Description color="white" text="pulvinar numquam finibus hinc fames scelerisque sapientem errem bibendum discere platonem ornatus tacimates laoreet facilis animal sententiae aenean omittam definiebas"/>}
						label={<Description color="white" text="Label"/>}
						text-align="left"
						title={<Animated_text color={"white"} text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti" variant="h1"/>}
					/>

			</Custom_grid_column>
		</Custom_grid_row>
	</Custom_wrapper>
);

export const Custom_wrapper_STORY = Template.bind({});

Custom_wrapper_STORY.args = {
	"space-top": 'xxl',
	"space-bottom": 'xxl',
};


//todo add layout: 'fullscreen', for all the storybooks under the parameters