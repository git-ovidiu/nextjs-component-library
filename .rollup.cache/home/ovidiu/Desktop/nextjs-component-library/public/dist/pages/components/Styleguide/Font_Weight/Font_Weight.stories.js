import React from 'react';
import Font_Weight from './Font_Weight';
var Extra_Info = "\n<br>\n<table>\n  <tr>\n    <td>$font-weight-s</td>\n    <td>400</td>\n  </tr>\n  <tr>\n    <td>$font-weight-m</td>\n    <td>500</td>\n  </tr>\n  <tr>\n    <td>$font-weight-l</td>\n    <td>600</td>\n  </tr>\n  <tr>\n    <td>$font-weight-xl</td>\n    <td>800</td>\n  </tr>\n</table>\n\n";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Styleguide/Font_Weight',
    component: Font_Weight,
    parameters: {
        controls: { disabled: true },
        actions: { disabled: true },
        docs: {
            description: {
                component: Extra_Info
            }
        }
    }
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function () {
    return React.createElement(Font_Weight, null);
};
export var Font_Weight_story = Template.bind({});
//# sourceMappingURL=Font_Weight.stories.js.map