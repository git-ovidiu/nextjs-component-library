import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {AiOutlineDownload} from "react-icons/ai";
import FooterCard from "./Footer-card";
import ButtonSlide from "../../Atoms/Button-slide";

const Extra_Info = `
<br>
<h2><u>CSS VARIABLES</u></h2>
<ul>
  <li>--footer-card-background</li>
  <li>--footer-card-padding</li>
  <li>--footer-card-border-radius</li>
  <li>--footer-card-description-margin-top</li>
  <li>--footer-card-action-margin-top</li>
  <li>--footer-card-logo-max-width</li>
  <li>--footer-card-logo-height</li>
</ul>
<br>
<table>
  <tr>
    <td>--footer-card-background</td>
    <td>rgba(160, 160, 160, 0.648)</td>
  </tr>
  <tr>
    <td>--footer-card-padding</td>
    <td>40px</td>
  </tr>
  <tr>
    <td>--footer-card-border-radius</td>
    <td>30px</td>
  </tr>
  <tr>
    <td>--footer-card-description-margin-top</td>
    <td>20px</td>
  </tr>
  <tr>
    <td>--footer-card-action-margin-top</td>
    <td>40px</td>
  </tr>
  <tr>
    <td>--footer-card-logo-max-width</td>
    <td>160px</td>
  </tr>
  <tr>
    <td>--footer-card-logo-height</td>
    <td>63px</td>
  </tr>
</table>
<br>
<h2><u>PROPS</u></h2>
<table>
  <tr>
    <td>logo</td>
    <td>ReactElement</td>
  </tr>
  <tr>
    <td>description</td>
    <td>ReactElement</td>
  </tr>
  <tr>
    <td>action</td>
    <td>ReactElement</td>
  </tr>
</table>

`;
export default {
  title: "Molecules/Footer Card",
  component: FooterCard,
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof FooterCard>;

const Template: ComponentStory<typeof FooterCard> = (args) => (
  <div style={{ width: "360px" }}>
    <FooterCard
      {...args}
      logo={
        <img
          src="https://via.placeholder.com/160x63/e3e3e3/b38686"
          alt="Logo Placeholder"
        />
      }
      action={
        <ButtonSlide
          padding="m"
          hover-effect="slide-right"
          icon={<AiOutlineDownload size={20} />}
          icon-position="right"
          // @ts-ignore
          text={args.button_text}
        />
      }
    />
  </div>
);
export const Card_story = Template.bind({});
Card_story.args = {
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, debitis. Rerum eos, quae expedita maxime labore ipsa nisi iure nam repellendus, mollitia repellat. Assumenda, deleniti!",
    // @ts-ignore
    button_text: 'Placeholder Text'
};