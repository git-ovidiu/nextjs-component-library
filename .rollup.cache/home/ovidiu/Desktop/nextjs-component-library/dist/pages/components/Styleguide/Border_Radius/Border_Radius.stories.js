import React from 'react';
import Border_Radius from './Border_Radius';
var Extra_Info = "\n<br>\n<table>\n  <tr>\n    <td>$border-radius-0</td>\n    <td>unset</td>\n  </tr>\n  <tr>\n    <td>$border-radius-xs</td>\n    <td>4px</td>\n  </tr>\n  <tr>\n    <td>$border-radius-s</td>\n    <td>8px</td>\n  </tr>\n  <tr>\n    <td>$border-radius-m</td>\n    <td>12px</td>\n  </tr>\n  <tr>\n    <td>$border-radius-l</td>\n    <td>16px</td>\n  </tr>\n  <tr>\n    <td>$border-radius-xl</td>\n    <td>20px</td>\n  </tr>\n  <tr>\n    <td>$border-radius-xxl</td>\n    <td>30px</td>\n  </tr>\n  <tr>\n    <td>$border-radius-xxxl</td>\n    <td>40px</td>\n  </tr>\n</table>\n";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Styleguide/Border_Radius',
    component: Border_Radius,
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
    return React.createElement(Border_Radius, null);
};
export var Border_Radius_story = Template.bind({});
//# sourceMappingURL=Border_Radius.stories.js.map