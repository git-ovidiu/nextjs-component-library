import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
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
<td>24px</td>
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
	<Logo {...args}
		border-radius={args["border-radius"]}
	  	background={args.background}
		logo={
		//@ts-ignore
		<Link href={args["logo-href"]} target="_blank"><Image src={args["image-source"]} alt="Placeholder"/></Link>}
	/>
);

export const Logo_STORY = Template.bind({});

Logo_STORY.args = {
	//@ts-ignore
	"image-source": "https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png",
	"logo-href": "https://www.google.com",
	background: "#4cbfa6",
	"border-radius": "20px "
};
