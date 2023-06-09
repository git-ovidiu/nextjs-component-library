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
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";

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
	title: "Organisms/Listing/Highlights",
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

//@ts-ignore
const Template: ComponentStory<{}> = () =>
	<section className={"o-listing-highlights"}>

		<CustomWrapper
			border-radius="0px"
			space-top="m"
			space-bottom="m"
			background-color-theme={"secondary"}
		>
			<CustomGridRow vertical-alignment="center">
				<CustomGridColumn
					lg={4}
					xs={12}
				>
						<TitleAndDescription
							action={<ButtonSlide hover-effect="slide-right" padding="xs" text="button text"/>}
							description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
							label={<Description color="red" text="Label"/>}
							text-align="left"
							title={<AnimatedText text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti" variant="h4"/>}
						/>
				</CustomGridColumn>

				<CustomGridColumn
					lg={8}
					xs={12}
				>
					<Splide aria-label="My Favorite Images" options={{
						gap: '2%',
						perPage: 2,
						breakpoints: {
							576: {
								perPage: 1,
							},
							992: {
								perPage: 2,
							},
						},


					}}>

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
				</CustomGridColumn>

			</CustomGridRow>
		</CustomWrapper>
		{/*	</CustomGridRow>*/}
		{/*</CustomWrapper>*/}
	</section>
;

export const ListingCards_STORY = Template.bind({});

