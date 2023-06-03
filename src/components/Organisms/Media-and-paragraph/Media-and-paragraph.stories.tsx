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
import {Custom_grid_column, Custom_grid_row, TitleAndDescription} from "../../index"
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
            <div style={{border: "2px solid red"}}>

  <MediaAndParagraph space-top={args["space-top"]} space-bottom={args["space-bottom"]} background-color={args["background-color"]} custom-background={args["custom-background"]} custom-background-image={
      <MediaImage
          image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666627243/VIBE%20INTERIOR/Penthouse%20C:/living_1_qkudee.jpg"/>}
          image-border-radius="0px"
          object-fit="cover"
          padding-bottom-desktop="0%"
          padding-bottom-mobile="0%"
          padding-bottom-tablet="0%"
      />
  }>
                <div className="container">
      <Custom_grid_row vertical-alignment="center" reverse-breakpoint="xl">
          <Custom_grid_column
              md={12}
              lg={6}
              sm={12}
              xs={12}
          >
              <MediaImage
                  image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>}
                  label-bottom-right={<Logo background="white" border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
                  object-fit="cover"
                  padding-bottom-desktop="0%"
                  padding-bottom-mobile="0%"
                  padding-bottom-tablet="0%"
              />
          </Custom_grid_column>
          <Custom_grid_column
              xs={12}
              sm={12}
              lg={6}
              md={12}
          >
              <div
                  style={{
                      maxWidth: '600px'
                  }}
              >
                  <TitleAndDescription
                      action={<ButtonSlide hover-effect="slide-right" padding="xs" text="button text"/>}
                      description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
                      label={<Description color="red" text="Label"/>}
                      text-align="left"
                      title={<AnimatedText text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti" variant="h2"/>}
                  />
              </div>
          </Custom_grid_column>
      </Custom_grid_row>
                </div>
  </MediaAndParagraph>
            </div>
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