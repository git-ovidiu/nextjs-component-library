'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = "h1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-button-slide-background: #482673;\n  --a-button-slide-background-hover: #4cbfa6;\n  --a-button-slide-animation-transition: 0.3s;\n  --a-button-slide-border-radius: unset;\n  --a-button-slide-font-size: 20px;\n  --a-button-slide-padding: 20px 30px;\n  --a-button-slide-line-height: 1;\n  --a-button-slide-font-weight: 400;\n  --a-button-slide-text-color: #ffffff;\n}\n\n.btn_hover_slide {\n  font-size: var(--a-button-slide-font-size);\n  padding: var(--a-button-slide-padding);\n  line-height: var(--a-button-slide-line-height);\n  font-weight: var(--a-button-slide-font-weight);\n  border-radius: var(--a-button-slide-border-radius);\n  position: relative;\n  display: block;\n  height: 100%;\n  color: var(--a-button-slide-text-color);\n  background-color: var(--a-button-slide-background-hover);\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 5px 15px var(--a-button-slide-background);\n}\n.btn_hover_slide span {\n  font-size: var(--a-button-slide-font-size);\n  padding: var(--a-button-slide-padding);\n  line-height: var(--a-button-slide-line-height);\n  font-weight: var(--a-button-slide-font-weight);\n  border-radius: var(--a-button-slide-border-radius);\n  position: relative;\n  display: block;\n  top: 0;\n  left: 0;\n}\n.btn_hover_slide::before {\n  position: absolute;\n  content: \"\";\n  background-color: var(--a-button-slide-background);\n  transition: var(--a-button-slide-animation-transition) ease-out;\n  border-radius: var(--a-button-slide-border-radius);\n}\n\n.btn_hover_slide.slide_down {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_down::before {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_down:hover::before {\n  height: 0%;\n}\n\n.btn_hover_slide.slide_up {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_up::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_up:hover::before {\n  height: 0%;\n}\n\n.btn_hover_slide.slide_right {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_right::before {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_right:hover::before {\n  width: 0%;\n}\n\n.btn_hover_slide.slide_left {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_left::before {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_left:hover::before {\n  width: 0%;\n}";
styleInject(css_248z$4);

function Button_slide(props) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "btn_holder" },
            React__default["default"].createElement("button", { className: "\n          ".concat(props.hover_effect === "slide-down" ? "btn_hover_slide slide_down" : "", "\n          ").concat(props.hover_effect === "slide-up" ? "btn_hover_slide slide_up" : "", "\n          ").concat(props.hover_effect === "slide-right" ? "btn_hover_slide slide_right" : "", "\n          ").concat(props.hover_effect === "slide-left" ? "btn_hover_slide slide_left" : "", "\n          ") },
                React__default["default"].createElement("span", null, props.text)))));
}

var css_248z$3 = "h1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-button-line-drawing-font-size: 20px;\n  --a-button-line-drawing-padding: 20px 30px;\n  --a-button-line-drawing-line-height: 2;\n  --a-button-line-drawing-font-weight: 400;\n  --a-button-line-drawing-text-color: #000000;\n  --a-button-line-drawing-line-color: #482673;\n  --a-button-line-drawing-background-color: transparent;\n  --a-button-line-drawing-animation-transition: 0.37s;\n  --a-button-line-drawing-animation-transition-fast: 0.2s;\n  --a-button-line-drawing-animation-transition-faster: 0.3s;\n  --a-button-line-drawing-animation-transition-ultra-fast: 0.15s;\n}\n\n.btn_hover_line {\n  font-size: var(--a-button-line-drawing-font-size);\n  padding: var(--a-button-line-drawing-padding);\n  line-height: var(--a-button-line-drawing-line-height);\n  font-weight: var(--a-button-line-drawing-font-weight);\n  position: relative;\n  display: inline-flex;\n  height: 100%;\n  background-color: var(--a-button-line-drawing-background-color);\n  border: none;\n  cursor: pointer;\n}\n.btn_hover_line span {\n  font-size: var(--a-button-line-drawing-font-size);\n  padding: var(--a-button-line-drawing-padding);\n  line-height: var(--a-button-line-drawing-line-height);\n  font-weight: var(--a-button-line-drawing-font-weight);\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  color: var(--a-button-line-drawing-text-color);\n}\n.btn_hover_line::before {\n  position: absolute;\n  content: \"\";\n  width: 15%;\n  height: 2px;\n  background-color: var(--a-button-line-drawing-line-color);\n  z-index: 2;\n}\n.btn_hover_line::after {\n  position: absolute;\n  content: \"\";\n  width: 15%;\n  height: 2px;\n  background-color: var(--a-button-line-drawing-line-color);\n  z-index: 2;\n}\n\n.line_below {\n  padding: 0;\n  margin: 0;\n}\n.line_below::before {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  right: 50%;\n}\n.line_below::after {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  left: 50%;\n}\n.line_below:hover::before {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_below:hover::after {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_below span::before {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  left: 0;\n  border-left: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_below span::after {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  right: 0;\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_below span:hover::before {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_below span:hover::after {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n\n/* 16. hover-border-6 */\n.line_above {\n  padding: 0;\n  margin: 0;\n}\n.line_above::before {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  right: 50%;\n}\n.line_above::after {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  left: 50%;\n}\n.line_above:hover::before {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_above:hover::after {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_above span::before {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  left: 0;\n  border-left: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_above span::after {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  right: 0;\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_above span:hover::before {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_above span:hover::after {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_above::before {\n  top: 0;\n}\n.line_above::after {\n  top: 0;\n}\n.line_above span::before {\n  top: 0;\n  border-left: 2px solid var(--a-button-line-drawing-line-color);\n  border-bottom: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: none;\n}\n.line_above span::after {\n  top: 0;\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  border-bottom: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: none;\n}\n\n.line_side {\n  padding: 0;\n  margin: 0;\n}\n.line_side::before {\n  left: 0%;\n  height: 30%;\n  width: 2px;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-faster) ease-out;\n  top: 50%;\n}\n.line_side::after {\n  left: 0%;\n  height: 30%;\n  width: 2px;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-faster) ease-out;\n  bottom: 50%;\n}\n.line_side:hover::before {\n  height: 50%;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_side:hover::after {\n  height: 50%;\n  transition: height var(--a-button-line-drawing-animation-transition-ultra-fast) ease-in;\n}\n.line_side span::before {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  top: -2px;\n  left: 0%;\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  transition: height var(--a-button-line-drawing-animation-transition-ultra-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-ultra-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n}\n.line_side span::after {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  bottom: 0;\n  left: 0%;\n  border-bottom: 2px solid var(--a-button-line-drawing-line-color);\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n}\n.line_side span:hover::after {\n  width: 100%;\n  opacity: 1;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-out, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_side span:hover::before {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-ultra-fast) linear, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-faster) ease-out, opacity 0s var(--a-button-line-drawing-animation-transition-ultra-fast);\n}";
styleInject(css_248z$3);

function Button_Line_Drawing(props) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "btn_holder" },
            React__default["default"].createElement("button", { className: "\n            ".concat(props.line_effect === "line-below" ? 'btn_hover_line line_below' : "", "\n          ").concat(props.line_effect === "line-above" ? 'btn_hover_line line_above' : "", "\n          ").concat(props.line_effect === "line-side" ? 'btn_hover_line line_side' : "", "\n          ") },
                React__default["default"].createElement("span", null, props.text)))));
}

var css_248z$2 = "h1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-button-slide-second-background: #482673;\n  --a-button-slide-second-background-hover: #4cbfa6;\n  --a-button-slide-second-animation-transition: 0.37s;\n  --a-button-slide-second-animation-transition-fast: 0.2s;\n  --a-button-slide-second-border-radius: unset;\n  --a-button-slide-second-font-size: 20px;\n  --a-button-slide-second-padding: 10px 30px;\n  --a-button-slide-second-line-height: 1;\n  --a-button-slide-second-font-weight: 400;\n  --a-button-slide-second-text-color: #ffffff;\n}\n\n.btn_hover_left {\n  font-size: var(--a-button-slide-second-font-size);\n  padding: var(--a-button-slide-second-padding);\n  line-height: var(--a-button-slide-second-line-height);\n  font-weight: var(--a-button-slide-second-font-weight);\n  border-radius: var(--a-button-slide-second-border-radius);\n  border: none;\n  display: block;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  background-color: var(--a-button-slide-second-background);\n  box-shadow: 0 5px 15px var(--a-button-slide-second-background);\n}\n.btn_hover_left span {\n  position: relative;\n  z-index: 1;\n  color: var(--a-button-slide-second-text-color);\n}\n.btn_hover_left:after {\n  content: \"\";\n  position: absolute;\n  left: -20px;\n  top: 0;\n  height: 300px;\n  width: 140%;\n  background: var(--a-button-slide-second-background-hover);\n  -webkit-transition: all var(--a-button-slide-second-animation-transition-fast) ease-in-out;\n  transition: all var(--a-button-slide-second-animation-transition) ease-in-out;\n  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\n}\n.btn_hover_left:hover {\n  color: var(--a-button-slide-second-background);\n}\n\n.btn_hover_left:hover:after {\n  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\n}\n\n.link {\n  margin-top: 30px;\n}";
styleInject(css_248z$2);

function Button_Slide_Second(props) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "tertiary-button" },
            React__default["default"].createElement("button", { className: "\n            ".concat(props.hover_effect === "tertiary" ? 'btn_hover_left' : "", "\n          ") },
                React__default["default"].createElement("span", null, props.text)))));
}

