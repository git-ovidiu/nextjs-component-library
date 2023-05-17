import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Description from "./Description";

const Extra_Info = `
<br>
<h2><u>PROPS</u></h2>

<br>


`;

export default {
  title: "Atoms/Description",
  component: Description,
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const Description_story = Template.bind({});

Description_story.args = {
  underline: true,
  italic: true,
  text: <h1>Vel massa erat deseruisse eripuit aenean <Description text={<h1>cacat</h1>} color="red"/> inimicus sadipscing proin</h1>,
  color: "black",
};
