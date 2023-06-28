import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InteractivePanel from "./Interactive-panel";
import {ButtonLineDrawing, ButtonSlideSecond, Card, Label, MediaImage} from "../../index"
import {FaGithub} from "react-icons/fa"
import {MdOutlineArchitecture, MdOutlineCoffeeMaker, MdOutlineLiveTv} from "react-icons/md"
import Image from "next/image"
import {SiAtom} from "react-icons/si"

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
  title: "Organisms/Interactive Panel",
  component: InteractivePanel,
    actions: { disabled: true },
    controls: {disabled: true},
    layout: "fullscreen",

} as ComponentMeta<typeof InteractivePanel>;

const Template: ComponentStory<typeof InteractivePanel> = (args) => (
    <InteractivePanel
        card={[

            // eslint-disable-next-line react/jsx-key
          <Card
              image-full-width
              buttons={
                <div className="card-buttons-container">
                  <ButtonLineDrawing
                      icon={<FaGithub size={20} />}
                      icon-position="right"
                      line-effect="line-below"
                      link-url="https://www.google.com"
                      open-in-new-tab
                      padding="m"
                      text="Github Project"
                  />
                  <ButtonLineDrawing
                      icon={<MdOutlineLiveTv size={20} />}
                      icon-position="right"
                      line-effect="line-below"
                      link-url="https://www.google.com"
                      open-in-new-tab
                      padding="m"
                      text="Live Website"
                  />
                </div>
              }
              image={
                <MediaImage
                    image={
                      <Image
                          alt="Placeholder"
                          fill
                          src="https://camonysi.sirv.com/NextJS%20Component%20Library/react-component-library-2.jpg"
                      />
                    }
                    image-border-radius="0px"
                    object-fit="cover"
                    padding-bottom-desktop="0%"
                    padding-bottom-mobile="0%"
                    padding-bottom-tablet="0%"
                />
              }
              labels={
                <>
                  <Label background-color="black" color="white" text="typescript" />
                  <Label background-color="black" color="white" text="scss" />
                  <Label background-color="black" color="white" text="storybook" />
                  <Label background-color="black" color="white" text="html" />
                </>
              }
              description={
                <>
                  <h3>libs used</h3>
                  <ul>
                    <li>lib 1</li>
                    <li>lib 2</li>
                    <li>lib 3</li>
                  </ul>
                </>
              }
          />,
            // eslint-disable-next-line react/jsx-key
            <h1>Card 2</h1>,
            // eslint-disable-next-line react/jsx-key
            <h1>Moo Free Brews</h1>,
        ]}
        button={[
            // eslint-disable-next-line react/jsx-key
            <ButtonSlideSecond
              padding={"s"}
              hover_effect="tertiary"
              iconPosition="right"
              text="Vibe Interior"
              icon={<MdOutlineArchitecture size={20} />}
          />,
            // eslint-disable-next-line react/jsx-key
            <ButtonSlideSecond
              icon={<SiAtom size={20} />}
              padding={"s"}
              hover_effect="tertiary"
              iconPosition="right"
              text="Component Library"
          />,
            // eslint-disable-next-line react/jsx-key
            <ButtonSlideSecond
              icon={<MdOutlineCoffeeMaker size={20} />}
              padding={"s"}
              hover_effect="tertiary"
              iconPosition="right"
              text="MooFree Brews"
          />
        ]}
    />
);

export const InteractivePanel_STORY = Template.bind({});

InteractivePanel_STORY.args = {

};