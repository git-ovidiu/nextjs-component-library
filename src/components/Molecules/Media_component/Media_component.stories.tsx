import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Media_component from "./Media_component";
import Image from "next/image";

const Extra_Info = `
<br>
<h2><u>CSS VARIABLES</u></h2>
<ul>
<li>--animated-title-transition-duration</li>
<li>--animated-title-transition-timing-function</li>
</ul>

<br>
<h2><u>CURRENT VALUES</u></h2>
<table>
  <tr>
    <td>--animated-title-transition-duration</td>
    <td>1s</td>
  </tr>
  <tr>
    <td>--animated-title-transition-timing-function</td>
    <td>cubic-bezier(0.19, 1, 0.22, 1)</td>
  </tr>
</table>
<br>
<h2><u>IT HAS 2 PROPS</u></h2>
<table>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
  <tr>
    <td>text</td>
    <td>ReactElement</td>
    <td>-</td>
  </tr>
  <tr>
    <td>variant</td>
    <td>string</td>
    <td>h1, h2, h3, h4, p</td>
  </tr>
</table>

`;

export default {
  title: "Molecules/Media",
  component: Media_component,
  argTypes: {
    image: { defaultValue: <h1>imagine</h1> },
    video: { defaultValue: 'https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4' },
    "auto-play": { defaultValue: true, control: { type: 'boolean' } },
    muted: { defaultValue: true, control: { type: 'boolean' } },
    loop: { defaultValue: true, control: { type: 'boolean' } },
  },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info
      }
    }
  }
} as ComponentMeta<typeof Media_component>;


const Template: ComponentStory<typeof Media_component> = (args) => (
  <>
    <div style={{ maxWidth: "400px", width: "100%", height: "400px", position: "relative" }}>
      <Media_component {...args} />
    </div>

    <div style={{ maxWidth: "900px", width: "100%", height: "900px", marginTop: '50px', position: "relative" }}>
      <Media_component {...args} />
    </div>
  </>
);

export const Media_component_story = Template.bind({});
Media_component_story.args = {
  image: <Image
  src="https://res.cloudinary.com/dxbivmheq/image/upload/v1674309864/OvidiuBunghez_diagramic_drawing_simple_color_Yellow_Orange_only_3d2d259b-ddf5-4fb3-94ef-fe74a7954ad8_cvowat.png"
  height={300}
  width={300}
  alt="placeholder"
/>,
  "video": 'https://res.cloudinary.com/dxbivmheq/video/upload/v1664097081/samples/sea-turtle.mp4',
  "auto-play": false,
  "muted": false,
  "loop": true,
  "showControlsProperty": true,

  "label-top-right": <Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />,
  "label-top-left": <Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />,
  "label-bottom-right": <Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />,
  "label-bottom-left": <Image src="https://fakeimg.pl/100x50/000000/ffffff?text=right" alt="Placeholder" />,

  "fullscreen-icon-color": 'white',
  "prev-icon-color": 'white',
  'play-icon-color': 'red',
  "pause-icon-color": 'white',
  "forward-icon-color": 'white',
  "progress-bar-color": 'white',
  "object-fit": 'cover'
};
