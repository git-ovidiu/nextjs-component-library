import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Media_and_paragraph from "./Media_and_paragraph";
import Title_and_description from "../../Molecules/Title_and_description";
import Button_slide from "../../Atoms/Button_Slide";
import Description from "../../Atoms/Description";
import Animated_text from "../../Atoms/Animated_text";
import Image from "next/image";
import Logo from "../../Atoms/Logo";
import Media_image from "../../Molecules/Media_image";
import Custom_shape from "../../Atoms/Custom_shape/Custom_shape"
// import "bootstrap/dist/css/bootstrap-grid.css";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';



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
  title: "Organisms/Media_and_paragraph",
  component: Media_and_paragraph,
  argTypes: {
    "align-elements": {
      control: "radio",
      options: ["start", "center", "end"],
    },
  },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Media_and_paragraph>;

const Template: ComponentStory<typeof Media_and_paragraph> = (args) => (
    <div style={{position: "relative"}}>
        <ParallaxProvider>
            <Parallax translateY={[-1000, 600]} style={{position: 'absolute'}}>
                <Custom_shape style={{zIndex: 99, position: 'relative' }} />
            </Parallax>
        <div style={{zIndex: -1}}>
  <Media_and_paragraph
    reverse-media={args["reverse-media"]}
    align-elements={args["align-elements"]}
    image-col-md={6}
    content-col-md={6}
    image-offset-breakpoint="md"
    content-offset-breakpoint="md"
    image-offset-value={1}
    content-offset-value={1}
    object-fit="cover"

    content={
      <Title_and_description
        action={
          <Button_slide
            hover-effect="slide-right"
            padding="s"
            text="button text"
          />
        }
        description={<p>Tation 123 pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur</p>}
        label={<Description color="red" text="Label" underline />}
        text-align="left"
        title={
          <Animated_text
            text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
            variant="h1"
          />
        }
      />
    }
    image={
        <Media_image
            image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>}
            image-border-radius="0px"
            label-bottom-left="test"
            label-bottom-right="test"
            label-top-left={<Logo background="white" border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
            label-top-right="test"
            object-fit="cover"
            padding-bottom-desktop="0%"
            padding-bottom-mobile="0%"
            padding-bottom-tablet="0%"
        />
    }
  />
        </div>
        <>
  <Media_and_paragraph
    reverse-media={args["reverse-media"]}
    align-elements={args["align-elements"]}
    image-col-md={6}
    content-col-md={6}
    image-offset-breakpoint="md"
    content-offset-breakpoint="md"
    image-offset-value={1}
    content-offset-value={1}
    object-fit="cover"

    content={
      <Title_and_description
        action={
          <Button_slide
            hover-effect="slide-right"
            padding="xs"
            text="button text"
          />
        }
        description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
        label={<Description color="red" text="Label" />}
        text-align="left"
        title={
          <Animated_text
            text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
            variant="h2"
          />
        }
      />
    }
    image={
        <Media_image
            image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>}
            image-border-radius="0px"
            label-bottom-left="test"
            label-bottom-right="test"
            label-top-left={<Logo background="white" border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
            label-top-right="test"
            object-fit="cover"
            padding-bottom-desktop="0%"
            padding-bottom-mobile="0%"
            padding-bottom-tablet="0%"
        />
    }
  />
        </>
        <>
  <Media_and_paragraph
    reverse-media={args["reverse-media"]}
    align-elements={args["align-elements"]}
    image-col-md={6}
    content-col-md={6}
    image-offset-breakpoint="md"
    content-offset-breakpoint="md"
    image-offset-value={1}
    content-offset-value={1}
    object-fit="cover"

    content={
      <Title_and_description
        action={
          <Button_slide
            hover-effect="slide-right"
            padding="xs"
            text="button text"
          />
        }
        description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
        label={<Description color="red" text="Label" />}
        text-align="left"
        title={
          <Animated_text
            text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
            variant="h2"
          />
        }
      />
    }
    image={
        <Media_image
            image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>}
            image-border-radius="0px"
            label-bottom-left="test"
            label-bottom-right="test"
            label-top-left={<Logo background="white" border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
            label-top-right="test"
            object-fit="cover"
            padding-bottom-desktop="0%"
            padding-bottom-mobile="0%"
            padding-bottom-tablet="0%"
        />
    }
  />
        </>
        <>
  <Media_and_paragraph
    reverse-media={args["reverse-media"]}
    align-elements={args["align-elements"]}
    image-col-md={6}
    content-col-md={6}
    image-offset-breakpoint="md"
    content-offset-breakpoint="md"
    image-offset-value={1}
    content-offset-value={1}
    object-fit="cover"

    content={
      <Title_and_description
        action={
          <Button_slide
            hover-effect="slide-right"
            padding="xs"
            text="button text"
          />
        }
        description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
        label={<Description color="red" text="Label" />}
        text-align="left"
        title={
          <Animated_text
            text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
            variant="h2"
          />
        }
      />
    }
    image={
        <Media_image
            image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>}
            image-border-radius="0px"
            label-bottom-left="test"
            label-bottom-right="test"
            label-top-left={<Logo background="white" border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
            label-top-right="test"
            object-fit="cover"
            padding-bottom-desktop="0%"
            padding-bottom-mobile="0%"
            padding-bottom-tablet="0%"
        />
    }
  />
        </>
        <>
  <Media_and_paragraph
    reverse-media={args["reverse-media"]}
    align-elements={args["align-elements"]}
    image-col-md={6}
    content-col-md={6}
    image-offset-breakpoint="md"
    content-offset-breakpoint="md"
    image-offset-value={1}
    content-offset-value={1}
    object-fit="cover"

    content={
      <Title_and_description
        action={
          <Button_slide
            hover-effect="slide-right"
            padding="xs"
            text="button text"
          />
        }
        description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
        label={<Description color="red" text="Label" />}
        text-align="left"
        title={
          <Animated_text
            text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
            variant="h2"
          />
        }
      />
    }
    image={
        <Media_image
            image={<Image alt="Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"/>}
            image-border-radius="0px"
            label-bottom-left="test"
            label-bottom-right="test"
            label-top-left={<Logo background="white" border-radius="20px" height="50px" logo-alt="Placeholder" logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg" width="150px"/>}
            label-top-right="test"
            object-fit="cover"
            padding-bottom-desktop="0%"
            padding-bottom-mobile="0%"
            padding-bottom-tablet="0%"
        />
    }
  />
        </>
        </ParallaxProvider>
    </div>
);

export const Media_and_paragraph_story = Template.bind({});

Media_and_paragraph_story.args = {
  "align-elements": "center",
  "reverse-media": true,
};



 // todo DE VERIFICAT CE COMPONENTE AU IN SNIPPET-UL DIN STORY ARGS[COMP]  = FALSE, PENTRU CA NU O SA APARA IN SNIPPET-UL DIN STORYBOOK !!!!!! (TREBUIE SA FIE TOATE CU TRUE)