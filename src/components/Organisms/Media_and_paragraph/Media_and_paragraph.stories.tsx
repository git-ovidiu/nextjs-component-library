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
import 'bootstrap/dist/css/bootstrap-grid.css'

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
    selectOption: {
      control: "radio",
      options: [
        "selectOption_1",
        "selectOption_2",
        "selectOption_3",
        "selectOption_4",
      ],
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
  <Media_and_paragraph

    reverse-media={true}

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
        image={
          <Image
            alt="Placeholder"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="https://res.cloudinary.com/dxbivmheq/image/upload/v1666628108/VIBE%20INTERIOR/Complex%20Duplex%20Brasov/dressing_2_sxxqfd.jpg"
          />
        }
        image-border-radius="200px"
        label-bottom-right={
          <Logo
            background="#4cbfa6"
            border-radius="20px "
            logo="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
            logo-href="https://www.google.com"
          />
        }
      />
    }
  />
);

export const Media_and_paragraph_story = Template.bind({});

Media_and_paragraph_story.args = {};
