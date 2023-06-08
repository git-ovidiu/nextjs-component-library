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
	Label, TitleAndDescription,
} from "../../index";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./styles/Listing-cards-slider.scss";

// import "@splidejs/react-splide/css";

// or other themes
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";
//
// or only core styles
// import "@splidejs/react-splide/css/core";

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
	title: "Organisms/Listing/Cards Slider",
	parameters: {
		actions: { disabled: true },
		controls: {disabled: true},
		layout: "fullscreen",
		docs: {
			description: {
				component: Extra_Info,
			},
		},
	},
};

const Template: ComponentStory<{}> = () =>
	<section className={"o-listing-cards-slider"}>

				<Splide aria-label="My Favorite Images" options={{
					gap: '2%',
					perPage: 3,
						breakpoints: {
							576: {
								perPage: 1,
							},
							992: {
								perPage: 3,
							},
						},


				}}>
					<SplideSlide>
							<Card
								is-overlapped
								image={<img alt="placeholder" src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659799/samples/ecommerce/leather-bag-gray.jpg" width="100%"/>}
								labels={<><Label background-color="black" color="white" text="Placeholder text"/><Label background-color="black" color="white" text="Placeholder text"/></>}
								title={<AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque." variant="h5"/>}
								description={<Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!"/>}
								buttons={<><ButtonSlide hover-effect="slide-right" icon={<AiOutlineDownload size={20} />} icon-position="right" padding="xxs" text="Placeholder text"/><ButtonLineDrawing icon={<AiOutlineDownload size={20} />} icon-position="right" line-effect="line-below" padding="xxs" text="Placeholder text"/></>}
							/>
					</SplideSlide>
					<SplideSlide>
						<Card
							is-overlapped
							image={<img alt="placeholder" src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659799/samples/ecommerce/leather-bag-gray.jpg" width="100%"/>}
							labels={<><Label background-color="black" color="white" text="Placeholder text"/><Label background-color="black" color="white" text="Placeholder text"/></>}
							title={<AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque." variant="h6"/>}
							description={<Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!"/>}
							buttons={<><ButtonSlide hover-effect="slide-right" icon={<AiOutlineDownload size={20} />} icon-position="right" padding="xxs" text="Placeholder text"/><ButtonLineDrawing icon={<AiOutlineDownload size={20} />} icon-position="right" line-effect="line-below" padding="xxs" text="Placeholder text"/></>}
						/>
					</SplideSlide>

					<SplideSlide>
						<Card
							is-overlapped
							image={<img alt="placeholder" src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659799/samples/ecommerce/leather-bag-gray.jpg" width="100%"/>}
							labels={<><Label background-color="black" color="white" text="Placeholder text"/><Label background-color="black" color="white" text="Placeholder text"/></>}
							title={<AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque." variant="h4"/>}
							description={<Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!"/>}
							buttons={<><ButtonSlide hover-effect="slide-right" icon={<AiOutlineDownload size={20} />} icon-position="right" padding="xxs" text="Placeholder text"/><ButtonLineDrawing icon={<AiOutlineDownload size={20} />} icon-position="right" line-effect="line-below" padding="xxs" text="Placeholder text"/></>}
						/>
					</SplideSlide>

					<SplideSlide>
						<Card
							is-overlapped
							image={<img alt="placeholder" src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659799/samples/ecommerce/leather-bag-gray.jpg" width="100%"/>}
							labels={<><Label background-color="black" color="white" text="Placeholder text"/><Label background-color="black" color="white" text="Placeholder text"/></>}
							title={<AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque." variant="h4"/>}
							description={<Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!"/>}
							buttons={<><ButtonSlide hover-effect="slide-right" icon={<AiOutlineDownload size={20} />} icon-position="right" padding="xxs" text="Placeholder text"/><ButtonLineDrawing icon={<AiOutlineDownload size={20} />} icon-position="right" line-effect="line-below" padding="xxs" text="Placeholder text"/></>}
						/>
					</SplideSlide>

					<SplideSlide>
						<Card
							is-overlapped
							image={<img alt="placeholder" src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1667659799/samples/ecommerce/leather-bag-gray.jpg" width="100%"/>}
							labels={<><Label background-color="black" color="white" text="Placeholder text"/><Label background-color="black" color="white" text="Placeholder text"/></>}
							title={<AnimatedText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque." variant="h4"/>}
							description={<Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!"/>}
							buttons={<><ButtonSlide hover-effect="slide-right" icon={<AiOutlineDownload size={20} />} icon-position="right" padding="xxs" text="Placeholder text"/><ButtonLineDrawing icon={<AiOutlineDownload size={20} />} icon-position="right" line-effect="line-below" padding="xxs" text="Placeholder text"/></>}
						/>
					</SplideSlide>
				</Splide>


		{/*	</CustomGridRow>*/}
		{/*</CustomWrapper>*/}
	</section>
;

export const ListingCards_STORY = Template.bind({});

