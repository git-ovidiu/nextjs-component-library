import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Media from "./Media_component";
import {BsPlayCircleFill} from "react-icons/bs";

const Extra_Info = `
<br>
<h2><u>PROPS</u></h2>

`;

export default {
	title: "Molecules/Media Component/Video",
	component: Media,
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
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args) => (



		<div
			style={{
				maxWidth: "500px",
				width: "100%",
				height: "500px",
				position: "relative",
				margin: "0 auto",
			}}
		>
			<>
				<Media
					{...args}
					//@ts-ignore
					video={args.video}
					//@ts-ignore
					auto-play={args["auto-play"]}
					//@ts-ignore
					muted={args.muted}
					//@ts-ignore
					loop={args.loop}
					//@ts-ignore
					showControlsProperty={args["show-controls"]}
					//@ts-ignore
					fullscreen-icon-color={args["fullscreen-icon-color"]}
					//@ts-ignore
					prev-icon-color={args["prev-icon-color"]}
					//@ts-ignore
					play-icon-color={args["play-icon-color"]}
					//@ts-ignore
					pause-icon-color={args["pause-icon-color"]}
					//@ts-ignore
					forward-icon-color={args["forward-icon-color"]}
					//@ts-ignore
					progress-bar-color={args["progress-bar-color"]}
				/>
			</>
		</div>

);

export const Media_component_story = Template.bind({});

Media_component_story.args = {
	// @ts-ignore

	"image-source":
		"https://res.cloudinary.com/dxbivmheq/image/upload/v1674309864/OvidiuBunghez_diagramic_drawing_simple_color_Yellow_Orange_only_3d2d259b-ddf5-4fb3-94ef-fe74a7954ad8_cvowat.png",
	"object-fit": "cover",

	// @ts-ignore
	"label-top-right": "https://fakeimg.pl/100x50/000000/ffff00?text=right",
	// @ts-ignore
	"label-top-left": "https://fakeimg.pl/100x50/000000/00ffff?text=left",
	// @ts-ignore
	"label-bottom-right": "https://fakeimg.pl/100x50/ffffff/ff0000?text=right",
	// @ts-ignore
	"label-bottom-left": "https://fakeimg.pl/100x50/000000/ff00ff?text=left",
	video:
		"https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4",
	["auto-play"]: false,
	muted: true,
	loop: true,
	"show-controls": true,
	hideShowControls: false,

	"fullscreen-icon-color": "white",
	"prev-icon-color": "white",
	"play-icon-color": "red",
	"pause-icon-color": "white",
	"forward-icon-color": "white",
	"progress-bar-color": "red",

	// ----

	"custom-fullscreen-icon": undefined,
	"custom-prev-icon": undefined,
	"custom-pause-icon": undefined,
	"custom-play-icon": <BsPlayCircleFill className="controls-icon action-icon" />,

	"video-border-radius": undefined,
	"image-border-radius": undefined
};
