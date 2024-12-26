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
  MediaImage
} from "../../index";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";

const Extra_Info = `

`;

export default {
  title: "Organisms/Listing/Cards",
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
const Template: ComponentStory<{}> = (args) => (
  <section className={"o-listing-cards"}>
    <CustomWrapper
      border-radius="0px"
      space-bottom="m"
      space-top="m"
    >
      <CustomGridRow vertical-alignment="none">
        <CustomGridColumn
          column-background-opacity="0.37"
          column-border-radius="500px"
          column-padding-bottom="unset"
          column-padding-top="unset"
          columns-equal-paddings
          lg={4}
          xs={12}
        >
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
                <ButtonLineDrawing
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  line-effect="line-below"
                  padding="xs"
                  text="Placeholder text"
                />
              </>
            }
            description={
              <Description
                text={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, corporis atque doloremque omnis!
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
                    src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1699382363/comp%20library/react-component-library-2_dikzdv.jpg"
                  />
                }
                image-border-radius="30px"
                object-fit="cover"
                padding-bottom-desktop="auto"
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
        </CustomGridColumn>

        <CustomGridColumn
          column-background-opacity="0.37"
          column-border-radius="500px"
          column-padding-bottom="unset"
          column-padding-top="unset"
          columns-equal-paddings
          lg={4}
          xs={12}
        >
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
                <ButtonLineDrawing
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  line-effect="line-below"
                  padding="xs"
                  text="Placeholder text"
                />
              </>
            }
            description={
              <Description
                text={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, corporisconsectetur adipisicing elit. Provident,
                    corporisconsectetur adipisicing elit. Provident,
                    corporisconsectetur adipisicing elit. Provident, corporis
                    atque doloremque omnis!
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
                    src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1699382363/comp%20library/react-component-library-2_dikzdv.jpg"
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
        </CustomGridColumn>

        <CustomGridColumn
          column-background-opacity="0.37"
          column-border-radius="500px"
          column-padding-bottom="unset"
          column-padding-top="unset"
          columns-equal-paddings
          lg={4}
          xs={12}
        >
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
                <ButtonLineDrawing
                  icon={<AiOutlineDownload size={20} />}
                  icon-position="right"
                  line-effect="line-below"
                  padding="xs"
                  text="Placeholder text"
                />
              </>
            }
            description={
              <Description
                text={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, corporis atque doloremque omnis!
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
                    src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1699382363/comp%20library/react-component-library-2_dikzdv.jpg"
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
        </CustomGridColumn>
      </CustomGridRow>
    </CustomWrapper>
  </section>
);
export const ListingCards_STORY = Template.bind({});
