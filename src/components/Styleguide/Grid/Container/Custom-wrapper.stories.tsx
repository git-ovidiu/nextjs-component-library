import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  AnimatedText,
  ButtonSlide, CustomShape,
  Description,
  Logo,
  MediaImage,
  TitleAndDescription,
} from "../../../index";
import Image from "next/image";
import {motion} from "framer-motion";
import "../../../../styles/Global-Settings/Paddings.css";
import CustomGridRow from "../Row";
import CustomGridColumn from "../Column";
import CustomWrapper from "./Custom-wrapper";
import {AiOutlineDownload} from "react-icons/ai"
import {Parallax, ParallaxProvider} from "react-scroll-parallax"

const Extra_Info = `
<br>
<!--//todo MAI JOS-->
<h1>install react-icons ,framer motion, splide, swiper etc de vazut ce mai trebuie</h1>
<h2><u>PROPS</u></h2>
<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
<tr>
<td>space-top</td>
<td>string</td>
<td>0 - xs - s - m - l - xl - xxl</td>
</tr>
<tr>
<td>space-bottom</td>
<td>string</td>
<td>0 - xs - s - m - l - xl - xxl</td>
</tr>
<tr>
<td>border-radius</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
<tr>
<td>background-color-theme</td>
<td>string</td>
<td>primary | secondary | tertiary</td>
</tr>
<tr>
<td>custom-background-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>custom-background-image</td>
<td>string</td>
<td>URL (has a next/image implemented already (for priority use image-priority)</td>
</tr>
<tr>
<td>custom-background-video</td>
<td>string</td>
<td>URL (has the MediaVideo implemented already</td>
</tr>
<tr>
<td>container-fluid</td>
<td>boolean</td>
<td>use this property to add container-fluid class to the container</td>
</tr>
<tr>
<td>image-priority</td>
<td>boolean</td>
<td>-</td>
</tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--s-custom-wrapper-background-primary</li>
<li>--s-custom-wrapper-background-secondary</li>
<li>--s-custom-wrapper-background-tertiary</li>
<li>--s-custom-wrapper-background-custom</li>
<li>--s-custom-wrapper-background-image</li>
<li>--s-custom-wrapper-border-radius</li>
</ol>

<table>
<tr>
<td>--s-custom-wrapper-background-primary</td>
<td>$background-color-primary</td>
</tr>
<tr>
<td>--s-custom-wrapper-background-secondary</td>
<td>$background-color-secondary</td>
</tr>
<tr>
<td>--s-custom-wrapper-background-tertiary</td>
<td>$background-color-tertiary</td>
</tr>
<tr>
<td>--s-custom-wrapper-background-custom</td>
<td>unset</td>
</tr>
<tr>
<td>--s-custom-wrapper-background-image</td>
<td>unset</td>
</tr>
<tr>
<td>--s-custom-wrapper-border-radius</td>
<td>unset</td>
</tr>
</table>
`;

export default {
  title: "Styleguide/Grid/Custom Wrapper",
  component: CustomWrapper,
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
} as ComponentMeta<typeof CustomWrapper>;

const Template: ComponentStory<typeof CustomWrapper> = (args) => (
    <ParallaxProvider>
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
    image-priority={args["image-priority"]}

    //custom-shapes
    top-left-corner-shape={
      <CustomShape
          margin-top={"-50px"}
          margin-left={"-200px"}
          shape={
            <Parallax translateY={[250, -10]}>
                <Image alt="Placeholder" height={300} src="https://res.cloudinary.com/dxbivmheq/image/upload/v1685576370/Shapes_mlzoj0.svg" width={400}/>
            </Parallax>
      }
      />
    }
  >
    <CustomGridRow vertical-alignment="center">
      <CustomGridColumn
        lg={4}
        xs={12}
        column-background={"black"}
        column-border-radius={"500px"}
        column-background-opacity={"0.37"}
        column-padding-top={"unset"}
        column-padding-bottom={"unset"}
        columns-equal-paddings
      >
        <motion.div
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y: 0}}
        >
        <MediaImage
          image={
            <Image
              alt="Placeholder"
              fill
              src="https://camonysi.sirv.com/NextJS%20Component%20Library/jesse-schoff-Ph2KtIqKs7c-unsplash.jpg"
            />
          }
          image-border-radius="30px"
          label-bottom-right={
            <Logo
              open-in-new-tab
              link-url="https://www.youtube.com"
              width="150px"
              height="50px"
              background={"#ffffff"}
              logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
              logo-al="Placeholder"
              default-opacity-mobile="1"
              default-opacity-desktop="1"
              border-radius-desktop="0px"
              border-radius-mobile="50%"
            />
          }
          label-bottom-left={
            <Logo
              open-in-new-tab
              link-url="https://www.youtube.com"
              width="150px"
              height="50px"
              background={"#ffffff"}
              logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
              logo-al="Placeholder"
              default-opacity-mobile="1"
              default-opacity-desktop="1"
              border-radius-desktop="0px"
              border-radius-mobile="50%"
            />
          }
          label-top-left={
            <Logo
              open-in-new-tab
              link-url="https://www.youtube.com"
              width="150px"
              height="50px"
              background={"#ffffff"}
              logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
              logo-al="Placeholder"
              default-opacity-mobile="1"
              default-opacity-desktop="1"
              border-radius-desktop="0px"
              border-radius-mobile="50%"
            />
          }
          label-top-right={
            <Logo
              open-in-new-tab
              link-url="https://www.youtube.com"
              width="150px"
              height="50px"
              background={"#ffffff"}
              logo-image-url="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
              logo-al="Placeholder"
              default-opacity-mobile="1"
              default-opacity-desktop="1"
              border-radius-desktop="0px"
              border-radius-mobile="50%"
            />
          }
          object-fit="cover"
          padding-bottom-desktop="0%"
          padding-bottom-mobile="0%"
          padding-bottom-tablet="0%"
        />
        </motion.div>
      </CustomGridColumn>
      <CustomGridColumn
        lg={7}
        lg-offset={1}
        xs={12}
        column-background={"black"}
        column-border-radius={"0px"}
        column-background-opacity={"0.37"}
        column-padding-top={"unset"}
        column-padding-bottom={"unset"}
        columns-equal-paddings
      >
        <TitleAndDescription
          action={
            <ButtonSlide
                hover-effect="slide-right"
                icon={<AiOutlineDownload size={20} />}
                icon-position="right"
                link-url="https://www.google.com"
                open-in-new-tab
                padding="xs"
                text="Placeholder text"
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
        </ParallaxProvider>
);

export const Custom_wrapper_STORY = Template.bind({});

Custom_wrapper_STORY.args = {
  "space-top": "m",
  "space-bottom": "m",
  "border-radius": "0px",
  "image-priority": false,
  "container-fluid": false,
  "background-color-theme": "primary",
  "custom-background-color": undefined,
  "custom-background-image":
      "https://res.cloudinary.com/dxbivmheq/image/upload/v1685726349/gradient_1_ypzsxq.png",
  "custom-background-video":
      "https://camonysi.sirv.com/Videos/pexels-taryn-elliott-5548129-3840x2160-25fps.mp4",
};

//todo add layout: 'fullscreen', for all the storybooks under the parameters
// todo de fauct story la column, row, custom-row
// de facut update la logo-uri pe unde mai apar prin proiect