var css_248z$1 = "h1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --faq-item-icon-margin-top: 10px;\n  --faq-item-border-radius: 12px;\n  --faq-item-box-shadow: 0px 0px 48px -2px rgba(16, 24, 40, 0.08);\n  --faq-item-padding: 40px;\n  --faq-item-content-padding-right: 20px;\n  --faq-item-content-title-opacity: 0.7;\n  --faq-item-content-title-font-weight: 600;\n  --faq-item-content-title-transition: all 0.37s;\n}\n\n.faq-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  border-radius: var(--faq-item-border-radius);\n  box-shadow: var(--faq-item-box-shadow);\n  padding: var(--faq-item-padding);\n  position: relative;\n  cursor: pointer;\n}\n.faq-item ::selection {\n  background: transparent;\n}\n.faq-item .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 95%;\n  padding-right: var(--faq-item-content-padding-right);\n}\n.faq-item .content .title {\n  opacity: var(--faq-item-content-title-opacity);\n  font-weight: var(--faq-item-content-title-font-weight);\n  transition: var(--faq-item-content-title-transition);\n}\n.faq-item .content .hidden-text {\n  overflow: hidden;\n  height: 0;\n  max-height: 0;\n  opacity: 0;\n  transition: all 0.37s;\n  opacity: 0;\n}\n.faq-item .content .hidden-text span {\n  display: inline-block;\n}\n.faq-item .content .hidden-text > span {\n  overflow: hidden;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.faq-item .content .hidden-text > span > span {\n  position: relative;\n  transform: translateY(100%);\n  transition: inherit;\n}\n.faq-item .content .hidden-text > span:nth-child(2) {\n  transition-delay: 0.04s;\n}\n.faq-item .content .hidden-text > span:nth-child(3) {\n  transition-delay: 0.06s;\n}\n.faq-item .content .hidden-text > span:nth-child(4) {\n  transition-delay: 0.08s;\n}\n.faq-item .content .hidden-text > span:nth-child(5) {\n  transition-delay: 0.1s;\n}\n.faq-item .content .hidden-text > span:nth-child(6) {\n  transition-delay: 0.12s;\n}\n.faq-item .content .hidden-text > span:nth-child(7) {\n  transition-delay: 0.14s;\n}\n.faq-item .content .hidden-text > span:nth-child(8) {\n  transition-delay: 0.16s;\n}\n.faq-item .content .hidden-text > span:nth-child(9) {\n  transition-delay: 0.18s;\n}\n.faq-item .content .hidden-text > span:nth-child(10) {\n  transition-delay: 0.2s;\n}\n.faq-item .content .hidden-text > span:nth-child(11) {\n  transition-delay: 0.22s;\n}\n.faq-item .content .hidden-text > span:nth-child(12) {\n  transition-delay: 0.24s;\n}\n.faq-item .content .hidden-text > span:nth-child(13) {\n  transition-delay: 0.26s;\n}\n.faq-item .content .hidden-text > span:nth-child(14) {\n  transition-delay: 0.28s;\n}\n.faq-item .content .hidden-text > span:nth-child(15) {\n  transition-delay: 0.3s;\n}\n.faq-item .content .hidden-text > span:nth-child(16) {\n  transition-delay: 0.32s;\n}\n.faq-item .content .hidden-text > span:nth-child(17) {\n  transition-delay: 0.34s;\n}\n.faq-item .content .hidden-text > span:nth-child(18) {\n  transition-delay: 0.36s;\n}\n.faq-item .content .hidden-text > span:nth-child(19) {\n  transition-delay: 0.38s;\n}\n.faq-item .content .hidden-text > span:nth-child(20) {\n  transition-delay: 0.4s;\n}\n.faq-item .content .hidden-text > span:nth-child(21) {\n  transition-delay: 0.42s;\n}\n.faq-item .content .hidden-text > span:nth-child(22) {\n  transition-delay: 0.44s;\n}\n.faq-item .content .hidden-text > span:nth-child(23) {\n  transition-delay: 0.46s;\n}\n.faq-item .content .hidden-text > span:nth-child(24) {\n  transition-delay: 0.48s;\n}\n.faq-item .content .hidden-text > span:nth-child(25) {\n  transition-delay: 0.5s;\n}\n.faq-item .content .hidden-text > span:nth-child(26) {\n  transition-delay: 0.52s;\n}\n.faq-item .content .hidden-text > span:nth-child(27) {\n  transition-delay: 0.54s;\n}\n.faq-item .content .hidden-text > span:nth-child(28) {\n  transition-delay: 0.56s;\n}\n.faq-item .content .hidden-text > span:nth-child(29) {\n  transition-delay: 0.58s;\n}\n.faq-item .content .hidden-text > span:nth-child(30) {\n  transition-delay: 0.6s;\n}\n.faq-item .content .hidden-text > span:nth-child(31) {\n  transition-delay: 0.62s;\n}\n.faq-item .content .hidden-text > span:nth-child(32) {\n  transition-delay: 0.64s;\n}\n.faq-item .content .hidden-text > span:nth-child(33) {\n  transition-delay: 0.66s;\n}\n.faq-item .content .hidden-text > span:nth-child(34) {\n  transition-delay: 0.68s;\n}\n.faq-item .content .hidden-text > span:nth-child(35) {\n  transition-delay: 0.7s;\n}\n.faq-item .content .hidden-text > span:nth-child(36) {\n  transition-delay: 0.72s;\n}\n.faq-item .content .hidden-text > span:nth-child(37) {\n  transition-delay: 0.74s;\n}\n.faq-item .content .hidden-text > span:nth-child(38) {\n  transition-delay: 0.76s;\n}\n.faq-item .content .hidden-text > span:nth-child(39) {\n  transition-delay: 0.78s;\n}\n.faq-item .content .hidden-text > span:nth-child(40) {\n  transition-delay: 0.8s;\n}\n.faq-item .content .hidden-text > span:nth-child(41) {\n  transition-delay: 0.82s;\n}\n.faq-item .content .hidden-text > span:nth-child(42) {\n  transition-delay: 0.84s;\n}\n.faq-item .content .hidden-text > span:nth-child(43) {\n  transition-delay: 0.86s;\n}\n.faq-item .content .hidden-text > span:nth-child(44) {\n  transition-delay: 0.88s;\n}\n.faq-item .content .hidden-text > span:nth-child(45) {\n  transition-delay: 0.9s;\n}\n.faq-item .content .hidden-text > span:nth-child(46) {\n  transition-delay: 0.92s;\n}\n.faq-item .content .hidden-text > span:nth-child(47) {\n  transition-delay: 0.94s;\n}\n.faq-item .content .hidden-text > span:nth-child(48) {\n  transition-delay: 0.96s;\n}\n.faq-item .content .hidden-text > span:nth-child(49) {\n  transition-delay: 0.98s;\n}\n.faq-item .content .hidden-text > span:nth-child(50) {\n  transition-delay: 1s;\n}\n.faq-item .content .hidden-text > span:nth-child(51) {\n  transition-delay: 1.02s;\n}\n.faq-item .content .hidden-text > span:nth-child(52) {\n  transition-delay: 1.04s;\n}\n.faq-item .content .hidden-text > span:nth-child(53) {\n  transition-delay: 1.06s;\n}\n.faq-item .content .hidden-text > span:nth-child(54) {\n  transition-delay: 1.08s;\n}\n.faq-item .content .hidden-text > span:nth-child(55) {\n  transition-delay: 1.1s;\n}\n.faq-item .content .hidden-text > span:nth-child(56) {\n  transition-delay: 1.12s;\n}\n.faq-item .content .hidden-text > span:nth-child(57) {\n  transition-delay: 1.14s;\n}\n.faq-item .content .hidden-text > span:nth-child(58) {\n  transition-delay: 1.16s;\n}\n.faq-item .content .hidden-text > span:nth-child(59) {\n  transition-delay: 1.18s;\n}\n.faq-item .content .hidden-text > span:nth-child(60) {\n  transition-delay: 1.2s;\n}\n.faq-item .content .hidden-text > span:nth-child(61) {\n  transition-delay: 1.22s;\n}\n.faq-item .content .hidden-text > span:nth-child(62) {\n  transition-delay: 1.24s;\n}\n.faq-item .content .hidden-text > span:nth-child(63) {\n  transition-delay: 1.26s;\n}\n.faq-item .content .hidden-text > span:nth-child(64) {\n  transition-delay: 1.28s;\n}\n.faq-item .content .hidden-text > span:nth-child(65) {\n  transition-delay: 1.3s;\n}\n.faq-item .content .hidden-text > span:nth-child(66) {\n  transition-delay: 1.32s;\n}\n.faq-item .content .hidden-text > span:nth-child(67) {\n  transition-delay: 1.34s;\n}\n.faq-item .content .hidden-text > span:nth-child(68) {\n  transition-delay: 1.36s;\n}\n.faq-item .content .hidden-text > span:nth-child(69) {\n  transition-delay: 1.38s;\n}\n.faq-item .content .hidden-text > span:nth-child(70) {\n  transition-delay: 1.4s;\n}\n.faq-item .content .hidden-text > span:nth-child(71) {\n  transition-delay: 1.42s;\n}\n.faq-item .content .hidden-text > span:nth-child(72) {\n  transition-delay: 1.44s;\n}\n.faq-item .content .hidden-text > span:nth-child(73) {\n  transition-delay: 1.46s;\n}\n.faq-item .content .hidden-text > span:nth-child(74) {\n  transition-delay: 1.48s;\n}\n.faq-item .content .hidden-text > span:nth-child(75) {\n  transition-delay: 1.5s;\n}\n.faq-item .content .hidden-text > span:nth-child(76) {\n  transition-delay: 1.52s;\n}\n.faq-item .content .hidden-text > span:nth-child(77) {\n  transition-delay: 1.54s;\n}\n.faq-item .content .hidden-text > span:nth-child(78) {\n  transition-delay: 1.56s;\n}\n.faq-item .content .hidden-text > span:nth-child(79) {\n  transition-delay: 1.58s;\n}\n.faq-item .content .hidden-text > span:nth-child(80) {\n  transition-delay: 1.6s;\n}\n.faq-item .content .hidden-text > span:nth-child(81) {\n  transition-delay: 1.62s;\n}\n.faq-item .content .hidden-text > span:nth-child(82) {\n  transition-delay: 1.64s;\n}\n.faq-item .content .hidden-text > span:nth-child(83) {\n  transition-delay: 1.66s;\n}\n.faq-item .content .hidden-text > span:nth-child(84) {\n  transition-delay: 1.68s;\n}\n.faq-item .content .hidden-text > span:nth-child(85) {\n  transition-delay: 1.7s;\n}\n.faq-item .content .hidden-text > span:nth-child(86) {\n  transition-delay: 1.72s;\n}\n.faq-item .content .hidden-text > span:nth-child(87) {\n  transition-delay: 1.74s;\n}\n.faq-item .content .hidden-text > span:nth-child(88) {\n  transition-delay: 1.76s;\n}\n.faq-item .content .hidden-text > span:nth-child(89) {\n  transition-delay: 1.78s;\n}\n.faq-item .content .hidden-text > span:nth-child(90) {\n  transition-delay: 1.8s;\n}\n.faq-item .content .hidden-text > span:nth-child(91) {\n  transition-delay: 1.82s;\n}\n.faq-item .content .hidden-text > span:nth-child(92) {\n  transition-delay: 1.84s;\n}\n.faq-item .content .hidden-text > span:nth-child(93) {\n  transition-delay: 1.86s;\n}\n.faq-item .content .hidden-text > span:nth-child(94) {\n  transition-delay: 1.88s;\n}\n.faq-item .content .hidden-text > span:nth-child(95) {\n  transition-delay: 1.9s;\n}\n.faq-item .content .hidden-text > span:nth-child(96) {\n  transition-delay: 1.92s;\n}\n.faq-item .content .hidden-text > span:nth-child(97) {\n  transition-delay: 1.94s;\n}\n.faq-item .content .hidden-text > span:nth-child(98) {\n  transition-delay: 1.96s;\n}\n.faq-item .content .hidden-text > span:nth-child(99) {\n  transition-delay: 1.98s;\n}\n.faq-item .content .hidden-text > span:nth-child(100) {\n  transition-delay: 2s;\n}\n.faq-item .content .hidden-text > span:nth-child(101) {\n  transition-delay: 2.02s;\n}\n.faq-item .content .hidden-text > span:nth-child(102) {\n  transition-delay: 2.04s;\n}\n.faq-item .content .hidden-text > span:nth-child(103) {\n  transition-delay: 2.06s;\n}\n.faq-item .content .hidden-text > span:nth-child(104) {\n  transition-delay: 2.08s;\n}\n.faq-item .content .hidden-text > span:nth-child(105) {\n  transition-delay: 2.1s;\n}\n.faq-item .content .hidden-text > span:nth-child(106) {\n  transition-delay: 2.12s;\n}\n.faq-item .content .hidden-text > span:nth-child(107) {\n  transition-delay: 2.14s;\n}\n.faq-item .content .hidden-text > span:nth-child(108) {\n  transition-delay: 2.16s;\n}\n.faq-item .content .hidden-text > span:nth-child(109) {\n  transition-delay: 2.18s;\n}\n.faq-item .content .hidden-text > span:nth-child(110) {\n  transition-delay: 2.2s;\n}\n.faq-item .content .hidden-text > span:nth-child(111) {\n  transition-delay: 2.22s;\n}\n.faq-item .content .hidden-text > span:nth-child(112) {\n  transition-delay: 2.24s;\n}\n.faq-item .content .hidden-text > span:nth-child(113) {\n  transition-delay: 2.26s;\n}\n.faq-item .content .hidden-text > span:nth-child(114) {\n  transition-delay: 2.28s;\n}\n.faq-item .content .hidden-text > span:nth-child(115) {\n  transition-delay: 2.3s;\n}\n.faq-item .content .hidden-text > span:nth-child(116) {\n  transition-delay: 2.32s;\n}\n.faq-item .content .hidden-text > span:nth-child(117) {\n  transition-delay: 2.34s;\n}\n.faq-item .content .hidden-text > span:nth-child(118) {\n  transition-delay: 2.36s;\n}\n.faq-item .content .hidden-text > span:nth-child(119) {\n  transition-delay: 2.38s;\n}\n.faq-item .content .hidden-text > span:nth-child(120) {\n  transition-delay: 2.4s;\n}\n.faq-item .content .hidden-text > span:nth-child(121) {\n  transition-delay: 2.42s;\n}\n.faq-item .content .hidden-text > span:nth-child(122) {\n  transition-delay: 2.44s;\n}\n.faq-item .content .hidden-text > span:nth-child(123) {\n  transition-delay: 2.46s;\n}\n.faq-item .content .hidden-text > span:nth-child(124) {\n  transition-delay: 2.48s;\n}\n.faq-item .content .hidden-text > span:nth-child(125) {\n  transition-delay: 2.5s;\n}\n.faq-item .content .hidden-text > span:nth-child(126) {\n  transition-delay: 2.52s;\n}\n.faq-item .content .hidden-text > span:nth-child(127) {\n  transition-delay: 2.54s;\n}\n.faq-item .content .hidden-text > span:nth-child(128) {\n  transition-delay: 2.56s;\n}\n.faq-item .content .hidden-text > span:nth-child(129) {\n  transition-delay: 2.58s;\n}\n.faq-item .content .hidden-text > span:nth-child(130) {\n  transition-delay: 2.6s;\n}\n.faq-item .content .hidden-text > span:nth-child(131) {\n  transition-delay: 2.62s;\n}\n.faq-item .content .hidden-text > span:nth-child(132) {\n  transition-delay: 2.64s;\n}\n.faq-item .content .hidden-text > span:nth-child(133) {\n  transition-delay: 2.66s;\n}\n.faq-item .content .hidden-text > span:nth-child(134) {\n  transition-delay: 2.68s;\n}\n.faq-item .content .hidden-text > span:nth-child(135) {\n  transition-delay: 2.7s;\n}\n.faq-item .content .hidden-text > span:nth-child(136) {\n  transition-delay: 2.72s;\n}\n.faq-item .content .hidden-text > span:nth-child(137) {\n  transition-delay: 2.74s;\n}\n.faq-item .content .hidden-text > span:nth-child(138) {\n  transition-delay: 2.76s;\n}\n.faq-item .content .hidden-text > span:nth-child(139) {\n  transition-delay: 2.78s;\n}\n.faq-item .content .hidden-text > span:nth-child(140) {\n  transition-delay: 2.8s;\n}\n.faq-item .content .hidden-text > span:nth-child(141) {\n  transition-delay: 2.82s;\n}\n.faq-item .content .hidden-text > span:nth-child(142) {\n  transition-delay: 2.84s;\n}\n.faq-item .content .hidden-text > span:nth-child(143) {\n  transition-delay: 2.86s;\n}\n.faq-item .content .hidden-text > span:nth-child(144) {\n  transition-delay: 2.88s;\n}\n.faq-item .content .hidden-text > span:nth-child(145) {\n  transition-delay: 2.9s;\n}\n.faq-item .content .hidden-text > span:nth-child(146) {\n  transition-delay: 2.92s;\n}\n.faq-item .content .hidden-text > span:nth-child(147) {\n  transition-delay: 2.94s;\n}\n.faq-item .content .hidden-text > span:nth-child(148) {\n  transition-delay: 2.96s;\n}\n.faq-item .content .hidden-text > span:nth-child(149) {\n  transition-delay: 2.98s;\n}\n.faq-item .content .hidden-text > span:nth-child(150) {\n  transition-delay: 3s;\n}\n.faq-item .content .hidden-text > span:nth-child(151) {\n  transition-delay: 3.02s;\n}\n.faq-item .content .hidden-text > span:nth-child(152) {\n  transition-delay: 3.04s;\n}\n.faq-item .content .hidden-text > span:nth-child(153) {\n  transition-delay: 3.06s;\n}\n.faq-item .content .hidden-text > span:nth-child(154) {\n  transition-delay: 3.08s;\n}\n.faq-item .content .hidden-text > span:nth-child(155) {\n  transition-delay: 3.1s;\n}\n.faq-item .content .hidden-text > span:nth-child(156) {\n  transition-delay: 3.12s;\n}\n.faq-item .content .hidden-text > span:nth-child(157) {\n  transition-delay: 3.14s;\n}\n.faq-item .content .hidden-text > span:nth-child(158) {\n  transition-delay: 3.16s;\n}\n.faq-item .content .hidden-text > span:nth-child(159) {\n  transition-delay: 3.18s;\n}\n.faq-item .content .hidden-text > span:nth-child(160) {\n  transition-delay: 3.2s;\n}\n.faq-item .content .hidden-text > span:nth-child(161) {\n  transition-delay: 3.22s;\n}\n.faq-item .content .hidden-text > span:nth-child(162) {\n  transition-delay: 3.24s;\n}\n.faq-item .content .hidden-text > span:nth-child(163) {\n  transition-delay: 3.26s;\n}\n.faq-item .content .hidden-text > span:nth-child(164) {\n  transition-delay: 3.28s;\n}\n.faq-item .content .hidden-text > span:nth-child(165) {\n  transition-delay: 3.3s;\n}\n.faq-item .content .hidden-text > span:nth-child(166) {\n  transition-delay: 3.32s;\n}\n.faq-item .content .hidden-text > span:nth-child(167) {\n  transition-delay: 3.34s;\n}\n.faq-item .content .hidden-text > span:nth-child(168) {\n  transition-delay: 3.36s;\n}\n.faq-item .content .hidden-text > span:nth-child(169) {\n  transition-delay: 3.38s;\n}\n.faq-item .content .hidden-text > span:nth-child(170) {\n  transition-delay: 3.4s;\n}\n.faq-item .content .hidden-text > span:nth-child(171) {\n  transition-delay: 3.42s;\n}\n.faq-item .content .hidden-text > span:nth-child(172) {\n  transition-delay: 3.44s;\n}\n.faq-item .content .hidden-text > span:nth-child(173) {\n  transition-delay: 3.46s;\n}\n.faq-item .content .hidden-text > span:nth-child(174) {\n  transition-delay: 3.48s;\n}\n.faq-item .content .hidden-text > span:nth-child(175) {\n  transition-delay: 3.5s;\n}\n.faq-item .content .hidden-text > span:nth-child(176) {\n  transition-delay: 3.52s;\n}\n.faq-item .content .hidden-text > span:nth-child(177) {\n  transition-delay: 3.54s;\n}\n.faq-item .content .hidden-text > span:nth-child(178) {\n  transition-delay: 3.56s;\n}\n.faq-item .content .hidden-text > span:nth-child(179) {\n  transition-delay: 3.58s;\n}\n.faq-item .content .hidden-text > span:nth-child(180) {\n  transition-delay: 3.6s;\n}\n.faq-item .content .hidden-text > span:nth-child(181) {\n  transition-delay: 3.62s;\n}\n.faq-item .content .hidden-text > span:nth-child(182) {\n  transition-delay: 3.64s;\n}\n.faq-item .content .hidden-text > span:nth-child(183) {\n  transition-delay: 3.66s;\n}\n.faq-item .content .hidden-text > span:nth-child(184) {\n  transition-delay: 3.68s;\n}\n.faq-item .content .hidden-text > span:nth-child(185) {\n  transition-delay: 3.7s;\n}\n.faq-item .content .hidden-text > span:nth-child(186) {\n  transition-delay: 3.72s;\n}\n.faq-item .content .hidden-text > span:nth-child(187) {\n  transition-delay: 3.74s;\n}\n.faq-item .content .hidden-text > span:nth-child(188) {\n  transition-delay: 3.76s;\n}\n.faq-item .content .hidden-text > span:nth-child(189) {\n  transition-delay: 3.78s;\n}\n.faq-item .content .hidden-text > span:nth-child(190) {\n  transition-delay: 3.8s;\n}\n.faq-item .content .hidden-text > span:nth-child(191) {\n  transition-delay: 3.82s;\n}\n.faq-item .content .hidden-text > span:nth-child(192) {\n  transition-delay: 3.84s;\n}\n.faq-item .content .hidden-text > span:nth-child(193) {\n  transition-delay: 3.86s;\n}\n.faq-item .content .hidden-text > span:nth-child(194) {\n  transition-delay: 3.88s;\n}\n.faq-item .content .hidden-text > span:nth-child(195) {\n  transition-delay: 3.9s;\n}\n.faq-item .content .hidden-text > span:nth-child(196) {\n  transition-delay: 3.92s;\n}\n.faq-item .content .hidden-text > span:nth-child(197) {\n  transition-delay: 3.94s;\n}\n.faq-item .content .hidden-text > span:nth-child(198) {\n  transition-delay: 3.96s;\n}\n.faq-item .content .hidden-text > span:nth-child(199) {\n  transition-delay: 3.98s;\n}\n.faq-item .content .hidden-text > span:nth-child(200) {\n  transition-delay: 4s;\n}\n.faq-item .content .hidden-text > span:nth-child(201) {\n  transition-delay: 4.02s;\n}\n.faq-item .content .hidden-text > span:nth-child(202) {\n  transition-delay: 4.04s;\n}\n.faq-item .content .hidden-text > span:nth-child(203) {\n  transition-delay: 4.06s;\n}\n.faq-item .content .hidden-text > span:nth-child(204) {\n  transition-delay: 4.08s;\n}\n.faq-item .content .hidden-text > span:nth-child(205) {\n  transition-delay: 4.1s;\n}\n.faq-item .content .hidden-text > span:nth-child(206) {\n  transition-delay: 4.12s;\n}\n.faq-item .content .hidden-text > span:nth-child(207) {\n  transition-delay: 4.14s;\n}\n.faq-item .content .hidden-text > span:nth-child(208) {\n  transition-delay: 4.16s;\n}\n.faq-item .content .hidden-text > span:nth-child(209) {\n  transition-delay: 4.18s;\n}\n.faq-item .content .hidden-text > span:nth-child(210) {\n  transition-delay: 4.2s;\n}\n.faq-item .content .hidden-text > span:nth-child(211) {\n  transition-delay: 4.22s;\n}\n.faq-item .content .hidden-text > span:nth-child(212) {\n  transition-delay: 4.24s;\n}\n.faq-item .content .hidden-text > span:nth-child(213) {\n  transition-delay: 4.26s;\n}\n.faq-item .content .hidden-text > span:nth-child(214) {\n  transition-delay: 4.28s;\n}\n.faq-item .content .hidden-text > span:nth-child(215) {\n  transition-delay: 4.3s;\n}\n.faq-item .content .hidden-text > span:nth-child(216) {\n  transition-delay: 4.32s;\n}\n.faq-item .content .hidden-text > span:nth-child(217) {\n  transition-delay: 4.34s;\n}\n.faq-item .content .hidden-text > span:nth-child(218) {\n  transition-delay: 4.36s;\n}\n.faq-item .content .hidden-text > span:nth-child(219) {\n  transition-delay: 4.38s;\n}\n.faq-item .content .hidden-text > span:nth-child(220) {\n  transition-delay: 4.4s;\n}\n.faq-item .content .hidden-text > span:nth-child(221) {\n  transition-delay: 4.42s;\n}\n.faq-item .content .hidden-text > span:nth-child(222) {\n  transition-delay: 4.44s;\n}\n.faq-item .content .hidden-text > span:nth-child(223) {\n  transition-delay: 4.46s;\n}\n.faq-item .content .hidden-text > span:nth-child(224) {\n  transition-delay: 4.48s;\n}\n.faq-item .content .hidden-text > span:nth-child(225) {\n  transition-delay: 4.5s;\n}\n.faq-item .content .hidden-text > span:nth-child(226) {\n  transition-delay: 4.52s;\n}\n.faq-item .content .hidden-text > span:nth-child(227) {\n  transition-delay: 4.54s;\n}\n.faq-item .content .hidden-text > span:nth-child(228) {\n  transition-delay: 4.56s;\n}\n.faq-item .content .hidden-text > span:nth-child(229) {\n  transition-delay: 4.58s;\n}\n.faq-item .content .hidden-text > span:nth-child(230) {\n  transition-delay: 4.6s;\n}\n.faq-item .content .hidden-text > span:nth-child(231) {\n  transition-delay: 4.62s;\n}\n.faq-item .content .hidden-text > span:nth-child(232) {\n  transition-delay: 4.64s;\n}\n.faq-item .content .hidden-text > span:nth-child(233) {\n  transition-delay: 4.66s;\n}\n.faq-item .content .hidden-text > span:nth-child(234) {\n  transition-delay: 4.68s;\n}\n.faq-item .content .hidden-text > span:nth-child(235) {\n  transition-delay: 4.7s;\n}\n.faq-item .content .hidden-text > span:nth-child(236) {\n  transition-delay: 4.72s;\n}\n.faq-item .content .hidden-text > span:nth-child(237) {\n  transition-delay: 4.74s;\n}\n.faq-item .content .hidden-text > span:nth-child(238) {\n  transition-delay: 4.76s;\n}\n.faq-item .content .hidden-text > span:nth-child(239) {\n  transition-delay: 4.78s;\n}\n.faq-item .content .hidden-text > span:nth-child(240) {\n  transition-delay: 4.8s;\n}\n.faq-item .content .hidden-text > span:nth-child(241) {\n  transition-delay: 4.82s;\n}\n.faq-item .content .hidden-text > span:nth-child(242) {\n  transition-delay: 4.84s;\n}\n.faq-item .content .hidden-text > span:nth-child(243) {\n  transition-delay: 4.86s;\n}\n.faq-item .content .hidden-text > span:nth-child(244) {\n  transition-delay: 4.88s;\n}\n.faq-item .content .hidden-text > span:nth-child(245) {\n  transition-delay: 4.9s;\n}\n.faq-item .content .hidden-text > span:nth-child(246) {\n  transition-delay: 4.92s;\n}\n.faq-item .content .hidden-text > span:nth-child(247) {\n  transition-delay: 4.94s;\n}\n.faq-item .content .hidden-text > span:nth-child(248) {\n  transition-delay: 4.96s;\n}\n.faq-item .content .hidden-text > span:nth-child(249) {\n  transition-delay: 4.98s;\n}\n.faq-item .content .hidden-text > span:nth-child(250) {\n  transition-delay: 5s;\n}\n.faq-item .content .hidden-text > span:nth-child(251) {\n  transition-delay: 5.02s;\n}\n.faq-item .content .hidden-text > span:nth-child(252) {\n  transition-delay: 5.04s;\n}\n.faq-item .content .hidden-text > span:nth-child(253) {\n  transition-delay: 5.06s;\n}\n.faq-item .content .hidden-text > span:nth-child(254) {\n  transition-delay: 5.08s;\n}\n.faq-item .content .hidden-text > span:nth-child(255) {\n  transition-delay: 5.1s;\n}\n.faq-item .arrow {\n  transform: rotate(0deg);\n  opacity: 0.7;\n  transition: all 0.37s;\n  margin-top: var(--faq-item-icon-margin-top);\n}\n.faq-item .close {\n  width: 0px;\n  height: 0px;\n  overflow: none;\n  transition: all 0.37s;\n  opacity: 0;\n  position: absolute;\n  right: 2%;\n  margin-top: var(--faq-item-icon-margin-top);\n}\n.faq-item.toggle .content .title {\n  opacity: 1;\n  font-weight: 800;\n}\n.faq-item.toggle .content .hidden-text {\n  overflow: visible;\n  max-height: 500px;\n  height: 100%;\n  opacity: 1;\n  opacity: 1;\n}\n.faq-item.toggle .content .hidden-text > span > span {\n  transform: translateY(0);\n}\n.faq-item.toggle .arrow {\n  transform: rotate(180deg);\n  opacity: 1;\n}\n.faq-item.toggle .close {\n  display: block;\n  width: 12px;\n  height: 12px;\n  overflow: visible;\n  opacity: 1;\n}";
styleInject(css_248z$1);

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}

