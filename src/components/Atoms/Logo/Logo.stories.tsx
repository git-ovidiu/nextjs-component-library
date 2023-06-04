import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from "./Logo";

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
<td>link-url</td>
<td>string</td>
<td>use website route '/' || URL (has next/link implemented)</td>
</tr>
<tr>
<td>open-in-new-tab</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
<tr>
<td>height</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
<tr>
<td>background</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>logo-image-url</td>
<td>string</td>
<td>URL (already has a next/image implemented)</td>
</tr>
<tr>
<td>logo-alt</td>
<td>string</td>
<td>Logo Placeholder</td>
</tr>
<tr>
<td>default-opacity-mobile</td>
<td>string</td>
<td>1 (default - * if lower, it will be again '1' on hover)</td>
</tr>
<tr>
<td>default-opacity-desktop</td>
<td>string</td>
<td>1 (default)</td>
</tr>
<tr>
<td>border-radius-desktop</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
<tr>
<td>border-radius-mobile</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--a-logo-background</li>
<li>--a-logo-padding</li>
<li>--a-logo-box-shadow-transition</li>
<li>--a-logo-box-shadow</li>
<li>--a-logo-image-hover-transition</li>
<li>--a-logo-box-shadow-hover</li>
<li>--a-logo-image-transform-hover</li>
<li>--a-logo-width</li>
<li>--a-logo-height</li>
<li>--a-logo-border-radius-desktop</li>
<li>--a-logo-default-opacity-mobile</li>
<li>--a-logo-default-opacity-desktop</li>
<li>--a-logo-border-radius-mobile</li>
</ol>

<table>
<tr>
<td>--a-logo-background</td>
<td>white</td>
</tr>
<tr>
<td>--a-logo-padding</td>
<td>0px</td>
</tr>
<tr>
<td>--a-logo-box-shadow-transition</td>
<td>$transition-duration-normal</td>
</tr>
<tr>
<td>--a-logo-box-shadow</td>
<td>$box-shadow-s-white</td>
</tr>
<tr>
<td>--a-logo-image-hover-transition</td>
<td>$transition-duration-fast</td>
</tr>
<tr>
<td>--a-logo-box-shadow-hover</td>
<td>$box-shadow-l-white</td>
</tr>
<tr>
<td>--a-logo-image-transform-hover</td>
<td>scale(1.025)</td>
</tr>
<tr>
<td>--a-logo-width</td>
<td>150px</td>
</tr>
<tr>
<td>--a-logo-height</td>
<td>50px</td>
</tr>
<tr>
<td>--a-logo-border-radius-desktop</td>
<td>10px</td>
</tr>
<tr>
<td>--a-logo-default-opacity-mobile</td>
<td>1</td>
</tr>
<tr>
<td>--a-logo-default-opacity-desktop</td>
<td>1</td>
</tr>
<tr>
<td>--a-logo-border-radius-mobile</td>
<td>unset</td>
</tr>
</table>
`;


export default {
  title: "Atoms/Logo",
  component: Logo,
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
    <Logo
      width={args.width}
      height={args.height}
      background={args.background}
      logo-image-url={args["logo-image-url"]}
      logo-alt={args["logo-alt"]}
      default-opacity-mobile={args["default-opacity-mobile"]}
      default-opacity-desktop={args["default-opacity-desktop"]}
      border-radius-desktop={args["border-radius-desktop"]}
      border-radius-mobile={args["border-radius-mobile"]}
      open-in-new-tab={args["open-in-new-tab"]}
      link-url={args["link-url"]}
    />
);

export const Logo_STORY = Template.bind({});

Logo_STORY.args = {
  "open-in-new-tab": true,
  "link-url": "https://www.youtube.com",
  "width": "150px",
  "height": "50px",
  "background": "#4cbfa6",
  "logo-image-url": "https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg",
  "logo-alt": "Placeholder",
  "default-opacity-mobile": "1",
  "default-opacity-desktop": "1",
  "border-radius-desktop": "0px",
  "border-radius-mobile": "50%"

};

//todo sa vad daca trebuie PRIORITY si pe logo