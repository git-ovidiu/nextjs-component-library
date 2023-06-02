import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import '../../../styles/Settings/Design/_Colors.scss';
import Media_video from "../Media_video/Media_video";

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
<li>--a-video-progress-line-height</li>
<li>--a-video-fullscreen-icon-margin-right</li>
<li>--a-video-fullscreen-icon-margin-bottom</li>
<li>--a-video-border-radius</li>
<li>--a-video-controls-gap</li>
<li>--a-video-controls-background</li>
<li>--a-video-controls-border-radius</li>
<li>--a-video-controls-padding</li>
<li>--a-video-controls-hover-animation</li>
<li>--a-video-controls-container-height</li>
<li>--a-video-controls-container-width</li>
<li>--a-video-controls-icon-width</li>
<li>--a-video-controls-icon-height</li>
<li>--a-video-controls-icon-play-width</li>
<li>--a-video-controls-icon-play-height</li>
<li>--a-video-controls-fullscreen-padding</li>
<li>--a-video-controls-hover-scale</li>
<li>--a-video-controls-default-scale</li>
<li>--a-video-fullscreen-icon-color</li>
<li>--a-video-controls-icon-color</li>
<li>--a-video-controls-play-icon-color</li>
</ol>
<table>
<tr>
<td>--a-video-progress-line-height</td>
<td>5px;</td>
</tr>
<tr>
<td>--a-video-fullscreen-icon-margin-right</td>
<td>20px;</td>
</tr>
<tr>
<td>--a-video-fullscreen-icon-margin-bottom</td>
<td>20px;</td>
</tr>
<tr>
<td>--a-video-border-radius</td>
<td>unset;</td>
</tr>
<tr>
<td>--a-video-controls-gap</td>
<td>24px;</td>
</tr>
<tr>
<td>--a-video-controls-background</td>
<td>rgba(0, 0, 0, 0.308);</td>
</tr>
<tr>
<td>--a-video-controls-border-radius</td>
<td>30px;</td>
</tr>
<tr>
<td>--a-video-controls-padding</td>
<td>20px 50px;</td>
</tr>
<tr>
<td>--a-video-controls-hover-animation</td>
<td>all 0.175s ease-in-out;</td>
</tr>
<tr>
<td>--a-video-controls-container-height</td>
<td>auto;</td>
</tr>
<tr>
<td>--a-video-controls-container-width</td>
<td>auto;</td>
</tr>
<tr>
<td>--a-video-controls-icon-width</td>
<td>20px;</td>
</tr>
<tr>
<td>--a-video-controls-icon-height</td>
<td>20px;</td>
</tr>
<tr>
<td>--a-video-controls-icon-play-width</td>
<td>30px;</td>
</tr>
<tr>
<td>--a-video-controls-icon-play-height</td>
<td>30px;</td>
</tr>
<tr>
<td>--a-video-controls-fullscreen-padding</td>
<td>8px;</td>
</tr>
<tr>
<td>--a-video-controls-hover-scale</td>
<td>scale(1.5);</td>
</tr>
<tr>
<td>--a-video-controls-default-scale</td>
<td>scale(1.2);</td>
</tr>
<tr>
<td>--a-video-fullscreen-icon-color</td>
<td>white</td>
</tr>
<tr>
<td>--a-video-controls-icon-color</td>
<td>white</td>
</tr>
<tr>
<td>--a-video-controls-play-icon-color</td>
<td>red</td>
</tr>
<br/>
<h4>MOBILE</h4>
<tr>
<td>--a-video-controls-icon-width-mobile</td>
<td>10px</td>
</tr>
<tr>
<td>--a-video-controls-icon-height-mobile</td>
<td>10px</td>
</tr>
<tr>
<td>--a-video-controls-icon-play-width-mobile</td>
<td>13px</td>
</tr>
<tr>
<td>--a-video-controls-icon-play-height-mobile</td>
<td>13px</td>
</tr>
<tr>
<td>--a-video-controls-padding-mobile</td>
<td>10px 30px</td>
</tr>
<tr>
<td>--a-video-fullscreen-icon-margin-right-mobile</td>
<td>5px</td>
</tr>
<tr>
<td>--a-video-fullscreen-icon-margin-bottom-mobile</td>
<td>5px</td>
</tr>
<tr>
<td>--a-video-controls-container-margin-bottom-mobile</td>
<td>5px</td>
</tr>
</table>
`;

export default {
	title: "Molecules/Media/Video",
	component: Media_video,
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
} as ComponentMeta<typeof Media_video>;

const Template: ComponentStory<typeof Media_video> = (args) => (



		<div
			style={{
				maxWidth: "500px",
				width: "100%",
				height: "500px",
				position: "relative",
				margin: "0 auto",
			}}
		>
				<Media_video
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

export const Media_video_story = Template.bind({});

Media_video_story.args = {
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
