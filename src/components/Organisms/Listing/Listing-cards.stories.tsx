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
                    src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
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
        </CustomGridColumn>
      </CustomGridRow>
    </CustomWrapper>
  </section>
);
export const ListingCards_STORY = Template.bind({});
