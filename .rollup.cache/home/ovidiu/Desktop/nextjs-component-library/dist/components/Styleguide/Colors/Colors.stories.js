import React from 'react';
import Colors from './Colors';
var Extra_Info = "\n<br>\n\n<table>\n  <tr>\n    <td>$primary-color</td>\n    <td>'#4cbfa6'</td>\n  </tr>\n  <tr>\n    <td>$secondary-color</td>\n    <td>'#f6ebf4'</td>\n  </tr>\n  <tr>\n    <td>$tertiary-color</td>\n    <td>'#482673'</td>\n  </tr>\n  <tr>\n    <td>$extra-color</td>\n    <td>'#301008'</td>\n  </tr>\n  <tr>\n    <td>$border-color</td>\n    <td>rgb(110, 108, 108)</td>\n  </tr>\n  <tr>\n    <td>$color-black</td>\n    <td>'#000000'</td>\n  </tr>\n  <tr>\n    <td>$color-white</td>\n    <td>'#ffffff'</td>\n  </tr>\n</table>\n";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Styleguide/Colors',
    component: Colors,
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
    return React.createElement(Colors, null);
};
export var Colors_story = Template.bind({});
//# sourceMappingURL=Colors.stories.js.map