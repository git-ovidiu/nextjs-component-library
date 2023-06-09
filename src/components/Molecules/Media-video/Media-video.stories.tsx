import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import '../../../styles/Settings/Design/_Colors.scss';
import MediaVideo from "../Media-video";

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
<td>video</td>
<td>string</td>
<td>URL || youtube(soon)</td>
</tr>
<tr>
<td>muted</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>loop</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>show-controls</td>
<td>boolean</td>
<td><b>TRUE</b>: this will display the controls when the page renders <br/> <b>FALSE</b>: doesn't them until mouse hover</td>
</tr>
<tr>
<td>remove-controls</td>
<td>boolean</td>
<td><b>TRUE</b>: this will set display: none to the controls (no controls over the video) && only the progress bar will be shown <br/> ** if remove-controls is true, then the autoplay is true by default ** <br/> ** unlike remove-controls, the icons will not appear on mouse hover ** <br/><b>FALSE</b>: this is set by default</td>
</tr>

<tr>
<td>video-border-radius</td>
<td>string</td>
<td>0px | 0%</td>
</tr>
<tr>
<td>auto-play</td>
<td>boolean</td>
<td>-</td>
</tr>
<tr>
<td>progress-bar-color</td>
<td>string</td>
<td>hex || color name || rgb</td>
</tr>
<br/>
<br/>
<tr>
<td>custom-play-icon</td>
<td>ReactElement</td>
<td>use React Icons <br>*! remember to add the classes: <h4 style="color: #4cbfa6">controls-icon action-icon</h4> on the react icon className to activate the CSS var. *</td>
</tr>
<tr>
<td>custom-pause-icon</td>
<td>ReactElement</td>
<td>use React Icons <br>*! remember to add the classes: <h4 style="color: #4cbfa6">controls-icon action-icon</h4> on the react icon className to activate the CSS var. *</td>
</tr>
<br/>
<br/>
<tr>
<td>custom-prev-icon</td>
<td>ReactElement</td>
<td>use React Icons <br>*! remember to add the classes: <h4 style="color: #301008">controls-icon</h4> on the react icon className to activate the CSS var. *</td>
</tr>
<tr>
<td>custom-next-icon</td>
<td>ReactElement</td>
<td>use React Icons <br>*! remember to add the classes: <h4 style="color: #301008">controls-icon</h4> on the react icon className to activate the CSS var. *</td>
</tr>
<tr>
<td>custom-fullscreen-icon</td>
<td>ReactElement</td>
<td>use React Icons <br>*! remember to add the classes: <h4 style="color: #301008">controls-icon</h4> on the react icon className to activate the CSS var. *</td>
</tr>
</table>

