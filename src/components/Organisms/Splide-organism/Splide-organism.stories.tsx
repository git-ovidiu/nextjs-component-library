import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
	AnimatedText,
	ButtonLineDrawing,
	ButtonSlide,
	Card,
	CustomGridColumn,
	CustomGridRow,
	CustomWrapper, Description,
	Label, MediaImage, TitleAndDescription,
} from "../../index";
import { AiOutlineDownload } from "react-icons/ai";

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import {Splide, SplideSlide} from "@splidejs/react-splide"
import Image from "next/image"



// or only core styles
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
	title: "Organisms/Splide Auto Swiper",
	parameters: {
		actions: { disabled: true },
		controls: {disabled: true},
		layout: "fullscreen",
		// cover: false,
		destroy: true,
		// height: '100vh',
		docs: {
			description: {
				component: Extra_Info,
			},
		},
	},
};

//@ts-ignore
const Template: ComponentStory<{}> = () =>
	<section className={"o-splide-auto-swiper"}>
		<Splide aria-label="My Favorite Images"
		options={{
			interval: 1500,
			speed: 3000,
			autoplay: true,
			rewind: true,
			loop: true,
		 	type: 'fade',
			pauseOnHover: false,
			arrows: false,
		}}
		>
			<SplideSlide>
				<MediaImage
					image={<Image alt="Placeholder" fill src="https://camonysi.sirv.com/NextJS%20Component%20Library/react-component-library-2.jpg"/>}
					image-border-radius="0px"
					object-fit="cover"
					padding-bottom-desktop="0%"
					padding-bottom-mobile="0%"
					padding-bottom-tablet="0%"
				/>
			</SplideSlide>
			<SplideSlide>
				<MediaImage
					image={<Image alt="Placeholder" fill src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666019573/a129a097e1747b19d860dc475c25516c_fcd5ck.jpg"/>}
					image-border-radius="0px"
					object-fit="cover"
					padding-bottom-desktop="0%"
					padding-bottom-mobile="0%"
					padding-bottom-tablet="0%"
				/>
			</SplideSlide>
			<SplideSlide>
				<MediaImage
					image={<Image alt="Placeholder" fill src="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097092/cld-sample-4.jpg"/>}
					image-border-radius="0px"
					object-fit="cover"
					padding-bottom-desktop="0%"
					padding-bottom-mobile="0%"
					padding-bottom-tablet="0%"
				/>
			</SplideSlide>
		</Splide>
	</section>
;

export const ListingCards_STORY = Template.bind({});