/**
 * Returns the embedding frame element, if any.
 * @param {!Document} doc
 * @return {!Element}
 */
function getFrameElement(doc) {
  try {
    return doc.defaultView && doc.defaultView.frameElement || null;
  } catch (e) {
    // Ignore the error.
    return null;
  }
}

/**
 * A local reference to the root document.
 */
var document = (function(startDoc) {
  var doc = startDoc;
  var frame = getFrameElement(doc);
  while (frame) {
    doc = frame.ownerDocument;
    frame = getFrameElement(doc);
  }
  return doc;
})(window.document);

/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];

/**
 * The signal updater for cross-origin intersection. When not null, it means
 * that the polyfill is configured to work in a cross-origin mode.
 * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */
var crossOriginUpdater = null;

/**
 * The current cross-origin intersection. Only used in the cross-origin mode.
 * @type {DOMRect|ClientRect}
 */
var crossOriginRect = null;


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = ensureDOMRect(entry.rootBounds);
  this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
  this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (
    options.root &&
    options.root.nodeType != 1 &&
    options.root.nodeType != 9
  ) {
    throw new Error('root must be a Document or Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');

  /** @private @const {!Array<!Document>} */
  this._monitoringDocuments = [];
  /** @private @const {!Array<function()>} */
  this._monitoringUnsubscribes = [];
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Sets up the polyfill in the cross-origin mode. The result is the
 * updater function that accepts two arguments: `boundingClientRect` and
 * `intersectionRect` - just as these fields would be available to the
 * parent via `IntersectionObserverEntry`. This function should be called
 * each time the iframe receives intersection information from the parent
 * window, e.g. via messaging.
 * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */
IntersectionObserver._setupCrossOriginUpdater = function() {
  if (!crossOriginUpdater) {
    /**
     * @param {DOMRect|ClientRect} boundingClientRect
     * @param {DOMRect|ClientRect} intersectionRect
     */
    crossOriginUpdater = function(boundingClientRect, intersectionRect) {
      if (!boundingClientRect || !intersectionRect) {
        crossOriginRect = getEmptyRect();
      } else {
        crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
      }
      registry.forEach(function(observer) {
        observer._checkForIntersections();
      });
    };
  }
  return crossOriginUpdater;
};


/**
 * Resets the cross-origin mode.
 */
IntersectionObserver._resetCrossOriginUpdater = function() {
  crossOriginUpdater = null;
  crossOriginRect = null;
};


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections(target.ownerDocument);
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {
        return item.element != target;
      });
  this._unmonitorIntersections(target.ownerDocument);
  if (this._observationTargets.length == 0) {
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorAllIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function(doc) {
  var win = doc.defaultView;
  if (!win) {
    // Already destroyed.
    return;
  }
  if (this._monitoringDocuments.indexOf(doc) != -1) {
    // Already monitoring.
    return;
  }

  // Private state for monitoring.
  var callback = this._checkForIntersections;
  var monitoringInterval = null;
  var domObserver = null;

  // If a poll interval is set, use polling instead of listening to
  // resize and scroll events or DOM mutations.
  if (this.POLL_INTERVAL) {
    monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
  } else {
    addEvent(win, 'resize', callback, true);
    addEvent(doc, 'scroll', callback, true);
    if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
      domObserver = new win.MutationObserver(callback);
      domObserver.observe(doc, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  }

  this._monitoringDocuments.push(doc);
  this._monitoringUnsubscribes.push(function() {
    // Get the window object again. When a friendly iframe is destroyed, it
    // will be null.
    var win = doc.defaultView;

    if (win) {
      if (monitoringInterval) {
        win.clearInterval(monitoringInterval);
      }
      removeEvent(win, 'resize', callback, true);
    }

    removeEvent(doc, 'scroll', callback, true);
    if (domObserver) {
      domObserver.disconnect();
    }
  });

  // Also monitor the parent.
  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;
  if (doc != rootDoc) {
    var frame = getFrameElement(doc);
    if (frame) {
      this._monitorIntersections(frame.ownerDocument);
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
  var index = this._monitoringDocuments.indexOf(doc);
  if (index == -1) {
    return;
  }

  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;

  // Check if any dependent targets are still remaining.
  var hasDependentTargets =
      this._observationTargets.some(function(item) {
        var itemDoc = item.element.ownerDocument;
        // Target is in this context.
        if (itemDoc == doc) {
          return true;
        }
        // Target is nested in this context.
        while (itemDoc && itemDoc != rootDoc) {
          var frame = getFrameElement(itemDoc);
          itemDoc = frame && frame.ownerDocument;
          if (itemDoc == doc) {
            return true;
          }
        }
        return false;
      });
  if (hasDependentTargets) {
    return;
  }

  // Unsubscribe.
  var unsubscribe = this._monitoringUnsubscribes[index];
  this._monitoringDocuments.splice(index, 1);
  this._monitoringUnsubscribes.splice(index, 1);
  unsubscribe();

  // Also unmonitor the parent.
  if (doc != rootDoc) {
    var frame = getFrameElement(doc);
    if (frame) {
      this._unmonitorIntersections(frame.ownerDocument);
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._unmonitorAllIntersections = function() {
  var unsubscribes = this._monitoringUnsubscribes.slice(0);
  this._monitoringDocuments.length = 0;
  this._monitoringUnsubscribes.length = 0;
  for (var i = 0; i < unsubscribes.length; i++) {
    unsubscribes[i]();
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  if (!this.root && crossOriginUpdater && !crossOriginRect) {
    // Cross origin monitoring, but no initial data available yet.
    return;
  }

  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, targetRect, rootRect);

    var rootBounds = null;
    if (!this._rootContainsTarget(target)) {
      rootBounds = getEmptyRect();
    } else if (!crossOriginUpdater || this.root) {
      rootBounds = rootRect;
    }

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootBounds,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} targetRect The bounding rect of the target.
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, targetRect, rootRect) {
  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot && parent) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return null;

    if (parent == this.root || parent.nodeType == /* DOCUMENT */ 9) {
      atRoot = true;
      if (parent == this.root || parent == document) {
        if (crossOriginUpdater && !this.root) {
          if (!crossOriginRect ||
              crossOriginRect.width == 0 && crossOriginRect.height == 0) {
            // A 0-size cross-origin intersection means no-intersection.
            parent = null;
            parentRect = null;
            intersectionRect = null;
          } else {
            parentRect = crossOriginRect;
          }
        } else {
          parentRect = rootRect;
        }
      } else {
        // Check if there's a frame that can be navigated to.
        var frame = getParentNode(parent);
        var frameRect = frame && getBoundingClientRect(frame);
        var frameIntersect =
            frame &&
            this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
        if (frameRect && frameIntersect) {
          parent = frame;
          parentRect = convertFromParentRect(frameRect, frameIntersect);
        } else {
          parent = null;
          intersectionRect = null;
        }
      }
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      var doc = parent.ownerDocument;
      if (parent != doc.body &&
          parent != doc.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);
    }
    if (!intersectionRect) break;
    parent = parent && getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {ClientRect} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root && !isDoc(this.root)) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var doc = isDoc(this.root) ? this.root : document;
    var html = doc.documentElement;
    var body = doc.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {DOMRect|ClientRect} rect The rect object to expand.
 * @return {ClientRect} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;
  return (
    containsDeep(rootDoc, target) &&
    (!this.root || rootDoc == target.ownerDocument)
  );
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detachEvent == 'function') {
    node.detachEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object|?ClientRect} The intersection rect or undefined if no
 *     intersection is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  } || null;
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {ClientRect} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}


/**
 * Ensure that the result has all of the necessary fields of the DOMRect.
 * Specifically this ensures that `x` and `y` fields are set.
 *
 * @param {?DOMRect|?ClientRect} rect
 * @return {?DOMRect}
 */
function ensureDOMRect(rect) {
  // A `DOMRect` object has `x` and `y` fields.
  if (!rect || 'x' in rect) {
    return rect;
  }
  // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
  // for internally calculated Rect objects. For the purposes of
  // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
  // for these fields.
  return {
    top: rect.top,
    y: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    right: rect.right,
    width: rect.width,
    height: rect.height
  };
}


/**
 * Inverts the intersection and bounding rect from the parent (frame) BCR to
 * the local BCR space.
 * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
 * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
 * @return {ClientRect} The local root bounding rect for the parent's children.
 */
function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
  var top = parentIntersectionRect.top - parentBoundingRect.top;
  var left = parentIntersectionRect.left - parentBoundingRect.left;
  return {
    top: top,
    left: left,
    height: parentIntersectionRect.height,
    width: parentIntersectionRect.width,
    bottom: top + parentIntersectionRect.height,
    right: left + parentIntersectionRect.width
  };
}


/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (node.nodeType == /* DOCUMENT */ 9 && node != document) {
    // If this node is a document node, look for the embedding frame.
    return getFrameElement(node);
  }

  // If the parent has element that is assigned through shadow root slot
  if (parent && parent.assignedSlot) {
    parent = parent.assignedSlot.parentNode;
  }

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  return parent;
}

