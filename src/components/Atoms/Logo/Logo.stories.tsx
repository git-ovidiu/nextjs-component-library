import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from "./Logo";
import Image from "next/image";

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
<td>logo</td>
<td>ReactElement</td>
<td>use next/image</td>
</tr>
<tr>
<td>background</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<tr>
<td>border-radius</td>
<td>string</td>
<td>0px | 0%</td>
</tr>

</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--a-logo-background</li>
<li>--a-logo-border-radius</li>
<li>--a-logo-padding</li>
<li>--a-logo-box-shadow-transition</li>
<li>--a-logo-box-shadow</li>
<li>--a-logo-image-hover-transition</li>
<li>--a-logo-box-shadow-hover</li>
<li>--a-logo-image-transform-hover</li>
<li>--a-logo-width</li>
<li>--a-logo-height</li>
</ol>

<table>
<tr>
<td>--a-logo-background</td>
<td>white</td>
</tr>
<tr>
<td>--a-logo-border-radius</td>
<td>10px</td>
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
<td>scale(1.15)</td>
</tr>
<tr>
<td>--a-logo-width</td>
<td>150px</td>
</tr>
<tr>
<td>--a-logo-height</td>
<td>50px</td>
</tr>
</table>
`;

//@ts-ignore
const Link = ({ href, target, children }) => (
  <a href={href} target={target} rel="noopener noreferrer">
    {children}
  </a>
);

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
  <div style={{position: "relative", width: "150px", height: "50px"}}>
    <Logo
      border-radius={args["border-radius"]}
      background={args.background}
      logo="https://res.cloudinary.com/dxbivmheq/image/upload/v1664097063/samples/cloudinary-logo-vector.svg"
      width="200px"
      height="50px"
    />
  </div>
);

export const Logo_STORY = Template.bind({});

Logo_STORY.args = {
  background: "#4cbfa6",
  "border-radius": "20px ",
};
