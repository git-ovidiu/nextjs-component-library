
<h1 style="color: teal">NEXTJS COMPONENT LIBRARY</h1>

## TERMINAL
```
npm i @git-ovidiu/nextjs-component-library@latest
```

```
npm run rollup 
```

```
npm run test
```

```
npm publish
```

<h1 style="color: teal">IMPORTS</h1>
<h3 style="color: yellow">COMPONENTS IMPORT</h3>

```mdxjs
import {Animated_text, Description, FAQ_item, Link_item, SimpleDivider, Label, Button_Line_Drawing, Button_Slide, Button_Slide_Second, Simple_divider, Logo, Custom_Shape, Link_list, Footer_card, Card, Title_and_description, Divider, Media_image, Media_video, Custom_grid_column, Custom_grid_row} from "@git-ovidiu/nextjs-component-library";
```

<h3 style="color: yellow">SPLIDE IMPORT</h3>
```mdxjs
import { Splide, SplideSlide } from "@splidejs/react-splide";
```

<h3 style="color: yellow">PARALLAX IMPORT</h3>

```mdxjs
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from "react-scroll-parallax";
```

<h3 style="color: yellow">FRAMER MOTION IMPORT</h3>

```mdxjs
import { motion } from "react-scroll-parallax";
```





<hr/>
<h2> LIVE COMPONENTS </h2>
<h3 style="color: teal">ATOMS</h3>
<ul>
<hr>
    <h4 style="color: yellow">TEXT</h4>
    <ul>
    <li>Animated_text</li>
    <li>Description</li>
    <li>FAQ_item</li>
    <li>Link_item</li>
    <li>Label</li>
    </ul>
    <hr>
    <h4 style="color: yellow">BUTTONS</h4>
    <ul>
    <li>Button_Line_Drawing</li>
    <li>Button_Slide</li>
    <li>Button_Slide_Second</li>
    </ul>
    <hr>
    <li>Simple_divider</li>
    <li>Logo</li>
    <li>Custom_Shape</li>
</ul>
<h3 style="color: teal">MOLECULES</h3>
<ul>
    <li>Link_list</li>
    <li>Footer_card</li>
    <li>Card</li>
    <li>Title_and_description</li>
    <li>Divider</li>
    <li>Media_image</li>
    <li>Media_video</li>
</ul>
<h3 style="color: teal">ORGANISMS</h3>
<ul>
<li>Media_and_paragraph</li>
</ul>
<h3 style="color: teal">STYLEGUIDE</h3>
<ul>
<li>Custom_grid_column</li>
<li>Custom_grid_row</li>
</ul>

<hr/>

<h1 style="color: teal">FILE STRUCTURE</h1>
<u><h3>You will to generate and customize 4 files for each component:</h3></u>

<h2 style="color: gold">SCSS - COMPONENT.scss</h2>

 ```scss
 //@use '../../../styles/main.module.scss' as *;

:root{
  //--a|m|o-component-name-div-action: value;
  --a-test-component-right-column-background: gray;
}

  //.a|m|o.main-container-div{}
  .a-test-component{}
```

<br/>
<hr>

<h2 style="color: gold">TSX - COMPONENT.tsx</h2>

```tsx
import React, { ReactElement } from "react";
import "./Component.scss";
export interface ComponentProps {
  text: string;
  number: number;
  ReactElement?: ReactElement;
  boolean?: boolean;
}
export default function Component(props: ComponentProps) {
  return (
    <>
      <section>
         {/*component code here*/}
      </section>
    </>
  );
}

```
<br/>
<hr/>

<h2 style="color: gold">TESTING - COMPONENT.test.tsx</h2>

```tsx
 import React from "react";
import { render } from "@testing-library/react";

import COMPONENT from "./COMPONENT";

describe("COMPONENT", () => {
  test("renders the COMPONENT", () => {
    render(<COMPONENT text="TESTING" />);
  });
});
```
<br/>
<hr/>


<h2 style="color: gold">STORYBOOK - COMPONENT.stories.tsx</h2>

```tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TEST_COMPONENT from "./TEST_COMPONENT";

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
    <td>text</td>
    <td>string</td>
    <td>-</td>
  </tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
  <li>--a-test-component-right-column-background</li>
</ol>

<table>
  <tr>
    <td>--a-test-component-right-column-background</td>
    <td>gray</td>
  </tr>
</table>
`;

export default {
  title: "Atoms/Molecules/Organisms/TEST_COMPONENT",
  component: TEST_COMPONENT,
  argTypes: {
    selectOption: {
      control: "radio",
      options: ["selectOption_1", "selectOption_2", "selectOption_3", "selectOption_4"],
    }
  },
  parameters: {
    actions: { disabled: true },
    docs: {
      description: {
        component: Extra_Info,
      },
    },
  },
} as ComponentMeta<typeof TEST_COMPONENT>;

const Template: ComponentStory<typeof TEST_COMPONENT> = (args) => (
  <TEST_COMPONENT {...args} />
);

export const TEST_COMPONENT_STORY = Template.bind({});

TEST_COMPONENT_STORY.args = {
    selectOption: 'selectOption_3',
    text: "Placeholder text",
};

```