/**
 * Returns true if `node` is a Document.
 * @param {!Node} node
 * @returns {boolean}
 */
function isDoc(node) {
  return node && node.nodeType === 9;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

function FAQ_item(props) {
    var _a = React__default["default"].useState(false), toggle = _a[0], setToggle = _a[1];
    var _b = React.useState([]), titles = _b[0], setTitles = _b[1];
    React.useEffect(function () {
        var titles = document.querySelectorAll('.animated-title');
        setTitles(Array.from(titles));
    }, []);
    var breakTextIntoWords = function (text) {
        var words = (text.innerText || '').trim().split(' ');
        text.innerText = '';
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            var span1 = document.createElement('span');
            var span2 = document.createElement('span');
            span1.innerText = "".concat(word);
            span2.append(span1);
            text.append(span2);
            text.append(' ');
        }
    };
    var addAnimatedTitleObserver = function () {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                }
            });
        });
        for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
            var title = titles_1[_i];
            observer.observe(title);
        }
    };
    var initializeAnimatedTitle = function () {
        for (var _i = 0, titles_2 = titles; _i < titles_2.length; _i++) {
            var title = titles_2[_i];
            breakTextIntoWords(title);
        }
    };
    React.useEffect(function () {
        if (titles.length > 0) {
            initializeAnimatedTitle();
            addAnimatedTitleObserver();
        }
    }, [titles]);
    var toggleFaq = function () {
        setToggle(function (prevToggle) { return !prevToggle; });
    };
    return (React__default["default"].createElement("div", { className: "faq-item ".concat(toggle ? 'toggle' : ''), onClick: toggleFaq },
        React__default["default"].createElement("div", { className: "content" },
            React__default["default"].createElement("div", { className: "title" }, props.title),
            React__default["default"].createElement("div", { className: "hidden-text animated-title" }, props.description)),
        React__default["default"].createElement("div", { className: "arrow" }, props.arrow),
        React__default["default"].createElement("div", { className: "close" }, props.close)));
}

