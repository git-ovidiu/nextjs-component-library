import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomGridColumn from "./Custom-grid-column";
import "../../../../styles/bootstrap/css/bootstrap-grid.css";

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
  <td>column-background</td>
  <td>string</td>
  <td>hex || color name || rgb</td>
</tr>
  <tr>
  <td>column-border-radius</td>
  <td>string</td>
  <td>0px | 0%</td>
</tr>
  <tr>
  <td>column-background-opacity</td>
  <td>string</td>
  <td>default -> 1</td>
</tr>
  <tr>
  <td>column-padding-top</td>
  <td>string</td>
  <td>0px | 0%</td>
</tr>
  <tr>
  <td>column-padding-bottom</td>
  <td>string</td>
  <td>0px | 0%</td>
</tr>
<tr>
  <td>columns-equal-paddings</td>
  <td>boolean</td>
  <td>if true : 0px 10px => 10px </td>
</tr>
<br>
<h2><u>GRID COLUMNS</u></h2>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
<tr>
<td>xs</td>
<td>number</td>
<td>1 -> 12</td>
</tr>
<tr>
<td>sm</td>
<td>number</td>
<td>1 -> 12</td>
</tr>
<tr>
<td>md</td>
<td>number</td>
<td>1 -> 12</td>
</tr>
<tr>
<td>lg</td>
<td>number</td>
<td>1 -> 12</td>
</tr>
<tr>
<td>xl</td>
<td>number</td>
<td>1 -> 12</td>
</tr>
<tr>
<td>xxl</td>
<td>number</td>
<td>1 -> 12</td>
</tr>
<h2><u>GRID OFFSET</u></h2>
  <tr>
    <td>name</td>
    <td>type</td>
    <td>can be:</td>
  </tr>
  <tr>
  <td>xs-offset</td>
  <td>number</td>
  <td>1 -> 11</td>
</tr>
  <tr>
  <td>sm-offset</td>
  <td>number</td>
  <td>1 -> 11</td>
</tr>
  <tr>
  <td>md-offset</td>
  <td>number</td>
  <td>1 -> 11</td>
</tr>
  <tr>
  <td>lg-offset</td>
  <td>number</td>
  <td>1 -> 11</td>
</tr>
  <tr>
  <td>xl-offset</td>
  <td>number</td>
  <td>1 -> 11</td>
</tr>
  <tr>
  <td>xxl-offset</td>
  <td>number</td>
  <td>1 -> 11</td>
</tr>
</table>

<br>

<h2><u>CSS VARIABLES</u></h2>
<ol>
    <li>--s-column-background-color</li>
    <li>--s-column-border-radius</li>
    <li>--s-column-background-opacity</li>
    <li>--s-column-padding-top</li>
    <li>--s-column-padding-bottom</li>
</ol>

<table>
    <tr>
    <td>--s-column-background-color</td>
    <td>unset</td>
</tr>
    <tr>
    <td>--s-column-border-radius</td>
    <td>unset</td>
</tr>
    <tr>
    <td>--s-column-background-opacity</td>
    <td>1</td>
</tr>
    <tr>
    <td>--s-column-padding-top</td>
    <td>unset</td>
</tr>
    <tr>
    <td>--s-column-padding-bottom</td>
    <td>unset</td>
</tr>
</table>
`;

export default {
  title: "Styleguide/Grid/Column",
  component: CustomGridColumn,
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 1,
        max: 12,
        step: 1,
      },
    },
    "offset-size": {
      control: {
        type: "range",
        min: 0,
        max: 11,
        step: 1,
      },
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
} as ComponentMeta<typeof CustomGridColumn>;

const Template: ComponentStory<typeof CustomGridColumn> = (args) => (
  <CustomGridColumn
    {...args}
    //@ts-ignore
    xs={args.size}
    //@ts-ignore
    sm={args.size}
    //@ts-ignore
    md={args.size}
    //@ts-ignore
    lg={args.size}
    //@ts-ignore
    xl={args.size}
    //@ts-ignore
    xxl={args.size}
    //@ts-ignore
    xs-offset={args["offset-size"]}
    //@ts-ignore
    sm-offset={args["offset-size"]}
    //@ts-ignore
    md-offset={args["offset-size"]}
    //@ts-ignore
    lg-offset={args["offset-size"]}
    column-background={args["column-background"]}
    column-border-radius={args["column-border-radius"]}
    column-background-opacity={args["column-background-opacity"]}
    column-padding-top={args["column-padding-top"]}
    column-padding-bottom={args["column-padding-bottom"]}
    columns-equal-paddings={args["columns-equal-paddings"]}
  >
    <h1
      style={{
        border: "2px solid black",
        padding: "20px",
        background: "black",
        color: "#4cbfa6",
        textAlign: "center",
      }}
      //@ts-ignore
      >offset-{args["offset-size"]} & col-{args.size}
    </h1>
  </CustomGridColumn>
);

export const CustomGridColumn_STORY = Template.bind({});

CustomGridColumn_STORY.args = {
  //@ts-ignore
  size: 4,
  "offset-size": 0,
  "column-background": "#4cbfa6",
  "column-border-radius": "0px",
  "column-background-opacity": "1",
  "column-padding-top": "0px",
  "column-padding-bottom": "0px",
  "columns-equal-paddings": true
};