<br>
<h2><u>CSS VARIABLES</u></h2>
<ol>
<li>--m-video-progress-line-height</li>
<li>--m-video-fullscreen-icon-margin-right</li>
<li>--m-video-fullscreen-icon-margin-bottom</li>
<li>--m-video-border-radius</li>
<li>--m-video-controls-gap</li>
<li>--m-video-controls-background</li>
<li>--m-video-controls-border-radius</li>
<li>--m-video-controls-padding</li>
<li>--m-video-controls-hover-animation</li>
<li>--m-video-controls-container-height</li>
<li>--m-video-controls-container-width</li>
<li>--m-video-controls-icon-width</li>
<li>--m-video-controls-icon-height</li>
<li>--m-video-controls-icon-play-width</li>
<li>--m-video-controls-icon-play-height</li>
<li>--m-video-controls-fullscreen-padding</li>
<li>--m-video-controls-hover-scale</li>
<li>--m-video-controls-default-scale</li>
<li>--m-video-fullscreen-icon-color</li>
<li>--m-video-controls-icon-color</li>
<li>--m-video-controls-play-icon-color</li>
</ol>
<table>
<tr>
<td>--m-video-progress-line-height</td>
<td>5px;</td>
</tr>
<tr>
<td>--m-video-fullscreen-icon-margin-right</td>
<td>20px;</td>
</tr>
<tr>
<td>--m-video-fullscreen-icon-margin-bottom</td>
<td>20px;</td>
</tr>
<tr>
<td>--m-video-border-radius</td>
<td>unset;</td>
</tr>
<tr>
<td>--m-video-controls-gap</td>
<td>24px;</td>
</tr>
<tr>
<td>--m-video-controls-background</td>
<td>rgba(0, 0, 0, 0.308);</td>
</tr>
<tr>
<td>--m-video-controls-border-radius</td>
<td>30px;</td>
</tr>
<tr>
<td>--m-video-controls-padding</td>
<td>20px 50px;</td>
</tr>
<tr>
<td>--m-video-controls-hover-animation</td>
<td>all 0.175s ease-in-out;</td>
</tr>
<tr>
<td>--m-video-controls-container-height</td>
<td>auto;</td>
</tr>
<tr>
<td>--m-video-controls-container-width</td>
<td>auto;</td>
</tr>
<tr>
<td>--m-video-controls-icon-width</td>
<td>20px;</td>
</tr>
<tr>
<td>--m-video-controls-icon-height</td>
<td>20px;</td>
</tr>
<tr>
<td>--m-video-controls-icon-play-width</td>
<td>30px;</td>
</tr>
<tr>
<td>--m-video-controls-icon-play-height</td>
<td>30px;</td>
</tr>
<tr>
<td>--m-video-controls-fullscreen-padding</td>
<td>8px;</td>
</tr>
<tr>
<td>--m-video-controls-hover-scale</td>
<td>scale(1.5);</td>
</tr>
<tr>
<td>--m-video-controls-default-scale</td>
<td>scale(1.2);</td>
</tr>
<tr>
<td>--m-video-fullscreen-icon-color</td>
<td>white</td>
</tr>
<tr>
<td>--m-video-controls-icon-color</td>
<td>white</td>
</tr>
<tr>
<td>--m-video-controls-play-icon-color</td>
<td>red</td>
</tr>
<br/>
<h4>MOBILE</h4>
<tr>
<td>--m-video-controls-icon-width-mobile</td>
<td>10px</td>
</tr>
<tr>
<td>--m-video-controls-icon-height-mobile</td>
<td>10px</td>
</tr>
<tr>
<td>--m-video-controls-icon-play-width-mobile</td>
<td>13px</td>
</tr>
<tr>
<td>--m-video-controls-icon-play-height-mobile</td>
<td>13px</td>
</tr>
<tr>
<td>--m-video-controls-padding-mobile</td>
<td>10px 30px</td>
</tr>
<tr>
<td>--m-video-fullscreen-icon-margin-right-mobile</td>
<td>5px</td>
</tr>
<tr>
<td>--m-video-fullscreen-icon-margin-bottom-mobile</td>
<td>5px</td>
</tr>
<tr>
<td>--m-video-controls-container-margin-bottom-mobile</td>
<td>5px</td>
</tr>
</table>
`;

export default {
	title: "Molecules/Media/Video",
	component: MediaVideo,
	argTypes:{
		"object-fit": {
			control: "radio",
			options: ["cover", "contain"],
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
} as ComponentMeta<typeof MediaVideo>;

const Template: ComponentStory<typeof MediaVideo> = (args) => (



		<div
			style={{
				maxWidth: "500px",
				width: "100%",
				height: "500px",
				position: "relative",
				margin: "0 auto",
			}}
		>
				<MediaVideo
					{...args}
					//@ts-ignore
					video={args["video"]}
					//@ts-ignore
					video-border-radius={args["video-border-radius"]}
					object-fit={args["object-fit"]}
					auto-play={args["auto-play"]}
					//@ts-ignore
					muted={args.muted}
					//@ts-ignore
					loop={args.loop}
					//@ts-ignore
					show-controls={args["show-controls"]}
					remove-controls={args["remove-controls"]}
					//@ts-ignore
					progress-bar-color={args["progress-bar-color"]}

					custom-fullscreen-icon={args["custom-fullscreen-icon"]}
					custom-prev-icon={args["custom-prev-icon"]}
					custom-pause-icon={args["custom-pause-icon"]}
					custom-play-icon={args["custom-play-icon"]}
					custom-next-icon={args["custom-next-icon"]}
				/>
		</div>

);

export const MediaVideo_story = Template.bind({});

MediaVideo_story.args = {
	//@ts-ignore
	"video":
		"https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4",
	["auto-play"]: false,
	"video-border-radius": undefined,
	muted: true,
	loop: true,
	//@ts-ignore
	"show-controls": true,
	"object-fit": "cover",
	"remove-controls": false,
	"progress-bar-color": "red",

	"custom-fullscreen-icon": undefined,
	"custom-prev-icon": undefined,
	"custom-pause-icon": undefined,
	"custom-play-icon": undefined,
	"custom-next-icon": undefined

};
