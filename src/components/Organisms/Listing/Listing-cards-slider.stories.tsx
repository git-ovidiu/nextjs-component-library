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
  Description,
  Label,
  MediaImage,
  TitleAndDescription,
} from "../../index";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import { Custom_wrapper_STORY } from "../../Styleguide/Grid/Container/Custom-wrapper.stories";

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
  argTypes: {
    "background-color-theme": {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    "space-top": {
      control: "select",
      options: ["0", "xs", "s", "m", "l", "xl", "xxl"],
    },
    "space-bottom": {
      control: "select",
      options: ["0", "xs", "s", "m", "l", "xl", "xxl"],
    },
  },
  parameters: {
    actions: { disabled: true },
    layout: "fullscreen",
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
};

//@ts-ignore
const Template: ComponentStory<{}> = (args) => (
  <section className={"o-listing-cards-slider"}>
    <CustomWrapper
      //@ts-ignore
      space-top={args["space-top"]}
      //@ts-ignore
      space-bottom={args["space-bottom"]}
      //@ts-ignore
      background-color-theme={args["background-color-theme"]}
      //@ts-ignore
      custom-background-color={args["custom-background-color"]}
      //@ts-ignore
      custom-background-image={args["custom-background-image"]}
      //@ts-ignore
      custom-background-video={args["custom-background-video"]}
      //@ts-ignore
      container-fluid={args["container-fluid"]}
      //@ts-ignore
      border-radius={args["border-radius"]}
      //@ts-ignore
      image-priority={args["image-priority"]}
    >
      <Splide
        aria-label="My Favorite Images"
        options={{
          gap: "2%",
          perPage: 3,
          breakpoints: {
            768: {
              perPage: 1,
            },
            1200: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <Card
            buttons={
              <>
                <ButtonSlide
                  hover-effect="slide-right"
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  link-url="https://www.google.com"
                  open-in-new-tab
                  padding="xs"
                  text="Placeholder text"
                />
                <>
                  <ButtonLineDrawing
                    icon={<AiOutlineDownload size={20} />}
                    icon-position="right"
                    line-effect="line-below"
                    link-url="https://www.google.com"
                    open-in-new-tab
                    padding="xs"
                    text="Placeholder text"
                  />
                </>
              </>
            }
            description={
              <Description
                text={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, corporisconsectetur adipisicing elit. Provident,
                    corporis atque doloremque omnis!
                  </p>
                }
              />
            }
            image={
              <MediaImage
                image={
                  <Image
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
                  />
                }
                image-border-radius="30px"
                object-fit="cover"
                padding-bottom-desktop="0%"
                padding-bottom-mobile="0%"
                padding-bottom-tablet="0%"
              />
            }
            image-full-width
            is-overlapped
            labels={
              <>
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
              </>
            }
            title={
              <AnimatedText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
                variant="h5"
              />
            }
          />
        </SplideSlide>
        <SplideSlide>
          <Card
            buttons={
              <>
                <ButtonSlide
                  hover-effect="slide-right"
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  link-url="https://www.google.com"
                  open-in-new-tab
                  padding="xs"
                  text="Placeholder text"
                />
                <>
                  <ButtonLineDrawing
                    icon={<AiOutlineDownload size={20} />}
                    icon-position="right"
                    line-effect="line-below"
                    link-url="https://www.google.com"
                    open-in-new-tab
                    padding="xs"
                    text="Placeholder text"
                  />
                </>
              </>
            }
            description={
              <Description
                text={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, corporisconsectetur adipisicing elit. Provident,
                    corporis atque doloremque omnis!
                  </p>
                }
              />
            }
            image={
              <MediaImage
                image={
                  <Image
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
                  />
                }
                image-border-radius="30px"
                object-fit="cover"
                padding-bottom-desktop="0%"
                padding-bottom-mobile="0%"
                padding-bottom-tablet="0%"
              />
            }
            image-full-width
            is-overlapped
            labels={
              <>
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
              </>
            }
            title={
              <AnimatedText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
                variant="h5"
              />
            }
          />
        </SplideSlide>
        <SplideSlide>
          <Card
            buttons={
              <>
                <ButtonSlide
                  hover-effect="slide-right"
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  link-url="https://www.google.com"
                  open-in-new-tab
                  padding="xs"
                  text="Placeholder text"
                />
                <>
                  <ButtonLineDrawing
                    icon={<AiOutlineDownload size={20} />}
                    icon-position="right"
                    line-effect="line-below"
                    link-url="https://www.google.com"
                    open-in-new-tab
                    padding="xs"
                    text="Placeholder text"
                  />
                </>
              </>
            }
            description={<Description text={<p></p>} />}
            image={
              <MediaImage
                image={
                  <Image
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
                  />
                }
                image-border-radius="30px"
                object-fit="cover"
                padding-bottom-desktop="0%"
                padding-bottom-mobile="0%"
                padding-bottom-tablet="0%"
              />
            }
            image-full-width
            is-overlapped
            labels={
              <>
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
              </>
            }
            title={
              <AnimatedText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
                variant="h5"
              />
            }
          />
        </SplideSlide>
        <SplideSlide>
          <Card
            buttons={
              <>
                <ButtonSlide
                  hover-effect="slide-right"
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  link-url="https://www.google.com"
                  open-in-new-tab
                  padding="xs"
                  text="Placeholder text"
                />
                <>
                  <ButtonLineDrawing
                    icon={<AiOutlineDownload size={20} />}
                    icon-position="right"
                    line-effect="line-below"
                    link-url="https://www.google.com"
                    open-in-new-tab
                    padding="xs"
                    text="Placeholder text"
                  />
                </>
              </>
            }
            description={
              <Description
                text={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, corporisconsectetur adipisicing elit. Provident,
                    corporis atque doloremque omnis!
                  </p>
                }
              />
            }
            image={
              <MediaImage
                image={
                  <Image
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
                  />
                }
                image-border-radius="30px"
                object-fit="cover"
                padding-bottom-desktop="0%"
                padding-bottom-mobile="0%"
                padding-bottom-tablet="0%"
              />
            }
            image-full-width
            is-overlapped
            labels={
              <>
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
              </>
            }
            title={
              <AnimatedText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
                variant="h5"
              />
            }
          />
        </SplideSlide>
        <SplideSlide>
          <Card
            buttons={
              <>
                <ButtonSlide
                  hover-effect="slide-right"
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  link-url="https://www.google.com"
                  open-in-new-tab
                  padding="xs"
                  text="Placeholder text"
                />
                <>
                  <ButtonLineDrawing
                    icon={<AiOutlineDownload size={20} />}
                    icon-position="right"
                    line-effect="line-below"
                    link-url="https://www.google.com"
                    open-in-new-tab
                    padding="xs"
                    text="Placeholder text"
                  />
                </>
              </>
            }
            description={
              <Description
                text={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, corporisconsectetur adipisicing elit. Provident,
                    corporis atque doloremque omnis!
                  </p>
                }
              />
            }
            image={
              <MediaImage
                image={
                  <Image
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
                  />
                }
                image-border-radius="30px"
                object-fit="cover"
                padding-bottom-desktop="0%"
                padding-bottom-mobile="0%"
                padding-bottom-tablet="0%"
              />
            }
            image-full-width
            is-overlapped
            labels={
              <>
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
                <Label
                  background-color="black"
                  color="white"
                  text="Placeholder text"
                />
              </>
            }
            title={
              <AnimatedText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque."
                variant="h5"
              />
            }
          />
        </SplideSlide>
      </Splide>
    </CustomWrapper>
  </section>
);
export const ListingCards_STORY = Template.bind({});

ListingCards_STORY.args = {
  "space-top": "m",
  "space-bottom": "m",
  "border-radius": "0px",
  "image-priority": undefined,
  "container-fluid": undefined,
  "background-color-theme": "",
  "custom-background-color": "",
  "custom-background-image": "",
  "custom-background-video": "",
};