var css_248z = "h1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --animated-title-transition-duration: 1s;\n  --animated-title-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n.animated-title {\n  opacity: 0;\n}\n.animated-title span {\n  display: inline-block;\n}\n.animated-title > span {\n  overflow: hidden;\n  transition-duration: var(--animated-title-transition-duration);\n  transition-timing-function: var(--animated-title-transition-timing-function);\n}\n.animated-title > span > span {\n  position: relative;\n  transform: translateY(100%);\n  transition: inherit;\n}\n.animated-title > span:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.animated-title > span:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.animated-title > span:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.animated-title > span:nth-child(5) {\n  transition-delay: 0.25s;\n}\n.animated-title > span:nth-child(6) {\n  transition-delay: 0.3s;\n}\n.animated-title > span:nth-child(7) {\n  transition-delay: 0.35s;\n}\n.animated-title > span:nth-child(8) {\n  transition-delay: 0.4s;\n}\n.animated-title > span:nth-child(9) {\n  transition-delay: 0.45s;\n}\n.animated-title > span:nth-child(10) {\n  transition-delay: 0.5s;\n}\n.animated-title > span:nth-child(11) {\n  transition-delay: 0.55s;\n}\n.animated-title > span:nth-child(12) {\n  transition-delay: 0.6s;\n}\n.animated-title > span:nth-child(13) {\n  transition-delay: 0.65s;\n}\n.animated-title > span:nth-child(14) {\n  transition-delay: 0.7s;\n}\n.animated-title > span:nth-child(15) {\n  transition-delay: 0.75s;\n}\n.animated-title > span:nth-child(16) {\n  transition-delay: 0.8s;\n}\n.animated-title > span:nth-child(17) {\n  transition-delay: 0.85s;\n}\n.animated-title > span:nth-child(18) {\n  transition-delay: 0.9s;\n}\n.animated-title > span:nth-child(19) {\n  transition-delay: 0.95s;\n}\n.animated-title > span:nth-child(20) {\n  transition-delay: 1s;\n}\n.animated-title > span:nth-child(21) {\n  transition-delay: 1.05s;\n}\n.animated-title > span:nth-child(22) {\n  transition-delay: 1.1s;\n}\n.animated-title > span:nth-child(23) {\n  transition-delay: 1.15s;\n}\n.animated-title > span:nth-child(24) {\n  transition-delay: 1.2s;\n}\n.animated-title > span:nth-child(25) {\n  transition-delay: 1.25s;\n}\n.animated-title > span:nth-child(26) {\n  transition-delay: 1.3s;\n}\n.animated-title > span:nth-child(27) {\n  transition-delay: 1.35s;\n}\n.animated-title > span:nth-child(28) {\n  transition-delay: 1.4s;\n}\n.animated-title > span:nth-child(29) {\n  transition-delay: 1.45s;\n}\n.animated-title > span:nth-child(30) {\n  transition-delay: 1.5s;\n}\n.animated-title > span:nth-child(31) {\n  transition-delay: 1.55s;\n}\n.animated-title > span:nth-child(32) {\n  transition-delay: 1.6s;\n}\n.animated-title > span:nth-child(33) {\n  transition-delay: 1.65s;\n}\n.animated-title > span:nth-child(34) {\n  transition-delay: 1.7s;\n}\n.animated-title > span:nth-child(35) {\n  transition-delay: 1.75s;\n}\n.animated-title > span:nth-child(36) {\n  transition-delay: 1.8s;\n}\n.animated-title > span:nth-child(37) {\n  transition-delay: 1.85s;\n}\n.animated-title > span:nth-child(38) {\n  transition-delay: 1.9s;\n}\n.animated-title > span:nth-child(39) {\n  transition-delay: 1.95s;\n}\n.animated-title > span:nth-child(40) {\n  transition-delay: 2s;\n}\n.animated-title > span:nth-child(41) {\n  transition-delay: 2.05s;\n}\n.animated-title > span:nth-child(42) {\n  transition-delay: 2.1s;\n}\n.animated-title > span:nth-child(43) {\n  transition-delay: 2.15s;\n}\n.animated-title > span:nth-child(44) {\n  transition-delay: 2.2s;\n}\n.animated-title > span:nth-child(45) {\n  transition-delay: 2.25s;\n}\n.animated-title > span:nth-child(46) {\n  transition-delay: 2.3s;\n}\n.animated-title > span:nth-child(47) {\n  transition-delay: 2.35s;\n}\n.animated-title > span:nth-child(48) {\n  transition-delay: 2.4s;\n}\n.animated-title > span:nth-child(49) {\n  transition-delay: 2.45s;\n}\n.animated-title > span:nth-child(50) {\n  transition-delay: 2.5s;\n}\n.animated-title > span:nth-child(51) {\n  transition-delay: 2.55s;\n}\n.animated-title > span:nth-child(52) {\n  transition-delay: 2.6s;\n}\n.animated-title > span:nth-child(53) {\n  transition-delay: 2.65s;\n}\n.animated-title > span:nth-child(54) {\n  transition-delay: 2.7s;\n}\n.animated-title > span:nth-child(55) {\n  transition-delay: 2.75s;\n}\n.animated-title > span:nth-child(56) {\n  transition-delay: 2.8s;\n}\n.animated-title > span:nth-child(57) {\n  transition-delay: 2.85s;\n}\n.animated-title > span:nth-child(58) {\n  transition-delay: 2.9s;\n}\n.animated-title > span:nth-child(59) {\n  transition-delay: 2.95s;\n}\n.animated-title > span:nth-child(60) {\n  transition-delay: 3s;\n}\n.animated-title > span:nth-child(61) {\n  transition-delay: 3.05s;\n}\n.animated-title > span:nth-child(62) {\n  transition-delay: 3.1s;\n}\n.animated-title > span:nth-child(63) {\n  transition-delay: 3.15s;\n}\n.animated-title > span:nth-child(64) {\n  transition-delay: 3.2s;\n}\n.animated-title > span:nth-child(65) {\n  transition-delay: 3.25s;\n}\n.animated-title > span:nth-child(66) {\n  transition-delay: 3.3s;\n}\n.animated-title > span:nth-child(67) {\n  transition-delay: 3.35s;\n}\n.animated-title > span:nth-child(68) {\n  transition-delay: 3.4s;\n}\n.animated-title > span:nth-child(69) {\n  transition-delay: 3.45s;\n}\n.animated-title > span:nth-child(70) {\n  transition-delay: 3.5s;\n}\n.animated-title > span:nth-child(71) {\n  transition-delay: 3.55s;\n}\n.animated-title > span:nth-child(72) {\n  transition-delay: 3.6s;\n}\n.animated-title > span:nth-child(73) {\n  transition-delay: 3.65s;\n}\n.animated-title > span:nth-child(74) {\n  transition-delay: 3.7s;\n}\n.animated-title > span:nth-child(75) {\n  transition-delay: 3.75s;\n}\n.animated-title > span:nth-child(76) {\n  transition-delay: 3.8s;\n}\n.animated-title > span:nth-child(77) {\n  transition-delay: 3.85s;\n}\n.animated-title > span:nth-child(78) {\n  transition-delay: 3.9s;\n}\n.animated-title > span:nth-child(79) {\n  transition-delay: 3.95s;\n}\n.animated-title > span:nth-child(80) {\n  transition-delay: 4s;\n}\n.animated-title > span:nth-child(81) {\n  transition-delay: 4.05s;\n}\n.animated-title > span:nth-child(82) {\n  transition-delay: 4.1s;\n}\n.animated-title > span:nth-child(83) {\n  transition-delay: 4.15s;\n}\n.animated-title > span:nth-child(84) {\n  transition-delay: 4.2s;\n}\n.animated-title > span:nth-child(85) {\n  transition-delay: 4.25s;\n}\n.animated-title > span:nth-child(86) {\n  transition-delay: 4.3s;\n}\n.animated-title > span:nth-child(87) {\n  transition-delay: 4.35s;\n}\n.animated-title > span:nth-child(88) {\n  transition-delay: 4.4s;\n}\n.animated-title > span:nth-child(89) {\n  transition-delay: 4.45s;\n}\n.animated-title > span:nth-child(90) {\n  transition-delay: 4.5s;\n}\n.animated-title > span:nth-child(91) {\n  transition-delay: 4.55s;\n}\n.animated-title > span:nth-child(92) {\n  transition-delay: 4.6s;\n}\n.animated-title > span:nth-child(93) {\n  transition-delay: 4.65s;\n}\n.animated-title > span:nth-child(94) {\n  transition-delay: 4.7s;\n}\n.animated-title > span:nth-child(95) {\n  transition-delay: 4.75s;\n}\n.animated-title > span:nth-child(96) {\n  transition-delay: 4.8s;\n}\n.animated-title > span:nth-child(97) {\n  transition-delay: 4.85s;\n}\n.animated-title > span:nth-child(98) {\n  transition-delay: 4.9s;\n}\n.animated-title > span:nth-child(99) {\n  transition-delay: 4.95s;\n}\n.animated-title > span:nth-child(100) {\n  transition-delay: 5s;\n}\n.animated-title > span:nth-child(101) {\n  transition-delay: 5.05s;\n}\n.animated-title > span:nth-child(102) {\n  transition-delay: 5.1s;\n}\n.animated-title > span:nth-child(103) {\n  transition-delay: 5.15s;\n}\n.animated-title > span:nth-child(104) {\n  transition-delay: 5.2s;\n}\n.animated-title > span:nth-child(105) {\n  transition-delay: 5.25s;\n}\n.animated-title > span:nth-child(106) {\n  transition-delay: 5.3s;\n}\n.animated-title > span:nth-child(107) {\n  transition-delay: 5.35s;\n}\n.animated-title > span:nth-child(108) {\n  transition-delay: 5.4s;\n}\n.animated-title > span:nth-child(109) {\n  transition-delay: 5.45s;\n}\n.animated-title > span:nth-child(110) {\n  transition-delay: 5.5s;\n}\n.animated-title > span:nth-child(111) {\n  transition-delay: 5.55s;\n}\n.animated-title > span:nth-child(112) {\n  transition-delay: 5.6s;\n}\n.animated-title > span:nth-child(113) {\n  transition-delay: 5.65s;\n}\n.animated-title > span:nth-child(114) {\n  transition-delay: 5.7s;\n}\n.animated-title > span:nth-child(115) {\n  transition-delay: 5.75s;\n}\n.animated-title > span:nth-child(116) {\n  transition-delay: 5.8s;\n}\n.animated-title > span:nth-child(117) {\n  transition-delay: 5.85s;\n}\n.animated-title > span:nth-child(118) {\n  transition-delay: 5.9s;\n}\n.animated-title > span:nth-child(119) {\n  transition-delay: 5.95s;\n}\n.animated-title > span:nth-child(120) {\n  transition-delay: 6s;\n}\n.animated-title > span:nth-child(121) {\n  transition-delay: 6.05s;\n}\n.animated-title > span:nth-child(122) {\n  transition-delay: 6.1s;\n}\n.animated-title > span:nth-child(123) {\n  transition-delay: 6.15s;\n}\n.animated-title > span:nth-child(124) {\n  transition-delay: 6.2s;\n}\n.animated-title > span:nth-child(125) {\n  transition-delay: 6.25s;\n}\n.animated-title > span:nth-child(126) {\n  transition-delay: 6.3s;\n}\n.animated-title > span:nth-child(127) {\n  transition-delay: 6.35s;\n}\n.animated-title > span:nth-child(128) {\n  transition-delay: 6.4s;\n}\n.animated-title > span:nth-child(129) {\n  transition-delay: 6.45s;\n}\n.animated-title > span:nth-child(130) {\n  transition-delay: 6.5s;\n}\n.animated-title > span:nth-child(131) {\n  transition-delay: 6.55s;\n}\n.animated-title > span:nth-child(132) {\n  transition-delay: 6.6s;\n}\n.animated-title > span:nth-child(133) {\n  transition-delay: 6.65s;\n}\n.animated-title > span:nth-child(134) {\n  transition-delay: 6.7s;\n}\n.animated-title > span:nth-child(135) {\n  transition-delay: 6.75s;\n}\n.animated-title > span:nth-child(136) {\n  transition-delay: 6.8s;\n}\n.animated-title > span:nth-child(137) {\n  transition-delay: 6.85s;\n}\n.animated-title > span:nth-child(138) {\n  transition-delay: 6.9s;\n}\n.animated-title > span:nth-child(139) {\n  transition-delay: 6.95s;\n}\n.animated-title > span:nth-child(140) {\n  transition-delay: 7s;\n}\n.animated-title > span:nth-child(141) {\n  transition-delay: 7.05s;\n}\n.animated-title > span:nth-child(142) {\n  transition-delay: 7.1s;\n}\n.animated-title > span:nth-child(143) {\n  transition-delay: 7.15s;\n}\n.animated-title > span:nth-child(144) {\n  transition-delay: 7.2s;\n}\n.animated-title > span:nth-child(145) {\n  transition-delay: 7.25s;\n}\n.animated-title > span:nth-child(146) {\n  transition-delay: 7.3s;\n}\n.animated-title > span:nth-child(147) {\n  transition-delay: 7.35s;\n}\n.animated-title > span:nth-child(148) {\n  transition-delay: 7.4s;\n}\n.animated-title > span:nth-child(149) {\n  transition-delay: 7.45s;\n}\n.animated-title > span:nth-child(150) {\n  transition-delay: 7.5s;\n}\n.animated-title > span:nth-child(151) {\n  transition-delay: 7.55s;\n}\n.animated-title > span:nth-child(152) {\n  transition-delay: 7.6s;\n}\n.animated-title > span:nth-child(153) {\n  transition-delay: 7.65s;\n}\n.animated-title > span:nth-child(154) {\n  transition-delay: 7.7s;\n}\n.animated-title > span:nth-child(155) {\n  transition-delay: 7.75s;\n}\n.animated-title > span:nth-child(156) {\n  transition-delay: 7.8s;\n}\n.animated-title > span:nth-child(157) {\n  transition-delay: 7.85s;\n}\n.animated-title > span:nth-child(158) {\n  transition-delay: 7.9s;\n}\n.animated-title > span:nth-child(159) {\n  transition-delay: 7.95s;\n}\n.animated-title > span:nth-child(160) {\n  transition-delay: 8s;\n}\n.animated-title > span:nth-child(161) {\n  transition-delay: 8.05s;\n}\n.animated-title > span:nth-child(162) {\n  transition-delay: 8.1s;\n}\n.animated-title > span:nth-child(163) {\n  transition-delay: 8.15s;\n}\n.animated-title > span:nth-child(164) {\n  transition-delay: 8.2s;\n}\n.animated-title > span:nth-child(165) {\n  transition-delay: 8.25s;\n}\n.animated-title > span:nth-child(166) {\n  transition-delay: 8.3s;\n}\n.animated-title > span:nth-child(167) {\n  transition-delay: 8.35s;\n}\n.animated-title > span:nth-child(168) {\n  transition-delay: 8.4s;\n}\n.animated-title > span:nth-child(169) {\n  transition-delay: 8.45s;\n}\n.animated-title > span:nth-child(170) {\n  transition-delay: 8.5s;\n}\n.animated-title > span:nth-child(171) {\n  transition-delay: 8.55s;\n}\n.animated-title > span:nth-child(172) {\n  transition-delay: 8.6s;\n}\n.animated-title > span:nth-child(173) {\n  transition-delay: 8.65s;\n}\n.animated-title > span:nth-child(174) {\n  transition-delay: 8.7s;\n}\n.animated-title > span:nth-child(175) {\n  transition-delay: 8.75s;\n}\n.animated-title > span:nth-child(176) {\n  transition-delay: 8.8s;\n}\n.animated-title > span:nth-child(177) {\n  transition-delay: 8.85s;\n}\n.animated-title > span:nth-child(178) {\n  transition-delay: 8.9s;\n}\n.animated-title > span:nth-child(179) {\n  transition-delay: 8.95s;\n}\n.animated-title > span:nth-child(180) {\n  transition-delay: 9s;\n}\n.animated-title > span:nth-child(181) {\n  transition-delay: 9.05s;\n}\n.animated-title > span:nth-child(182) {\n  transition-delay: 9.1s;\n}\n.animated-title > span:nth-child(183) {\n  transition-delay: 9.15s;\n}\n.animated-title > span:nth-child(184) {\n  transition-delay: 9.2s;\n}\n.animated-title > span:nth-child(185) {\n  transition-delay: 9.25s;\n}\n.animated-title > span:nth-child(186) {\n  transition-delay: 9.3s;\n}\n.animated-title > span:nth-child(187) {\n  transition-delay: 9.35s;\n}\n.animated-title > span:nth-child(188) {\n  transition-delay: 9.4s;\n}\n.animated-title > span:nth-child(189) {\n  transition-delay: 9.45s;\n}\n.animated-title > span:nth-child(190) {\n  transition-delay: 9.5s;\n}\n.animated-title > span:nth-child(191) {\n  transition-delay: 9.55s;\n}\n.animated-title > span:nth-child(192) {\n  transition-delay: 9.6s;\n}\n.animated-title > span:nth-child(193) {\n  transition-delay: 9.65s;\n}\n.animated-title > span:nth-child(194) {\n  transition-delay: 9.7s;\n}\n.animated-title > span:nth-child(195) {\n  transition-delay: 9.75s;\n}\n.animated-title > span:nth-child(196) {\n  transition-delay: 9.8s;\n}\n.animated-title > span:nth-child(197) {\n  transition-delay: 9.85s;\n}\n.animated-title > span:nth-child(198) {\n  transition-delay: 9.9s;\n}\n.animated-title > span:nth-child(199) {\n  transition-delay: 9.95s;\n}\n.animated-title > span:nth-child(200) {\n  transition-delay: 10s;\n}\n.animated-title > span:nth-child(201) {\n  transition-delay: 10.05s;\n}\n.animated-title > span:nth-child(202) {\n  transition-delay: 10.1s;\n}\n.animated-title > span:nth-child(203) {\n  transition-delay: 10.15s;\n}\n.animated-title > span:nth-child(204) {\n  transition-delay: 10.2s;\n}\n.animated-title > span:nth-child(205) {\n  transition-delay: 10.25s;\n}\n.animated-title > span:nth-child(206) {\n  transition-delay: 10.3s;\n}\n.animated-title > span:nth-child(207) {\n  transition-delay: 10.35s;\n}\n.animated-title > span:nth-child(208) {\n  transition-delay: 10.4s;\n}\n.animated-title > span:nth-child(209) {\n  transition-delay: 10.45s;\n}\n.animated-title > span:nth-child(210) {\n  transition-delay: 10.5s;\n}\n.animated-title > span:nth-child(211) {\n  transition-delay: 10.55s;\n}\n.animated-title > span:nth-child(212) {\n  transition-delay: 10.6s;\n}\n.animated-title > span:nth-child(213) {\n  transition-delay: 10.65s;\n}\n.animated-title > span:nth-child(214) {\n  transition-delay: 10.7s;\n}\n.animated-title > span:nth-child(215) {\n  transition-delay: 10.75s;\n}\n.animated-title > span:nth-child(216) {\n  transition-delay: 10.8s;\n}\n.animated-title > span:nth-child(217) {\n  transition-delay: 10.85s;\n}\n.animated-title > span:nth-child(218) {\n  transition-delay: 10.9s;\n}\n.animated-title > span:nth-child(219) {\n  transition-delay: 10.95s;\n}\n.animated-title > span:nth-child(220) {\n  transition-delay: 11s;\n}\n.animated-title > span:nth-child(221) {\n  transition-delay: 11.05s;\n}\n.animated-title > span:nth-child(222) {\n  transition-delay: 11.1s;\n}\n.animated-title > span:nth-child(223) {\n  transition-delay: 11.15s;\n}\n.animated-title > span:nth-child(224) {\n  transition-delay: 11.2s;\n}\n.animated-title > span:nth-child(225) {\n  transition-delay: 11.25s;\n}\n.animated-title > span:nth-child(226) {\n  transition-delay: 11.3s;\n}\n.animated-title > span:nth-child(227) {\n  transition-delay: 11.35s;\n}\n.animated-title > span:nth-child(228) {\n  transition-delay: 11.4s;\n}\n.animated-title > span:nth-child(229) {\n  transition-delay: 11.45s;\n}\n.animated-title > span:nth-child(230) {\n  transition-delay: 11.5s;\n}\n.animated-title > span:nth-child(231) {\n  transition-delay: 11.55s;\n}\n.animated-title > span:nth-child(232) {\n  transition-delay: 11.6s;\n}\n.animated-title > span:nth-child(233) {\n  transition-delay: 11.65s;\n}\n.animated-title > span:nth-child(234) {\n  transition-delay: 11.7s;\n}\n.animated-title > span:nth-child(235) {\n  transition-delay: 11.75s;\n}\n.animated-title > span:nth-child(236) {\n  transition-delay: 11.8s;\n}\n.animated-title > span:nth-child(237) {\n  transition-delay: 11.85s;\n}\n.animated-title > span:nth-child(238) {\n  transition-delay: 11.9s;\n}\n.animated-title > span:nth-child(239) {\n  transition-delay: 11.95s;\n}\n.animated-title > span:nth-child(240) {\n  transition-delay: 12s;\n}\n.animated-title > span:nth-child(241) {\n  transition-delay: 12.05s;\n}\n.animated-title > span:nth-child(242) {\n  transition-delay: 12.1s;\n}\n.animated-title > span:nth-child(243) {\n  transition-delay: 12.15s;\n}\n.animated-title > span:nth-child(244) {\n  transition-delay: 12.2s;\n}\n.animated-title > span:nth-child(245) {\n  transition-delay: 12.25s;\n}\n.animated-title > span:nth-child(246) {\n  transition-delay: 12.3s;\n}\n.animated-title > span:nth-child(247) {\n  transition-delay: 12.35s;\n}\n.animated-title > span:nth-child(248) {\n  transition-delay: 12.4s;\n}\n.animated-title > span:nth-child(249) {\n  transition-delay: 12.45s;\n}\n.animated-title > span:nth-child(250) {\n  transition-delay: 12.5s;\n}\n.animated-title > span:nth-child(251) {\n  transition-delay: 12.55s;\n}\n.animated-title > span:nth-child(252) {\n  transition-delay: 12.6s;\n}\n.animated-title > span:nth-child(253) {\n  transition-delay: 12.65s;\n}\n.animated-title > span:nth-child(254) {\n  transition-delay: 12.7s;\n}\n.animated-title > span:nth-child(255) {\n  transition-delay: 12.75s;\n}\n.animated-title.slide-in {\n  opacity: 1;\n}\n.animated-title.slide-in > span > span {\n  transform: translateY(0);\n}";
styleInject(css_248z);

