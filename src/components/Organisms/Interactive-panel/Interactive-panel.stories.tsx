import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InteractivePanel from "./Interactive-panel";
import {
    ButtonLineDrawing, ButtonSlide,
    ButtonSlideSecond,
    Card,
    CustomGridColumn,
    CustomGridRow, CustomWrapper,
    Label,
    MediaImage
} from "../../index"
import {FaGithub} from "react-icons/fa"
import {MdOutlineArchitecture, MdOutlineCoffeeMaker, MdOutlineLiveTv} from "react-icons/md"
import Image from "next/image"
import {SiAtom} from "react-icons/si"
import {AiOutlineDownload} from "react-icons/ai"

const Extra_Info = `
<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--o-interactive-panel-splide-background</li>
<li>--o-interactive-panel-buttons-container-gap</li>
<li>--o-interactive-panel-buttons-min-width</li>
<li>--o-interactive-panel-buttons-paddings</li>
<li>--o-interactive-panel-splide-box-shadow</li>
<li>--o-interactive-panel-splide-card-buttons-gap</li>
<li>--o-interactive-panel-splide-card-buttons-padding-bottom</li>
<li>--o-interactive-panel-splide-card-buttons-pagination-height</li>
<li>--o-interactive-panel-splide-card-buttons-pagination-margin-bottom</li>
<li>--o-interactive-panel-splide-card-buttons-pagination-page-width</li>
<li>--o-interactive-panel-splide-card-buttons-pagination-page-height</li>
<li>--o-interactive-panel-splide-card-buttons-pagination-default-background</li>
<li>--o-interactive-panel-splide-card-buttons-pagination-active-background</li>
</ol>

<table>
<tr>
<td>--o-interactive-panel-splide-background</td>
<td>transparent</td>
</tr>
<tr>
<td>--o-interactive-panel-buttons-container-gap</td>
<td>24px</td>
</tr>
<tr>
<td>--o-interactive-panel-buttons-min-width</td>
<td>270px</td>
</tr>
<tr>
<td>--o-interactive-panel-buttons-paddings</td>
<td>20px 40px 20px 0px</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-box-shadow</td>
<td>$box-shadow-xxl</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-gap</td>
<td>30px</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-padding-bottom</td>
<td>30px</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-pagination-height</td>
<td>10px</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-pagination-margin-bottom</td>
<td>40px</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-pagination-page-width</td>
<td>8px</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-pagination-page-height</td>
<td>8px</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-pagination-default-background</td>
<td>rgba(81, 77, 77, 0.44)</td>
</tr>
<tr>
<td>--o-interactive-panel-splide-card-buttons-pagination-active-background</td>
<td>$color-black</td>
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

        <CustomWrapper
            custom-background-color={"white"}
            border-radius="0px"
            space-bottom="m"
            space-top="m"
        >
            <CustomGridRow vertical-alignment="center">

                <InteractivePanel
                    card={[
                        // eslint-disable-next-line react/jsx-key
                        <Card
                            image-full-width
                            buttons={
                                <div className="card-buttons-container">
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
                                            src="https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/Screenshot%202023-06-28%20at%2023.52.07.png"
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
            </CustomGridRow>
        </CustomWrapper>



);

export const InteractivePanel_STORY = Template.bind({});

InteractivePanel_STORY.args = {

};