
# NEXTJS COMPONENT LIBRARY

## INSTALL
`@git-ovidiu/nextjs-component-library@latest`

<hr/>
<h2> LIVE COMPONENTS </h2>
<h3 style="color: teal">ATOMS</h3>
<ol>
    <li>Animated_text</li>
    <li>Button_Line_Drawing</li>
    <li>Button_Slide</li>
    <li>Button_Slide_Second</li>
    <li>Description</li>
    <li>FAQ_item</li>
    <li>Footer_link</li>
    <li>Label</li>
</ol>
<br/>
<h3 style="color: teal">MOLECULES</h3>
<ol>
    <li>Card</li>
    <li>Footer_card</li>
    <li>Footer_link_list</li>
</ol>


<hr/>

# FILE STRUCTURE
<u><h3>You will to generate and customize 4 files for each component:</h3></u>

## CSS
 ```scss
 //@use '../../../styles/main.scss' as *;

:root{
  //--a|m|o-component-name-div-action: value;
  --a-test-component-right-column-background: gray;
}

  //.a|m|o.main-container-div{}
  .a-test-component{}
```

<br/>

## TSX
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

## TESTING
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

## STORYBOOK
```tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import COMPONENT from "./COMPONENT";

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
  title: "Atoms/Molecules/Organisms/COMPONENT",
  component: COMPONENT,
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
} as ComponentMeta<typeof COMPONENT>;

const Template: ComponentStory<typeof COMPONENT> = (args) => (
  <COMPONENT {...args} />
);

export const COMPONENT_STORY = Template.bind({});

COMPONENT_STORY.args = {
    selectOption: 'selectOption_3',
    text: "Placeholder text",
};

```
