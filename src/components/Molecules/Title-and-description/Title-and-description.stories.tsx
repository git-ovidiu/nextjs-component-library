import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TitleAndDescription from "./Title-and-description";
import Description from "../../Atoms/Description";
import AnimatedText from "../../Atoms/Animated-text";
import {ButtonSlide} from "../../index"
import {AiOutlineDownload} from "react-icons/ai"


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
	<td>label</td>
	<td>ReactElement</td>
	<td>-</td>
</tr>
<tr>
	<td>title</td>
	<td>ReactElement</td>
	<td>-</td>
</tr>
<tr>
	<td>description</td>
	<td>ReactElement</td>
	<td>-</td>
</tr>
<tr>
	<td>action</td>
	<td>ReactElement</td>
	<td>-</td>
</tr>
<tr>
	<td>text_align</td>
	<td>string</td>
	<td>left | center | right</td>
</tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--m-title-and-description-label-margin-top</li>
<li>--m-title-and-description-title-margin-top</li>
<li>--m-title-and-description-text-description-margin-top</li>
<li>--m-title-and-description-action-margin-top</li>
<li>--m-title-and-description-label-margin-bottom</li>
<li>--m-title-and-description-title-margin-bottom</li>
<li>--m-title-and-description-text-description-margin-bottom</li>
<li>--m-title-and-description-action-margin-bottom</li>
</ol>

<table>
<tr>
<td>--m-title-and-description-label-margin-top</td>
<td>unset</td>
</tr>
<tr>
<td>--m-title-and-description-title-margin-top</td>
<td>unset</td>
</tr>
<tr>
<td>--m-title-and-description-text-description-margin-top</td>
<td>12px</td>
</tr>
<tr>
<td>--m-title-and-description-action-margin-top</td>
<td>24px</td>
</tr>
<tr>
<td>--m-title-and-description-label-margin-bottom</td>
<td>12px</td>
</tr>
<tr>
<td>--m-title-and-description-title-margin-bottom</td>
<td>12px</td>
</tr>
<tr>
<td>--m-title-and-description-text-description-margin-bottom</td>
<td>unset</td>
</tr>
<tr>
<td>--m-title-and-description-action-margin-bottom</td>
<td>unset</td>
</tr>
</table>
`;

export default {
  title: "Molecules/Title and Description",
  component: TitleAndDescription,
  argTypes: {
    "text-align": {
      control: "radio",
      options: ["left", "center", "right"],
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
} as ComponentMeta<typeof TitleAndDescription>;

const Template: ComponentStory<typeof TitleAndDescription> = (args) => (
  <div style={{ maxWidth: "600px" }}>
    <TitleAndDescription
      text-align={args["text-align"]}
      label={<Description color="red" text="Label" />}
      title={
        <AnimatedText
          variant="h2"
          text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
        />
      }
      description={args.description}
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
    />
  </div>
);

export const TitleAndDescription_STORY = Template.bind({});

TitleAndDescription_STORY.args = {
  "text-align": "left",
  description:
    "Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur",
};
