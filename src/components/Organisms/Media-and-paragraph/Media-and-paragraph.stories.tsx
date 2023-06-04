import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MediaAndParagraph from "./Media_and_paragraph";
import ButtonSlide from "../../Atoms/Button-slide";
import Description from "../../Atoms/Description";
import AnimatedText from "../../Atoms/Animated-text";
import Logo from "../../Atoms/Logo";
import MediaImage from "../../Molecules/Media-image";
import CustomShape from "../../Atoms/Custom-shape/Custom-shape";
import "../../../styles/bootstrap/css/bootstrap-grid.css";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import {CustomGridColumn, CustomGridRow, CustomWrapper, TitleAndDescription} from "../../index"
import '../../../styles/Global-Settings/Paddings.css';
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
  title: "Organisms/MediaAndParagraph",
  component: MediaAndParagraph,
  argTypes: {
    "align-elements": {
      control: "radio",
      options: ["start", "center", "end"],
    },
      "background-color": {
        control: "select",
        options: ["primary", "secondary", "tertiary"]
      }
  },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof MediaAndParagraph>;

const Template: ComponentStory<typeof MediaAndParagraph> = (args) => (
    <div style={{position: "relative"}}>
        <ParallaxProvider>
            <Parallax translateY={[-1000, 600]} style={{position: 'absolute'}}>
                <CustomShape style={{zIndex: 99, position: 'relative' }} />
            </Parallax>
        <div style={{zIndex: -1}}>
            <CustomWrapper
                background-color-theme="primary"
                border-radius="0px"
                custom-background-image="https://res.cloudinary.com/dxbivmheq/image/upload/v1685726349/gradient_1_ypzsxq.png"
                custom-background-video="https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4"
                image-priority
                space-bottom="xxl"
                space-top="xxl"
            >
                <CustomGridRow vertical-alignment="center">
                    <CustomGridColumn
                        lg={5}
                        xs={12}
                    >
                        <MediaImage
                            image={<Image alt="Placeholder" fill src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685771607/_bd478abc-0aa9-492c-bfe9-ba6466c51b19_kvlmat.jpg"/>}
                            image-border-radius="30px"
                            label-bottom-right={<Logo background={"#ffffff"} border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
                            object-fit="cover"
                            padding-bottom-desktop="0%"
                            padding-bottom-mobile="0%"
                            padding-bottom-tablet="0%"
                        />
                    </CustomGridColumn>
                    <CustomGridColumn
                        lg={6}
                        lg-offset={1}
                        xs={12}
                    >
                        <TitleAndDescription
                            action={<ButtonSlide hover-effect="slide-right" padding="xs" text="button text"/>}
                            description={<Description color="white" text="pulvinar numquam finibus hinc fames scelerisque sapientem errem bibendum discere platonem ornatus tacimates laoreet facilis animal sententiae aenean omittam definiebas"/>}
                            label={<Description color="white" text="Label"/>}
                            text-align="left"
                            title={<span><AnimatedText color="white" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis officia libero dolores. Delectus repellendus dolore accusamus!" variant="h4"/></span>}
                        />
                    </CustomGridColumn>
                </CustomGridRow>
            </CustomWrapper>
        </div>
        </ParallaxProvider>
    </div>

);

export const MediaAndParagraph_story = Template.bind({});

MediaAndParagraph_story.args = {
    "space-top": 'm',
    "space-bottom": 'm',
    "background-color": 'primary',
    "custom-background": "red"
};



 // todo DE VERIFICAT CE COMPONENTE AU IN SNIPPET-UL DIN STORY ARGS[COMP]  = FALSE, PENTRU CA NU O SA APARA IN SNIPPET-UL DIN STORYBOOK !!!!!! (TREBUIE SA FIE TOATE CU TRUE)