function Animated_text(props) {
    var titleRef = React.useRef(null);
    React.useEffect(function () {
        var titleElement = titleRef.current;
        if (titleElement && "IntersectionObserver" in window) {
            var observer_1 = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        titleElement.classList.add("slide-in");
                    }
                    else {
                        titleElement.classList.remove("slide-in");
                    }
                });
            });
            observer_1.observe(titleElement);
            return function () {
                observer_1.unobserve(titleElement);
            };
        }
    }, []);
    var breakTextIntoWords = function (text) {
        var words = (text.innerText || '').trim().split(' ');
        text.innerText = "";
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            var span1 = document.createElement("span");
            var span2 = document.createElement("span");
            span1.innerText = "".concat(word);
            span2.append(span1);
            text.append(span2);
            text.append(" ");
        }
    };
    React.useEffect(function () {
        var titleElement = titleRef.current;
        if (titleElement) {
            breakTextIntoWords(titleElement);
        }
    }, [props.text]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, props.variant == 'h1' ? (React__default["default"].createElement("h1", { ref: titleRef, className: "animated-title" }, props.text)) : props.variant == 'h2' ? (React__default["default"].createElement("h2", { ref: titleRef, className: "animated-title" }, props.text)) : props.variant == 'h3' ? (React__default["default"].createElement("h3", { ref: titleRef, className: "animated-title" }, props.text)) : props.variant == 'h4' ? (React__default["default"].createElement("h4", { ref: titleRef, className: "animated-title" }, props.text)) : props.variant == 'p' ? (React__default["default"].createElement("p", { ref: titleRef, className: "animated-title" }, props.text)) : ''));
}

exports.Animated_text = Animated_text;
exports.Button_Line_Drawing = Button_Line_Drawing;
exports.Button_Slide_Second = Button_Slide_Second;
exports.Button_slide = Button_slide;
exports.FAQ_item = FAQ_item;
//# sourceMappingURL=index.js.map
