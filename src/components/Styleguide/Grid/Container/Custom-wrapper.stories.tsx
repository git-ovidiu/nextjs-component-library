import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  AnimatedText, ButtonSlide,
  Description,
  Logo, MediaImage, TitleAndDescription,
} from "../../../index";
import Image from "next/image";

import "../../../../styles/Global-Settings/Paddings.css";
import CustomGridRow from "../Row"
import CustomGridColumn from "../Column"
import CustomWrapper from "./Custom-wrapper"

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
  component: CustomWrapper,
  argTypes: {
    "background-color-theme": {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary"
      ],
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
} as ComponentMeta<typeof CustomWrapper>;

const Template: ComponentStory<typeof CustomWrapper> = (args) => (
  <CustomWrapper
    {...args}
    space-top={args["space-top"]}
    space-bottom={args["space-bottom"]}
    background-color-theme={args["background-color-theme"]}
    custom-background-color={args["custom-background-color"]}
    custom-background-image={args["custom-background-image"]}
    custom-background-video={args["custom-background-video"]}
    container-fluid={args["container-fluid"]}
    border-radius={args["border-radius"]}
  >
    <CustomGridRow vertical-alignment="center">
      <CustomGridColumn lg={5} xs={12}>
        <MediaImage
          image={
            <Image
              alt="Placeholder"
              fill
              src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685771607/_bd478abc-0aa9-492c-bfe9-ba6466c51b19_kvlmat.jpg"
            />
          }
          image-border-radius="30px"
          label-bottom-right={
            <Logo
              background="white"
              border-radius="20px"
              height="50px"
              logo-alt="Placeholder"
              logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
              width="150px"
            />
          }
          object-fit="cover"
          padding-bottom-desktop="0%"
          padding-bottom-mobile="0%"
          padding-bottom-tablet="0%"
        />
      </CustomGridColumn>
      <CustomGridColumn lg={6} lg-offset={1} xs={12}>
        <TitleAndDescription
          action={
            <ButtonSlide
              hover-effect="slide-right"
              padding="xs"
              text="button text"
            />
          }
          description={
            <Description
              color="white"
              text="pulvinar numquam finibus hinc fames scelerisque sapientem errem bibendum discere platonem ornatus tacimates laoreet facilis animal sententiae aenean omittam definiebas"
            />
          }
          label={<Description color="white" text="Label" />}
          text-align="left"
          title={
            <span>
              <AnimatedText
                color="white"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis officia libero dolores. Delectus repellendus dolore accusamus!"
                variant="h4"
              />
            </span>
          }
        />
      </CustomGridColumn>
    </CustomGridRow>
  </CustomWrapper>
);

export const Custom_wrapper_STORY = Template.bind({});

Custom_wrapper_STORY.args = {
  //@ts-ignore
  "container-fluid": false,
  "border-radius": "0px",
  "space-top": "xxl",
  "space-bottom": "xxl",
  "background-color-theme": "primary",
  "custom-background-color": undefined,
  "custom-background-image": "https://res.cloudinary.com/dxbivmheq/image/upload/v1685726349/gradient_1_ypzsxq.png",
  "custom-background-video": "https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4",
};

//todo add layout: 'fullscreen', for all the storybooks under the parameters
