import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title_and_description from "./Title_and_description";
import Description from "../../Atoms/Description";
import Animated_text from "../../Atoms/Animated_text";
import Button_slide from "../../Atoms/Button_Slide";

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
  component: Title_and_description,
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
} as ComponentMeta<typeof Title_and_description>;

const Template: ComponentStory<typeof Title_and_description> = (args) => (
  <div style={{ maxWidth: "600px" }}>
    <Title_and_description
      text-align={args["text-align"]}
      label={<Description color="red" text="Label" />}
      title={
        <Animated_text
          variant="h2"
          text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
        />
      }
      description={args.description}
      action={
        <Button_slide
          text="button text"
          hover-effect="slide-right"
          padding="xs"
        />
      }
    />
  </div>
);

export const Title_and_description_STORY = Template.bind({});

Title_and_description_STORY.args = {
  "text-align": "left",
  description:
    "Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur",
};
