import React, { useRef, useEffect, useState } from 'react';

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

var css_248z$f = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-button-slide-background: black;\n  --a-button-slide-background-hover: #4cbfa6;\n  --a-button-slide-animation-transition: 0.3s;\n  --a-button-slide-border-radius: unset;\n  --a-button-slide-font-size: 20px;\n  --a-button-slide-line-height: 1;\n  --a-button-slide-font-weight: 400;\n  --a-button-slide-text-color: #ffffff;\n  --a-button-slide-gap: 15px;\n  --a-button-slide-padding-xs: 10px 20px;\n  --a-button-slide-padding-s: 13px 23px;\n  --a-button-slide-padding-m: 16px 26px;\n  --a-button-slide-padding-l: 19px 29px;\n  --a-button-slide-padding-xl: 22px 32px;\n  --a-button-slide-padding-xxl: 25px 35px;\n}\n\n.btn_hover_slide {\n  font-size: var(--a-button-slide-font-size);\n  line-height: var(--a-button-slide-line-height);\n  font-weight: var(--a-button-slide-font-weight);\n  border-radius: var(--a-button-slide-border-radius);\n  position: relative;\n  display: block;\n  height: 100%;\n  color: var(--a-button-slide-text-color);\n  background-color: var(--a-button-slide-background-hover);\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 5px 15px var(--a-button-slide-background);\n}\n.btn_hover_slide.padding-xs span {\n  padding: var(--a-button-slide-padding-xs);\n}\n.btn_hover_slide.padding-s span {\n  padding: var(--a-button-slide-padding-s);\n}\n.btn_hover_slide.padding-m span {\n  padding: var(--a-button-slide-padding-m);\n}\n.btn_hover_slide.padding-l span {\n  padding: var(--a-button-slide-padding-l);\n}\n.btn_hover_slide.padding-xl span {\n  padding: var(--a-button-slide-padding-xl);\n}\n.btn_hover_slide.padding-xxl span {\n  padding: var(--a-button-slide-padding-xxl);\n}\n.btn_hover_slide .icon {\n  z-index: 2;\n  display: inline-flex;\n}\n.btn_hover_slide span {\n  font-size: var(--a-button-slide-font-size);\n  line-height: var(--a-button-slide-line-height);\n  font-weight: var(--a-button-slide-font-weight);\n  border-radius: var(--a-button-slide-border-radius);\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--a-button-slide-gap);\n  top: 0;\n  left: 0;\n}\n.btn_hover_slide span.reverse {\n  flex-direction: row-reverse;\n}\n.btn_hover_slide::before {\n  position: absolute;\n  content: \"\";\n  background-color: var(--a-button-slide-background);\n  transition: var(--a-button-slide-animation-transition) ease-out;\n  border-radius: var(--a-button-slide-border-radius);\n}\n\n.btn_hover_slide.slide_down {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_down::before {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_down:hover::before {\n  height: 0%;\n}\n\n.btn_hover_slide.slide_up {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_up::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_up:hover::before {\n  height: 0%;\n}\n\n.btn_hover_slide.slide_right {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_right::before {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_right:hover::before {\n  width: 0%;\n}\n\n.btn_hover_slide.slide_left {\n  padding: 0;\n  margin: 0;\n}\n.btn_hover_slide.slide_left::before {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.btn_hover_slide.slide_left:hover::before {\n  width: 0%;\n}";
styleInject(css_248z$f);

function Button_slide(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "".concat(props.padding === "xs" ? "padding-xs" : "").concat(props.padding === "s" ? "padding-s" : "").concat(props.padding === "m" ? "padding-m" : "").concat(props.padding === "l" ? "padding-l" : "").concat(props.padding === "xl" ? "padding-xl" : "").concat(props.padding === "xxl" ? "padding-xxl" : "", " ").concat(props.hover_effect === "slide-down"
                ? "btn_hover_slide slide_down"
                : "").concat(props.hover_effect === "slide-up" ? "btn_hover_slide slide_up" : "").concat(props.hover_effect === "slide-right"
                ? "btn_hover_slide slide_right"
                : "").concat(props.hover_effect === "slide-left"
                ? "btn_hover_slide slide_left"
                : "", " ") },
            React.createElement("span", { className: "".concat(props.iconPosition === "left" ? "reverse" : "") },
                props.text,
                props.icon ? React.createElement("div", { className: "icon" }, props.icon) : ""))));
}

var css_248z$e = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-button-line-drawing-font-size: 20px;\n  --a-button-line-drawing-line-height: 2;\n  --a-button-line-drawing-font-weight: 400;\n  --a-button-line-drawing-text-color: #000000;\n  --a-button-line-drawing-line-color: black;\n  --a-button-line-drawing-background-color: transparent;\n  --a-button-line-drawing-animation-transition: 0.37s;\n  --a-button-line-drawing-animation-transition-fast: 0.2s;\n  --a-button-line-drawing-animation-transition-faster: 0.3s;\n  --a-button-line-drawing-animation-transition-ultra-fast: 0.15s;\n  --a-button-line-drawing-padding-xs: 10px 20px;\n  --a-button-line-drawing-padding-s: 13px 23px;\n  --a-button-line-drawing-padding-m: 16px 26px;\n  --a-button-line-drawing-padding-l: 19px 29px;\n  --a-button-line-drawing-padding-xl: 22px 32px;\n  --a-button-line-drawing-padding-xxl: 25px 35px;\n}\n\n.btn_hover_line {\n  font-size: var(--a-button-line-drawing-font-size);\n  line-height: var(--a-button-line-drawing-line-height);\n  font-weight: var(--a-button-line-drawing-font-weight);\n  position: relative;\n  display: inline-flex;\n  height: 100%;\n  background-color: var(--a-button-line-drawing-background-color);\n  border: none;\n  cursor: pointer;\n}\n.btn_hover_line.padding-xs span {\n  padding: var(--a-button-line-drawing-padding-xs);\n}\n.btn_hover_line.padding-s span {\n  padding: var(--a-button-line-drawing-padding-s);\n}\n.btn_hover_line.padding-m span {\n  padding: var(--a-button-line-drawing-padding-m);\n}\n.btn_hover_line.padding-l span {\n  padding: var(--a-button-line-drawing-padding-l);\n}\n.btn_hover_line.padding-xl span {\n  padding: var(--a-button-line-drawing-padding-xl);\n}\n.btn_hover_line.padding-xxl span {\n  padding: var(--a-button-line-drawing-padding-xxl);\n}\n.btn_hover_line span {\n  font-size: var(--a-button-line-drawing-font-size);\n  line-height: var(--a-button-line-drawing-line-height);\n  font-weight: var(--a-button-line-drawing-font-weight);\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  color: var(--a-button-line-drawing-text-color);\n}\n.btn_hover_line::before {\n  position: absolute;\n  content: \"\";\n  width: 15%;\n  height: 2px;\n  background-color: var(--a-button-line-drawing-line-color);\n  z-index: 2;\n}\n.btn_hover_line::after {\n  position: absolute;\n  content: \"\";\n  width: 15%;\n  height: 2px;\n  background-color: var(--a-button-line-drawing-line-color);\n  z-index: 2;\n}\n\n.line_below {\n  padding: 0;\n  margin: 0;\n}\n.line_below::before {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  right: 50%;\n}\n.line_below::after {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  left: 50%;\n}\n.line_below:hover::before {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_below:hover::after {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_below span::before {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  left: 0;\n  border-left: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_below span::after {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  right: 0;\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_below span:hover::before {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_below span:hover::after {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n\n/* 16. hover-border-6 */\n.line_above {\n  padding: 0;\n  margin: 0;\n}\n.line_above::before {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  right: 50%;\n}\n.line_above::after {\n  position: absolute;\n  content: \"\";\n  bottom: 0;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) ease-out;\n  left: 50%;\n}\n.line_above:hover::before {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_above:hover::after {\n  width: 50%;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_above span::before {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  left: 0;\n  border-left: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_above span::after {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n  bottom: 0;\n  right: 0;\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n}\n.line_above span:hover::before {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_above span:hover::after {\n  width: 50%;\n  height: 100%;\n  opacity: 1;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition) linear, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_above::before {\n  top: 0;\n}\n.line_above::after {\n  top: 0;\n}\n.line_above span::before {\n  top: 0;\n  border-left: 2px solid var(--a-button-line-drawing-line-color);\n  border-bottom: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: none;\n}\n.line_above span::after {\n  top: 0;\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  border-bottom: 2px solid var(--a-button-line-drawing-line-color);\n  border-top: none;\n}\n\n.line_side {\n  padding: 0;\n  margin: 0;\n}\n.line_side::before {\n  left: 0%;\n  height: 30%;\n  width: 2px;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-faster) ease-out;\n  top: 50%;\n}\n.line_side::after {\n  left: 0%;\n  height: 30%;\n  width: 2px;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-faster) ease-out;\n  bottom: 50%;\n}\n.line_side:hover::before {\n  height: 50%;\n  transition: height var(--a-button-line-drawing-animation-transition-fast) ease-in;\n}\n.line_side:hover::after {\n  height: 50%;\n  transition: height var(--a-button-line-drawing-animation-transition-ultra-fast) ease-in;\n}\n.line_side span::before {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  top: -2px;\n  left: 0%;\n  border-top: 2px solid var(--a-button-line-drawing-line-color);\n  border-right: 2px solid var(--a-button-line-drawing-line-color);\n  transition: height var(--a-button-line-drawing-animation-transition-ultra-fast) ease-in, width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-ultra-fast) linear, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n}\n.line_side span::after {\n  position: absolute;\n  content: \"\";\n  width: 0%;\n  height: 0%;\n  background: transparent;\n  opacity: 0;\n  z-index: 2;\n  bottom: 0;\n  left: 0%;\n  border-bottom: 2px solid var(--a-button-line-drawing-line-color);\n  transition: width var(--a-button-line-drawing-animation-transition-fast) ease-in, opacity 0s var(--a-button-line-drawing-animation-transition-faster);\n}\n.line_side span:hover::after {\n  width: 100%;\n  opacity: 1;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-fast) ease-out, opacity 0s var(--a-button-line-drawing-animation-transition-fast);\n}\n.line_side span:hover::before {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  transition: width var(--a-button-line-drawing-animation-transition-fast) var(--a-button-line-drawing-animation-transition-ultra-fast) linear, height var(--a-button-line-drawing-animation-transition-ultra-fast) var(--a-button-line-drawing-animation-transition-faster) ease-out, opacity 0s var(--a-button-line-drawing-animation-transition-ultra-fast);\n}";
styleInject(css_248z$e);

function Button_Line_Drawing(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "".concat(props.padding === "xs" ? "padding-xs" : "").concat(props.padding === "s" ? "padding-s" : "").concat(props.padding === "m" ? "padding-m" : "").concat(props.padding === "l" ? "padding-l" : "").concat(props.padding === "xl" ? "padding-xl" : "").concat(props.padding === "xxl" ? "padding-xxl" : "", " ").concat(props.line_effect === "line-below" ? "btn_hover_line line_below" : "").concat(props.line_effect === "line-above" ? "btn_hover_line line_above" : "").concat(props.line_effect === "line-side" ? "btn_hover_line line_side" : "", " ") },
            React.createElement("span", null, props.text))));
}

var css_248z$d = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-button-slide-second-background: black;\n  --a-button-slide-second-background-hover: #4cbfa6;\n  --a-button-slide-second-animation-transition: 0.37s;\n  --a-button-slide-second-animation-transition-fast: 0.2s;\n  --a-button-slide-second-border-radius: unset;\n  --a-button-slide-second-font-size: 20px;\n  --a-button-slide-second-padding: 20px 30px;\n  --a-button-slide-second-line-height: 1;\n  --a-button-slide-second-font-weight: 400;\n  --a-button-slide-second-text-color: #ffffff;\n  --a-button-slide-second-gap: 14px;\n  --a-button-slide-second-decoration-margin-left: 10px;\n  --a-button-slide-second-decoration-height: 300px;\n  --a-button-slide-second-decoration-width: 140%;\n}\n\n.btn_hover_left {\n  font-size: var(--a-button-slide-second-font-size);\n  padding: var(--a-button-slide-second-padding);\n  line-height: var(--a-button-slide-second-line-height);\n  font-weight: var(--a-button-slide-second-font-weight);\n  border-radius: var(--a-button-slide-second-border-radius);\n  border: none;\n  display: block;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  background-color: var(--a-button-slide-second-background);\n  box-shadow: 0 5px 15px var(--a-button-slide-second-background);\n}\n.btn_hover_left .icon {\n  z-index: 2;\n}\n.btn_hover_left span {\n  display: flex;\n  align-items: center;\n  position: relative;\n  gap: var(--a-button-slide-second-gap);\n  z-index: 1;\n  color: var(--a-button-slide-second-text-color);\n}\n.btn_hover_left span.reverse {\n  flex-direction: row-reverse;\n}\n.btn_hover_left:after {\n  content: \"\";\n  position: absolute;\n  left: var(--a-button-slide-second-decoration-margin-left);\n  top: 0;\n  height: var(--a-button-slide-second-decoration-height);\n  width: var(--a-button-slide-second-decoration-width);\n  background: var(--a-button-slide-second-background-hover);\n  -webkit-transition: all var(--a-button-slide-second-animation-transition-fast) ease-in-out;\n  transition: all var(--a-button-slide-second-animation-transition) ease-in-out;\n  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\n}\n.btn_hover_left:hover {\n  color: var(--a-button-slide-second-background);\n}\n\n.btn_hover_left:hover:after {\n  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\n}\n\n.link {\n  margin-top: 30px;\n}";
styleInject(css_248z$d);

function Button_Slide_Second(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "tertiary-button" },
            React.createElement("button", { className: "\n            ".concat(props.hover_effect === "tertiary" ? 'btn_hover_left' : "", "\n          ") },
                React.createElement("span", { className: "".concat(props.iconPosition === "left" ? "reverse" : '') },
                    props.text,
                    props.icon ? (React.createElement("div", { className: "icon" }, props.icon)) : '')))));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

var css_248z$c = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-description-color: #000000;\n}\n\n.a-description {\n  display: inline-block;\n  color: var(--a-description-color);\n}\n.a-description.underline {\n  text-decoration: underline;\n}\n.a-description.italic {\n  font-style: italic;\n}";
styleInject(css_248z$c);

function Description(props) {
    return (React.createElement("div", { className: "a-description ".concat(props.underline ? "underline" : "", " ").concat(props.italic ? "italic" : ""), style: __assign$1({ "--a-description-color": props.color }, props.style) }, props.text));
}

var css_248z$b = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --faq-item-icon-margin-top: -2px;\n  --faq-item-background: #ffffff;\n  --faq-item-border-radius: 12px;\n  --faq-item-box-shadow: 0px 0px 48px -2px rgba(16, 24, 40, 0.08);\n  --faq-item-padding: 40px;\n  --faq-item-content-padding-right: 20px;\n  --faq-item-content-title-opacity: 0.7;\n  --faq-item-content-title-font-weight: 600;\n  --faq-item-content-title-transition: all 0.37s;\n  --faq-item-arrow-opacity: 0.7;\n  --faq-item-max-width: 95%;\n}\n\n.faq-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  border-radius: var(--faq-item-border-radius);\n  box-shadow: var(--faq-item-box-shadow);\n  padding: var(--faq-item-padding);\n  position: relative;\n  background: var(--faq-item-background);\n  cursor: pointer;\n}\n.faq-item ::selection {\n  background: transparent;\n}\n.faq-item .content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: var(--faq-item-max-width);\n  padding-right: var(--faq-item-content-padding-right);\n}\n.faq-item .content .title {\n  opacity: var(--faq-item-content-title-opacity);\n  font-weight: var(--faq-item-content-title-font-weight);\n  transition: var(--faq-item-content-title-transition);\n}\n.faq-item .content .hidden-text {\n  overflow: hidden;\n  max-height: 0;\n  height: 0;\n  opacity: 0;\n  transition: all 0.37s;\n}\n.faq-item .arrow {\n  transform: rotate(0deg);\n  opacity: var(--faq-item-arrow-opacity);\n  transition: all 0.37s;\n  line-height: 1 !important;\n}\n.faq-item.toggle .content .title {\n  opacity: 1;\n  font-weight: 800;\n}\n.faq-item.toggle .content .hidden-text {\n  overflow: visible;\n  max-height: 1000px;\n  height: 100%;\n  opacity: 1;\n}\n.faq-item.toggle .arrow {\n  transform: rotate(180deg);\n  opacity: 1;\n  margin-top: var(--faq-item-icon-margin-top);\n}";
styleInject(css_248z$b);

function FAQ_item(props) {
    var _a = React.useState(false), toggle = _a[0], setToggle = _a[1];
    var toggleFaq = function () {
        setToggle(function (prevToggle) { return !prevToggle; });
    };
    return (React.createElement("div", { className: "faq-item ".concat(toggle ? "toggle" : ""), onClick: toggleFaq },
        React.createElement("div", { className: "content" },
            React.createElement("div", { className: "title" }, props.title),
            React.createElement("div", { className: "hidden-text animated-title" }, props.description)),
        React.createElement("div", { className: "arrow" }, props.arrow)));
}

var css_248z$a = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-label-color: #ffffff;\n  --a-label-background-color: #000000;\n  --a-label-padding: 5px;\n  --a-label-border-radius: 30px;\n}\n\n.a-label {\n  display: inline-block;\n  padding: var(--a-label-padding);\n  border-radius: var(--a-label-border-radius);\n  color: var(--a-label-color);\n  background: var(--a-label-background-color);\n  font-size: 12px;\n}";
styleInject(css_248z$a);

function Label(props) {
    return (React.createElement("div", { className: "a-label", style: __assign$1({ "--a-label-color": props.color, "--a-label-background-color": props.backgroundColor }, props.style) }, props.text));
}

var css_248z$9 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --animated-title-transition-duration: 1s;\n  --animated-title-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  --a-animated-text-color: #000000;\n}\n\n.animated-title {\n  opacity: 0;\n  color: var(--a-animated-text-color);\n}\n.animated-title span {\n  display: inline-block;\n}\n.animated-title > span {\n  overflow: hidden;\n  transition-duration: var(--animated-title-transition-duration);\n  transition-timing-function: var(--animated-title-transition-timing-function);\n}\n.animated-title > span > span {\n  position: relative;\n  transform: translateY(100%);\n  transition: inherit;\n}\n.animated-title > span:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.animated-title > span:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.animated-title > span:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.animated-title > span:nth-child(5) {\n  transition-delay: 0.25s;\n}\n.animated-title > span:nth-child(6) {\n  transition-delay: 0.3s;\n}\n.animated-title > span:nth-child(7) {\n  transition-delay: 0.35s;\n}\n.animated-title > span:nth-child(8) {\n  transition-delay: 0.4s;\n}\n.animated-title > span:nth-child(9) {\n  transition-delay: 0.45s;\n}\n.animated-title > span:nth-child(10) {\n  transition-delay: 0.5s;\n}\n.animated-title > span:nth-child(11) {\n  transition-delay: 0.55s;\n}\n.animated-title > span:nth-child(12) {\n  transition-delay: 0.6s;\n}\n.animated-title > span:nth-child(13) {\n  transition-delay: 0.65s;\n}\n.animated-title > span:nth-child(14) {\n  transition-delay: 0.7s;\n}\n.animated-title > span:nth-child(15) {\n  transition-delay: 0.75s;\n}\n.animated-title > span:nth-child(16) {\n  transition-delay: 0.8s;\n}\n.animated-title > span:nth-child(17) {\n  transition-delay: 0.85s;\n}\n.animated-title > span:nth-child(18) {\n  transition-delay: 0.9s;\n}\n.animated-title > span:nth-child(19) {\n  transition-delay: 0.95s;\n}\n.animated-title > span:nth-child(20) {\n  transition-delay: 1s;\n}\n.animated-title > span:nth-child(21) {\n  transition-delay: 1.05s;\n}\n.animated-title > span:nth-child(22) {\n  transition-delay: 1.1s;\n}\n.animated-title > span:nth-child(23) {\n  transition-delay: 1.15s;\n}\n.animated-title > span:nth-child(24) {\n  transition-delay: 1.2s;\n}\n.animated-title > span:nth-child(25) {\n  transition-delay: 1.25s;\n}\n.animated-title > span:nth-child(26) {\n  transition-delay: 1.3s;\n}\n.animated-title > span:nth-child(27) {\n  transition-delay: 1.35s;\n}\n.animated-title > span:nth-child(28) {\n  transition-delay: 1.4s;\n}\n.animated-title > span:nth-child(29) {\n  transition-delay: 1.45s;\n}\n.animated-title > span:nth-child(30) {\n  transition-delay: 1.5s;\n}\n.animated-title > span:nth-child(31) {\n  transition-delay: 1.55s;\n}\n.animated-title > span:nth-child(32) {\n  transition-delay: 1.6s;\n}\n.animated-title > span:nth-child(33) {\n  transition-delay: 1.65s;\n}\n.animated-title > span:nth-child(34) {\n  transition-delay: 1.7s;\n}\n.animated-title > span:nth-child(35) {\n  transition-delay: 1.75s;\n}\n.animated-title > span:nth-child(36) {\n  transition-delay: 1.8s;\n}\n.animated-title > span:nth-child(37) {\n  transition-delay: 1.85s;\n}\n.animated-title > span:nth-child(38) {\n  transition-delay: 1.9s;\n}\n.animated-title > span:nth-child(39) {\n  transition-delay: 1.95s;\n}\n.animated-title > span:nth-child(40) {\n  transition-delay: 2s;\n}\n.animated-title > span:nth-child(41) {\n  transition-delay: 2.05s;\n}\n.animated-title > span:nth-child(42) {\n  transition-delay: 2.1s;\n}\n.animated-title > span:nth-child(43) {\n  transition-delay: 2.15s;\n}\n.animated-title > span:nth-child(44) {\n  transition-delay: 2.2s;\n}\n.animated-title > span:nth-child(45) {\n  transition-delay: 2.25s;\n}\n.animated-title > span:nth-child(46) {\n  transition-delay: 2.3s;\n}\n.animated-title > span:nth-child(47) {\n  transition-delay: 2.35s;\n}\n.animated-title > span:nth-child(48) {\n  transition-delay: 2.4s;\n}\n.animated-title > span:nth-child(49) {\n  transition-delay: 2.45s;\n}\n.animated-title > span:nth-child(50) {\n  transition-delay: 2.5s;\n}\n.animated-title > span:nth-child(51) {\n  transition-delay: 2.55s;\n}\n.animated-title > span:nth-child(52) {\n  transition-delay: 2.6s;\n}\n.animated-title > span:nth-child(53) {\n  transition-delay: 2.65s;\n}\n.animated-title > span:nth-child(54) {\n  transition-delay: 2.7s;\n}\n.animated-title > span:nth-child(55) {\n  transition-delay: 2.75s;\n}\n.animated-title > span:nth-child(56) {\n  transition-delay: 2.8s;\n}\n.animated-title > span:nth-child(57) {\n  transition-delay: 2.85s;\n}\n.animated-title > span:nth-child(58) {\n  transition-delay: 2.9s;\n}\n.animated-title > span:nth-child(59) {\n  transition-delay: 2.95s;\n}\n.animated-title > span:nth-child(60) {\n  transition-delay: 3s;\n}\n.animated-title > span:nth-child(61) {\n  transition-delay: 3.05s;\n}\n.animated-title > span:nth-child(62) {\n  transition-delay: 3.1s;\n}\n.animated-title > span:nth-child(63) {\n  transition-delay: 3.15s;\n}\n.animated-title > span:nth-child(64) {\n  transition-delay: 3.2s;\n}\n.animated-title > span:nth-child(65) {\n  transition-delay: 3.25s;\n}\n.animated-title > span:nth-child(66) {\n  transition-delay: 3.3s;\n}\n.animated-title > span:nth-child(67) {\n  transition-delay: 3.35s;\n}\n.animated-title > span:nth-child(68) {\n  transition-delay: 3.4s;\n}\n.animated-title > span:nth-child(69) {\n  transition-delay: 3.45s;\n}\n.animated-title > span:nth-child(70) {\n  transition-delay: 3.5s;\n}\n.animated-title > span:nth-child(71) {\n  transition-delay: 3.55s;\n}\n.animated-title > span:nth-child(72) {\n  transition-delay: 3.6s;\n}\n.animated-title > span:nth-child(73) {\n  transition-delay: 3.65s;\n}\n.animated-title > span:nth-child(74) {\n  transition-delay: 3.7s;\n}\n.animated-title > span:nth-child(75) {\n  transition-delay: 3.75s;\n}\n.animated-title > span:nth-child(76) {\n  transition-delay: 3.8s;\n}\n.animated-title > span:nth-child(77) {\n  transition-delay: 3.85s;\n}\n.animated-title > span:nth-child(78) {\n  transition-delay: 3.9s;\n}\n.animated-title > span:nth-child(79) {\n  transition-delay: 3.95s;\n}\n.animated-title > span:nth-child(80) {\n  transition-delay: 4s;\n}\n.animated-title > span:nth-child(81) {\n  transition-delay: 4.05s;\n}\n.animated-title > span:nth-child(82) {\n  transition-delay: 4.1s;\n}\n.animated-title > span:nth-child(83) {\n  transition-delay: 4.15s;\n}\n.animated-title > span:nth-child(84) {\n  transition-delay: 4.2s;\n}\n.animated-title > span:nth-child(85) {\n  transition-delay: 4.25s;\n}\n.animated-title > span:nth-child(86) {\n  transition-delay: 4.3s;\n}\n.animated-title > span:nth-child(87) {\n  transition-delay: 4.35s;\n}\n.animated-title > span:nth-child(88) {\n  transition-delay: 4.4s;\n}\n.animated-title > span:nth-child(89) {\n  transition-delay: 4.45s;\n}\n.animated-title > span:nth-child(90) {\n  transition-delay: 4.5s;\n}\n.animated-title > span:nth-child(91) {\n  transition-delay: 4.55s;\n}\n.animated-title > span:nth-child(92) {\n  transition-delay: 4.6s;\n}\n.animated-title > span:nth-child(93) {\n  transition-delay: 4.65s;\n}\n.animated-title > span:nth-child(94) {\n  transition-delay: 4.7s;\n}\n.animated-title > span:nth-child(95) {\n  transition-delay: 4.75s;\n}\n.animated-title > span:nth-child(96) {\n  transition-delay: 4.8s;\n}\n.animated-title > span:nth-child(97) {\n  transition-delay: 4.85s;\n}\n.animated-title > span:nth-child(98) {\n  transition-delay: 4.9s;\n}\n.animated-title > span:nth-child(99) {\n  transition-delay: 4.95s;\n}\n.animated-title > span:nth-child(100) {\n  transition-delay: 5s;\n}\n.animated-title > span:nth-child(101) {\n  transition-delay: 5.05s;\n}\n.animated-title > span:nth-child(102) {\n  transition-delay: 5.1s;\n}\n.animated-title > span:nth-child(103) {\n  transition-delay: 5.15s;\n}\n.animated-title > span:nth-child(104) {\n  transition-delay: 5.2s;\n}\n.animated-title > span:nth-child(105) {\n  transition-delay: 5.25s;\n}\n.animated-title > span:nth-child(106) {\n  transition-delay: 5.3s;\n}\n.animated-title > span:nth-child(107) {\n  transition-delay: 5.35s;\n}\n.animated-title > span:nth-child(108) {\n  transition-delay: 5.4s;\n}\n.animated-title > span:nth-child(109) {\n  transition-delay: 5.45s;\n}\n.animated-title > span:nth-child(110) {\n  transition-delay: 5.5s;\n}\n.animated-title > span:nth-child(111) {\n  transition-delay: 5.55s;\n}\n.animated-title > span:nth-child(112) {\n  transition-delay: 5.6s;\n}\n.animated-title > span:nth-child(113) {\n  transition-delay: 5.65s;\n}\n.animated-title > span:nth-child(114) {\n  transition-delay: 5.7s;\n}\n.animated-title > span:nth-child(115) {\n  transition-delay: 5.75s;\n}\n.animated-title > span:nth-child(116) {\n  transition-delay: 5.8s;\n}\n.animated-title > span:nth-child(117) {\n  transition-delay: 5.85s;\n}\n.animated-title > span:nth-child(118) {\n  transition-delay: 5.9s;\n}\n.animated-title > span:nth-child(119) {\n  transition-delay: 5.95s;\n}\n.animated-title > span:nth-child(120) {\n  transition-delay: 6s;\n}\n.animated-title > span:nth-child(121) {\n  transition-delay: 6.05s;\n}\n.animated-title > span:nth-child(122) {\n  transition-delay: 6.1s;\n}\n.animated-title > span:nth-child(123) {\n  transition-delay: 6.15s;\n}\n.animated-title > span:nth-child(124) {\n  transition-delay: 6.2s;\n}\n.animated-title > span:nth-child(125) {\n  transition-delay: 6.25s;\n}\n.animated-title > span:nth-child(126) {\n  transition-delay: 6.3s;\n}\n.animated-title > span:nth-child(127) {\n  transition-delay: 6.35s;\n}\n.animated-title > span:nth-child(128) {\n  transition-delay: 6.4s;\n}\n.animated-title > span:nth-child(129) {\n  transition-delay: 6.45s;\n}\n.animated-title > span:nth-child(130) {\n  transition-delay: 6.5s;\n}\n.animated-title > span:nth-child(131) {\n  transition-delay: 6.55s;\n}\n.animated-title > span:nth-child(132) {\n  transition-delay: 6.6s;\n}\n.animated-title > span:nth-child(133) {\n  transition-delay: 6.65s;\n}\n.animated-title > span:nth-child(134) {\n  transition-delay: 6.7s;\n}\n.animated-title > span:nth-child(135) {\n  transition-delay: 6.75s;\n}\n.animated-title > span:nth-child(136) {\n  transition-delay: 6.8s;\n}\n.animated-title > span:nth-child(137) {\n  transition-delay: 6.85s;\n}\n.animated-title > span:nth-child(138) {\n  transition-delay: 6.9s;\n}\n.animated-title > span:nth-child(139) {\n  transition-delay: 6.95s;\n}\n.animated-title > span:nth-child(140) {\n  transition-delay: 7s;\n}\n.animated-title > span:nth-child(141) {\n  transition-delay: 7.05s;\n}\n.animated-title > span:nth-child(142) {\n  transition-delay: 7.1s;\n}\n.animated-title > span:nth-child(143) {\n  transition-delay: 7.15s;\n}\n.animated-title > span:nth-child(144) {\n  transition-delay: 7.2s;\n}\n.animated-title > span:nth-child(145) {\n  transition-delay: 7.25s;\n}\n.animated-title > span:nth-child(146) {\n  transition-delay: 7.3s;\n}\n.animated-title > span:nth-child(147) {\n  transition-delay: 7.35s;\n}\n.animated-title > span:nth-child(148) {\n  transition-delay: 7.4s;\n}\n.animated-title > span:nth-child(149) {\n  transition-delay: 7.45s;\n}\n.animated-title > span:nth-child(150) {\n  transition-delay: 7.5s;\n}\n.animated-title > span:nth-child(151) {\n  transition-delay: 7.55s;\n}\n.animated-title > span:nth-child(152) {\n  transition-delay: 7.6s;\n}\n.animated-title > span:nth-child(153) {\n  transition-delay: 7.65s;\n}\n.animated-title > span:nth-child(154) {\n  transition-delay: 7.7s;\n}\n.animated-title > span:nth-child(155) {\n  transition-delay: 7.75s;\n}\n.animated-title > span:nth-child(156) {\n  transition-delay: 7.8s;\n}\n.animated-title > span:nth-child(157) {\n  transition-delay: 7.85s;\n}\n.animated-title > span:nth-child(158) {\n  transition-delay: 7.9s;\n}\n.animated-title > span:nth-child(159) {\n  transition-delay: 7.95s;\n}\n.animated-title > span:nth-child(160) {\n  transition-delay: 8s;\n}\n.animated-title > span:nth-child(161) {\n  transition-delay: 8.05s;\n}\n.animated-title > span:nth-child(162) {\n  transition-delay: 8.1s;\n}\n.animated-title > span:nth-child(163) {\n  transition-delay: 8.15s;\n}\n.animated-title > span:nth-child(164) {\n  transition-delay: 8.2s;\n}\n.animated-title > span:nth-child(165) {\n  transition-delay: 8.25s;\n}\n.animated-title > span:nth-child(166) {\n  transition-delay: 8.3s;\n}\n.animated-title > span:nth-child(167) {\n  transition-delay: 8.35s;\n}\n.animated-title > span:nth-child(168) {\n  transition-delay: 8.4s;\n}\n.animated-title > span:nth-child(169) {\n  transition-delay: 8.45s;\n}\n.animated-title > span:nth-child(170) {\n  transition-delay: 8.5s;\n}\n.animated-title > span:nth-child(171) {\n  transition-delay: 8.55s;\n}\n.animated-title > span:nth-child(172) {\n  transition-delay: 8.6s;\n}\n.animated-title > span:nth-child(173) {\n  transition-delay: 8.65s;\n}\n.animated-title > span:nth-child(174) {\n  transition-delay: 8.7s;\n}\n.animated-title > span:nth-child(175) {\n  transition-delay: 8.75s;\n}\n.animated-title > span:nth-child(176) {\n  transition-delay: 8.8s;\n}\n.animated-title > span:nth-child(177) {\n  transition-delay: 8.85s;\n}\n.animated-title > span:nth-child(178) {\n  transition-delay: 8.9s;\n}\n.animated-title > span:nth-child(179) {\n  transition-delay: 8.95s;\n}\n.animated-title > span:nth-child(180) {\n  transition-delay: 9s;\n}\n.animated-title > span:nth-child(181) {\n  transition-delay: 9.05s;\n}\n.animated-title > span:nth-child(182) {\n  transition-delay: 9.1s;\n}\n.animated-title > span:nth-child(183) {\n  transition-delay: 9.15s;\n}\n.animated-title > span:nth-child(184) {\n  transition-delay: 9.2s;\n}\n.animated-title > span:nth-child(185) {\n  transition-delay: 9.25s;\n}\n.animated-title > span:nth-child(186) {\n  transition-delay: 9.3s;\n}\n.animated-title > span:nth-child(187) {\n  transition-delay: 9.35s;\n}\n.animated-title > span:nth-child(188) {\n  transition-delay: 9.4s;\n}\n.animated-title > span:nth-child(189) {\n  transition-delay: 9.45s;\n}\n.animated-title > span:nth-child(190) {\n  transition-delay: 9.5s;\n}\n.animated-title > span:nth-child(191) {\n  transition-delay: 9.55s;\n}\n.animated-title > span:nth-child(192) {\n  transition-delay: 9.6s;\n}\n.animated-title > span:nth-child(193) {\n  transition-delay: 9.65s;\n}\n.animated-title > span:nth-child(194) {\n  transition-delay: 9.7s;\n}\n.animated-title > span:nth-child(195) {\n  transition-delay: 9.75s;\n}\n.animated-title > span:nth-child(196) {\n  transition-delay: 9.8s;\n}\n.animated-title > span:nth-child(197) {\n  transition-delay: 9.85s;\n}\n.animated-title > span:nth-child(198) {\n  transition-delay: 9.9s;\n}\n.animated-title > span:nth-child(199) {\n  transition-delay: 9.95s;\n}\n.animated-title > span:nth-child(200) {\n  transition-delay: 10s;\n}\n.animated-title > span:nth-child(201) {\n  transition-delay: 10.05s;\n}\n.animated-title > span:nth-child(202) {\n  transition-delay: 10.1s;\n}\n.animated-title > span:nth-child(203) {\n  transition-delay: 10.15s;\n}\n.animated-title > span:nth-child(204) {\n  transition-delay: 10.2s;\n}\n.animated-title > span:nth-child(205) {\n  transition-delay: 10.25s;\n}\n.animated-title > span:nth-child(206) {\n  transition-delay: 10.3s;\n}\n.animated-title > span:nth-child(207) {\n  transition-delay: 10.35s;\n}\n.animated-title > span:nth-child(208) {\n  transition-delay: 10.4s;\n}\n.animated-title > span:nth-child(209) {\n  transition-delay: 10.45s;\n}\n.animated-title > span:nth-child(210) {\n  transition-delay: 10.5s;\n}\n.animated-title > span:nth-child(211) {\n  transition-delay: 10.55s;\n}\n.animated-title > span:nth-child(212) {\n  transition-delay: 10.6s;\n}\n.animated-title > span:nth-child(213) {\n  transition-delay: 10.65s;\n}\n.animated-title > span:nth-child(214) {\n  transition-delay: 10.7s;\n}\n.animated-title > span:nth-child(215) {\n  transition-delay: 10.75s;\n}\n.animated-title > span:nth-child(216) {\n  transition-delay: 10.8s;\n}\n.animated-title > span:nth-child(217) {\n  transition-delay: 10.85s;\n}\n.animated-title > span:nth-child(218) {\n  transition-delay: 10.9s;\n}\n.animated-title > span:nth-child(219) {\n  transition-delay: 10.95s;\n}\n.animated-title > span:nth-child(220) {\n  transition-delay: 11s;\n}\n.animated-title > span:nth-child(221) {\n  transition-delay: 11.05s;\n}\n.animated-title > span:nth-child(222) {\n  transition-delay: 11.1s;\n}\n.animated-title > span:nth-child(223) {\n  transition-delay: 11.15s;\n}\n.animated-title > span:nth-child(224) {\n  transition-delay: 11.2s;\n}\n.animated-title > span:nth-child(225) {\n  transition-delay: 11.25s;\n}\n.animated-title > span:nth-child(226) {\n  transition-delay: 11.3s;\n}\n.animated-title > span:nth-child(227) {\n  transition-delay: 11.35s;\n}\n.animated-title > span:nth-child(228) {\n  transition-delay: 11.4s;\n}\n.animated-title > span:nth-child(229) {\n  transition-delay: 11.45s;\n}\n.animated-title > span:nth-child(230) {\n  transition-delay: 11.5s;\n}\n.animated-title > span:nth-child(231) {\n  transition-delay: 11.55s;\n}\n.animated-title > span:nth-child(232) {\n  transition-delay: 11.6s;\n}\n.animated-title > span:nth-child(233) {\n  transition-delay: 11.65s;\n}\n.animated-title > span:nth-child(234) {\n  transition-delay: 11.7s;\n}\n.animated-title > span:nth-child(235) {\n  transition-delay: 11.75s;\n}\n.animated-title > span:nth-child(236) {\n  transition-delay: 11.8s;\n}\n.animated-title > span:nth-child(237) {\n  transition-delay: 11.85s;\n}\n.animated-title > span:nth-child(238) {\n  transition-delay: 11.9s;\n}\n.animated-title > span:nth-child(239) {\n  transition-delay: 11.95s;\n}\n.animated-title > span:nth-child(240) {\n  transition-delay: 12s;\n}\n.animated-title > span:nth-child(241) {\n  transition-delay: 12.05s;\n}\n.animated-title > span:nth-child(242) {\n  transition-delay: 12.1s;\n}\n.animated-title > span:nth-child(243) {\n  transition-delay: 12.15s;\n}\n.animated-title > span:nth-child(244) {\n  transition-delay: 12.2s;\n}\n.animated-title > span:nth-child(245) {\n  transition-delay: 12.25s;\n}\n.animated-title > span:nth-child(246) {\n  transition-delay: 12.3s;\n}\n.animated-title > span:nth-child(247) {\n  transition-delay: 12.35s;\n}\n.animated-title > span:nth-child(248) {\n  transition-delay: 12.4s;\n}\n.animated-title > span:nth-child(249) {\n  transition-delay: 12.45s;\n}\n.animated-title > span:nth-child(250) {\n  transition-delay: 12.5s;\n}\n.animated-title > span:nth-child(251) {\n  transition-delay: 12.55s;\n}\n.animated-title > span:nth-child(252) {\n  transition-delay: 12.6s;\n}\n.animated-title > span:nth-child(253) {\n  transition-delay: 12.65s;\n}\n.animated-title > span:nth-child(254) {\n  transition-delay: 12.7s;\n}\n.animated-title > span:nth-child(255) {\n  transition-delay: 12.75s;\n}\n.animated-title.slide-in {\n  opacity: 1;\n}\n.animated-title.slide-in > span > span {\n  transform: translateY(0);\n}";
styleInject(css_248z$9);

function Animated_text(props) {
    var titleRef = useRef(null);
    useEffect(function () {
        var titleElement = titleRef.current;
        if (titleElement && "IntersectionObserver" in window) {
            var observer_1 = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.intersectionRatio > 0) {
                        titleElement.classList.add("slide-in");
                        observer_1.unobserve(titleElement);
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
    useEffect(function () {
        var titleElement = titleRef.current;
        if (titleElement) {
            breakTextIntoWords(titleElement);
        }
    }, [props.text]);
    return (React.createElement(React.Fragment, null, props.variant === "h1" ? (React.createElement("h1", { ref: titleRef, className: "animated-title", style: __assign$1({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "h2" ? (React.createElement("h2", { ref: titleRef, className: "animated-title", style: __assign$1({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "h3" ? (React.createElement("h3", { ref: titleRef, className: "animated-title", style: __assign$1({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "h4" ? (React.createElement("h4", { ref: titleRef, className: "animated-title", style: __assign$1({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "p" ? (React.createElement("p", { ref: titleRef, className: "animated-title", style: __assign$1({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : ("")));
}
function breakTextIntoWords(text) {
    var words = (text.innerText || "").trim().split(" ");
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
}
//test

var css_248z$8 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-footer-main-link-font-weight: 800;\n  --a-footer-main-link-font-size: clamp(1rem, 3.25vw, 1.2rem);\n  --a-footer-main-link-line-height: 24px;\n  --a-footer-main-link-color: #4cbfa6;\n  --a-footer-main-link-margin-botton: 5px;\n  --a-footer-secondary-link-font-weight: 600;\n  --a-footer-secondary-link-font-size: clamp(1rem, 3.25vw, 1.1rem);\n  --a-footer-secondary-link-line-height: 24px;\n  --a-footer-secondary-link-color: #301008;\n}\n\n.a-footer-link .main-link {\n  font-weight: var(--a-footer-main-link-font-weight);\n  font-size: var(--a-footer-main-link-font-size);\n  line-height: var(--a-footer-main-link-line-height);\n  color: var(--a-footer-main-link-color);\n  margin-bottom: var(--a-footer-main-link-margin-botton);\n}\n.a-footer-link .secondary-link {\n  font-weight: var(--a-footer-secondary-link-font-weight);\n  font-size: var(--a-footer-secondary-link-font-size);\n  line-height: var(--a-footer-secondary-link-line-height);\n  color: var(--a-footer-secondary-link-color);\n}";
styleInject(css_248z$8);

function Footer_link(props) {
    return (React.createElement("div", { className: "a-footer-link" },
        props.link_type === "main" ? (React.createElement("div", { className: "main-link" }, props.link)) : (""),
        props.link_type === "secondary" ? (React.createElement("div", { className: "secondary-link" }, props.link)) : ("")));
}

var css_248z$7 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-logo-background: white;\n  --a-logo-border-radius: 10px;\n  --a-logo-padding: 24px;\n  --a-logo-box-shadow-transition: 0.37s;\n  --a-logo-box-shadow: 0px 0px 24px rgba(255, 255, 255, 0.6);\n  --a-logo-image-hover-transition: 0.2s;\n  --a-logo-box-shadow-hover: 0px 0px 40px rgba(255, 255, 255, 0.6);\n  --a-logo-image-transform-hover: scale(1.15);\n}\n\n.a-logo {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background: var(--a-logo-background);\n  padding: var(--a-logo-padding);\n  z-index: 2;\n  transition: box-shadow var(--a-logo-box-shadow-transition);\n  border-radius: var(--a-logo-border-radius);\n  box-shadow: var(--a-logo-box-shadow);\n}\n.a-logo img {\n  transform: scale(1);\n  transition: var(--a-logo-image-hover-transition);\n}\n.a-logo:hover {\n  box-shadow: var(--a-logo-box-shadow-hover);\n}\n.a-logo:hover img {\n  transform: var(--a-logo-image-transform-hover);\n}";
styleInject(css_248z$7);

var extraColor = '#{$extra-color}';
function Logo(props) {
    return (React.createElement("div", { className: "a-logo", style: __assign$1(__assign$1({ "--a-logo-border-radius": props["border-radius"], "--a-logo-background": props.background }, props.style), { background: "".concat(extraColor) }) }, props.logo));
}

var css_248z$6 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --a-simple-divider-background: #4cbfa6;\n  --a-simple-divider-height: 3px;\n  --a-simple-divider-width: 100%;\n  --a-simple-divider-animation-duration: 1s;\n  --a-simple-divider-border-radius: 0px;\n}\n\n.a-simple-divider {\n  height: var(--a-simple-divider-height);\n  background: var(--a-simple-divider-background);\n  width: var(--a-simple-divider-width);\n  border-radius: var(--a-simple-divider-border-radius);\n}\n.a-simple-divider.animate {\n  width: 0;\n  animation: var(--a-simple-divider-animation-duration) lineProgress forwards;\n}\n@keyframes lineProgress {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: var(--a-simple-divider-width);\n  }\n}\n.a-simple-divider.animate-vertical {\n  height: 0;\n  animation: var(--a-simple-divider-animation-duration) lineProgressVertical forwards;\n}\n@keyframes lineProgressVertical {\n  0% {\n    height: 0%;\n  }\n  100% {\n    height: var(--a-simple-divider-height);\n  }\n}";
styleInject(css_248z$6);

function SimpleDivider(props) {
    var dividerRef = useRef(null);
    useEffect(function () {
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust this value as per your requirement
        };
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var _a, _b;
                if (entry.isIntersecting) {
                    if (props.animate) {
                        (_a = dividerRef.current) === null || _a === void 0 ? void 0 : _a.classList.add("animate");
                    }
                    if (props["animate-vertical"]) {
                        (_b = dividerRef.current) === null || _b === void 0 ? void 0 : _b.classList.add("animate-vertical");
                    }
                    observer.unobserve(entry.target); // Stop observing once animation is applied
                }
            });
        }, options);
        if (dividerRef.current) {
            observer.observe(dividerRef.current);
        }
        return function () {
            if (dividerRef.current) {
                observer.unobserve(dividerRef.current);
            }
        };
    }, [props.animate, props["animate-vertical"]]);
    return (React.createElement("div", { className: "a-simple-divider", ref: dividerRef, style: __assign$1({ "--a-simple-divider-background": props.color, "--a-simple-divider-height": props.height, "--a-simple-divider-width": props.width, "--a-simple-divider-border-radius": props["border-radius"], "--a-simple-divider-animation-duration": props["animation-duration"] }, props.style) }));
}
// TODO trebuie pus la animatie la simple divider un width care sa poata fi schimbat

var css_248z$5 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --m-footer-link-list-gap: 5px;\n}\n\n.m-footer-link-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  gap: 5px;\n}\n.m-footer-link-list.center {\n  align-items: center;\n}\n.m-footer-link-list.right {\n  align-items: flex-end;\n}";
styleInject(css_248z$5);

function Footer_link_list(props) {
    return (React.createElement("div", { className: "m-footer-link-list ".concat(props.position == 'center' ? 'center' : '').concat(props.position == 'right' ? 'right' : '') }, props.link_element));
}
//test

var css_248z$4 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --footer-card-background: rgba(160, 160, 160, 0.648);\n  --footer-card-padding: 40px;\n  --footer-card-border-radius: 30px;\n  --footer-card-description-margin-top: 20px;\n  --footer-card-action-margin-top: 40px;\n  --footer-card-logo-max-width: 160px;\n  --footer-card-logo-height: 63px;\n}\n\n.footer-card-container {\n  background: var(--footer-card-background);\n  padding: var(--footer-card-padding);\n  border-radius: var(--footer-card-border-radius);\n}\n.footer-card-container .logo {\n  max-width: var(--footer-card-logo-max-width);\n  height: var(--footer-card-logo-height);\n  width: 100%;\n}\n.footer-card-container .description {\n  margin-top: var(--footer-card-description-margin-top);\n}\n.footer-card-container .action {\n  margin-top: var(--footer-card-action-margin-top);\n}";
styleInject(css_248z$4);

function Footer_card(props) {
    return (React.createElement("div", { className: "footer-card-container" },
        React.createElement("div", { className: "logo" }, props.logo),
        React.createElement("div", { className: "description" }, props.description),
        React.createElement("div", { className: "action" }, props.action)));
}

var css_248z$3 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --m-card-background: rgba(255, 255, 255, 0.425);\n  --m-card-padding: 24px;\n  --m-card-box-shadow: 0px 0px 64px -8px rgba(16, 24, 40, 0.16);\n  --m-card-border-radius: 20px 20px 60px 20px;\n  --m-card-content-background: #ffffff;\n  --m-card-height: 100%;\n  --m-card-image-height: 300px;\n  --m-card-image-object-fit: cover;\n  --m-card-labels-margin-top: 24px;\n  --m-card-labels-gap: 8px;\n  --m-card-title-margin-top: 12px;\n  --m-card-description-margin-top: 4px;\n  --m-card-buttons-margin-top: 24px;\n  --m-card-buttons-gap: 16px;\n  --m-card-overlapped-width: 75%;\n  --m-card-overlapped-margin-top: -40px;\n}\n\n.card-container .m-card {\n  position: relative;\n  background: var(--m-card-background);\n  padding: var(--m-card-padding);\n  box-shadow: var(--m-card-box-shadow);\n  border-radius: var(--m-card-border-radius);\n  height: var(--m-card-height);\n  display: flex;\n  flex-direction: column;\n}\n.card-container .m-card.m-card-overlapped {\n  padding: unset;\n  align-items: center;\n  box-shadow: unset;\n}\n.card-container .m-card.m-card-overlapped .image {\n  position: relative;\n}\n.card-container .m-card.m-card-overlapped .content {\n  width: var(--m-card-overlapped-width);\n  position: relative;\n  margin-top: var(--m-card-overlapped-margin-top);\n  box-shadow: var(--m-card-box-shadow);\n  padding: var(--m-card-padding);\n}\n.card-container .m-card.m-card-overlapped .content .labels {\n  margin-top: unset;\n}\n.card-container .m-card.image-full-width {\n  padding: unset;\n}\n.card-container .m-card.image-full-width .content {\n  padding: var(--m-card-padding);\n}\n.card-container .m-card.image-full-width .content .labels {\n  margin-top: unset;\n}\n.card-container .m-card .image {\n  position: relative;\n}\n.card-container .m-card .image img {\n  height: var(--m-card-image-height);\n  object-fit: var(--m-card-image-object-fit);\n}\n.card-container .m-card .content {\n  background: var(--m-card-content-background);\n}\n.card-container .m-card .content .labels {\n  margin-top: var(--m-card-labels-margin-top);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--m-card-labels-gap);\n}\n.card-container .m-card .content .title {\n  margin-top: var(--m-card-title-margin-top);\n}\n.card-container .m-card .content .description {\n  margin-top: var(--m-card-description-margin-top);\n}\n.card-container .m-card .content .buttons {\n  margin-top: var(--m-card-buttons-margin-top);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: var(--m-card-buttons-gap);\n  width: 100%;\n}";
styleInject(css_248z$3);

function Card(props) {
    var imageElement = props.image ? (React.createElement("div", { className: "image" }, props.image)) : null;
    var labelsElement = props.labels ? (React.createElement("div", { className: "labels" }, props.labels)) : null;
    var titleElement = props.title ? (React.createElement("div", { className: "title" }, props.title)) : null;
    var descriptionElement = props.description ? (React.createElement("div", { className: "description" }, props.description)) : null;
    var buttonsElement = props.buttons ? (React.createElement("div", { className: "buttons" }, props.buttons)) : null;
    var cardImageClass = props.image_full_width
        ? "m-card image-full-width"
        : "";
    var isOverlapped = props.is_overlapped ? "m-card m-card-overlapped" : "";
    return (React.createElement("div", { className: "card-container" },
        React.createElement("div", { className: "m-card ".concat(isOverlapped, " ").concat(cardImageClass) },
            imageElement,
            React.createElement("div", { className: "content" },
                labelsElement,
                titleElement,
                descriptionElement,
                buttonsElement))));
}

var css_248z$2 = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --m-title-and-description-label-margin-top: unset;\n  --m-title-and-description-title-margin-top: unset;\n  --m-title-and-description-text-description-margin-top: 12px;\n  --m-title-and-description-action-margin-top: 24px;\n  --m-title-and-description-label-margin-bottom: 12px;\n  --m-title-and-description-title-margin-bottom: 12px;\n  --m-title-and-description-text-description-margin-bottom: unset;\n  --m-title-and-description-action-margin-bottom: unset;\n}\n\n.m-title-and-description {\n  background: unset;\n  padding: unset;\n}\n.m-title-and-description.center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.m-title-and-description.right {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  text-align: right;\n}\n.m-title-and-description .label {\n  margin-top: var(--m-title-and-description-label-margin-top);\n  margin-bottom: var(--m-title-and-description-label-margin-bottom);\n}\n.m-title-and-description .title {\n  margin-top: var(--m-title-and-description-title-margin-top);\n  margin-bottom: var(--m-title-and-description-title-margin-bottom);\n}\n.m-title-and-description .description {\n  margin-top: var(--m-title-and-description-text-description-margin-top);\n  margin-bottom: var(--m-title-and-description-text-description-margin-bottom);\n}\n.m-title-and-description .action {\n  margin-top: var(--m-title-and-description-action-margin-top);\n  margin-bottom: var(--m-title-and-description-action-margin-bottom);\n}";
styleInject(css_248z$2);

function Title_and_description(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "m-title-and-description ".concat(props.text_align === "center" ? 'center' : '', " ").concat(props.text_align === "right" ? "right" : '') },
            props.label ? React.createElement("div", { className: "label" }, props.label) : "",
            props.title ? React.createElement("div", { className: "title" }, props.title) : "",
            props.description ? React.createElement("div", { className: "description" }, props.description) : "",
            props.action ? React.createElement("div", { className: "action" }, props.action) : "")));
}

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function AiOutlineStepBackward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"}}]})(props);
}function AiOutlineStepForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function FaPlay (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function FiPauseCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"10","y1":"15","x2":"10","y2":"9"}},{"tag":"line","attr":{"x1":"14","y1":"15","x2":"14","y2":"9"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function BsArrowsFullscreen (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"}}]})(props);
}

var css_248z$1 = ":root {\n  --a-media-label-top-left-margin-top: 50px;\n  --a-media-label-top-left-margin-left: 50px;\n  --a-media-label-top-right-margin-top: 50px;\n  --a-media-label-top-right-margin-right: 50px;\n  --a-media-label-bottom-left-margin-bottom: 50px;\n  --a-media-label-bottom-left-margin-left: 50px;\n  --a-media-label-bottom-right-margin-top: 50px;\n  --a-media-label-bottom-right-margin-right: 50px;\n  --a-media-image-border-radius: unset;\n  --a-video-progress-line-height: 5px;\n  --a-video-fullscreen-icon-margin-right: 20px;\n  --a-video-fullscreen-icon-margin-bottom: 20px;\n  --a-video-border-radius: unset;\n  --a-video-controls-gap: 24px;\n  --a-video-controls-background: rgba(0, 0, 0, 0.308);\n  --a-video-controls-border-radius: 30px;\n  --a-video-controls-padding: 20px 50px;\n  --a-video-controls-hover-animation: all 0.175s ease-in-out;\n  --a-video-controls-container-height: auto;\n  --a-video-controls-container-width: auto;\n  --a-video-controls-icon-width: 20px;\n  --a-video-controls-icon-height: 20px;\n  --a-video-controls-icon-play-width: 30px;\n  --a-video-controls-icon-play-height: 30px;\n  --a-video-controls-fullscreen-padding: 8px;\n  --a-video-controls-hover-scale: scale(1.5);\n  --a-video-controls-default-scale: scale(1.2);\n  --a-video-fullscreen-icon-color: white;\n  --a-video-controls-icon-color: white;\n  --a-video-controls-play-icon-color: red;\n  --a-video-controls-icon-width-mobile: 10px;\n  --a-video-controls-icon-height-mobile: 10px;\n  --a-video-controls-icon-play-width-mobile: 13px;\n  --a-video-controls-icon-play-height-mobile: 13px;\n  --a-video-controls-padding-mobile: 10px 30px;\n  --a-video-fullscreen-icon-margin-right-mobile: 5px;\n  --a-video-fullscreen-icon-margin-bottom-mobile: 5px;\n  --a-video-controls-container-margin-bottom-mobile: 5px;\n}\n\n.a-media {\n  position: relative;\n  max-width: 100%;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  height: 100%;\n}\n.a-media__video {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.a-media__video .video-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.a-media__video .video-container video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: var(--a-video-object-fit);\n  border-radius: var(--a-video-border-radius);\n}\n.a-media__video .progress-line-container .progress-line {\n  position: absolute;\n  z-index: 10 !important;\n  bottom: 0;\n  left: 0;\n  height: var(--a-video-progress-line-height);\n  background: var(--a-video-progress-line-background);\n}\n.a-media__video .fullscreen-icon {\n  position: absolute;\n  right: var(--a-video-fullscreen-icon-margin-right-mobile);\n  bottom: var(--a-video-fullscreen-icon-margin-bottom-mobile);\n  cursor: pointer;\n  z-index: 5;\n  background-color: var(--a-video-controls-background);\n  padding: var(--a-video-controls-fullscreen-padding);\n  color: var(--a-video-fullscreen-icon-color);\n}\n.a-media__video .fullscreen-icon .controls-icon {\n  width: var(--a-video-controls-icon-width-mobile);\n  height: var(--a-video-controls-icon-height-mobile);\n}\n.a-media__video .controls-container {\n  display: flex;\n  justify-content: center;\n  align-self: flex-end;\n  margin-bottom: var(--a-video-controls-container-margin-bottom-mobile);\n  width: 100%;\n  position: absolute;\n  z-index: 2;\n}\n.a-media__video .controls {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--a-video-controls-gap);\n  background-color: var(--a-video-controls-background);\n  border-radius: var(--a-video-controls-border-radius);\n  width: var(--a-video-controls-container-width);\n  height: var(--a-video-controls-container-height);\n  padding: var(--a-video-controls-padding-mobile);\n}\n.a-media__video .controls .icon-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: var(--a-video-controls-hover-animation);\n}\n.a-media__video .controls .icon-container:hover {\n  transform: var(--a-video-controls-hover-scale);\n  transition: var(--a-video-controls-hover-animation);\n}\n.a-media__video .controls .icon-container:active {\n  transform: var(--a-video-controls-default-scale);\n  transition: var(--a-video-controls-hover-animation);\n}\n.a-media__video .controls .icon-container .controls-icon {\n  width: var(--a-video-controls-icon-width-mobile);\n  height: var(--a-video-controls-icon-height-mobile);\n  color: var(--a-video-controls-icon-color);\n}\n.a-media__video .controls .icon-container .controls-icon.action-icon {\n  width: var(--a-video-controls-icon-play-width-mobile);\n  height: var(--a-video-controls-icon-play-height-mobile);\n  color: var(--a-video-controls-play-icon-color);\n}\n.a-media__video .controls img {\n  width: 100%;\n  height: 100%;\n}\n.a-media__image {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.a-media__image .label {\n  position: absolute;\n}\n.a-media__image .label.top-left {\n  top: var(--a-media-label-top-left-margin-top);\n  left: var(--a-media-label-top-left-margin-left);\n}\n.a-media__image .label.top-right {\n  top: var(--a-media-label-top-right-margin-top);\n  right: var(--a-media-label-top-right-margin-right);\n}\n.a-media__image .label.bottom-left {\n  bottom: var(--a-media-label-bottom-left-margin-bottom);\n  left: var(--a-media-label-bottom-left-margin-left);\n}\n.a-media__image .label.bottom-right {\n  bottom: var(--a-media-label-bottom-right-margin-top);\n  right: var(--a-media-label-bottom-right-margin-right);\n}\n.a-media__image img {\n  width: 100%;\n  height: 100%;\n  border-radius: var(--a-media-image-border-radius);\n}\n\n@media only screen and (min-width: 768px) {\n  .a-media__video .fullscreen-icon {\n    right: var(--a-video-fullscreen-icon-margin-right);\n    bottom: var(--a-video-fullscreen-icon-margin-bottom);\n  }\n  .a-media__video .controls .icon-container .controls-icon {\n    width: var(--a-video-controls-icon-width);\n    height: var(--a-video-controls-icon-height);\n  }\n  .a-media__video .controls .icon-container .controls-icon.action-icon {\n    width: var(--a-video-controls-icon-play-width);\n    height: var(--a-video-controls-icon-play-height);\n  }\n  .a-media__video .controls-container {\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: unset;\n  }\n  .a-media__video .controls-container .controls {\n    padding: var(--a-video-controls-padding);\n  }\n}";
styleInject(css_248z$1);

function Media(props) {
    var _a;
    var videoRef = useRef(null);
    var _b = useState(false), playing = _b[0], setPlaying = _b[1];
    var _c = useState(0), progress = _c[0], setProgress = _c[1];
    var _d = useState((_a = props["show-controls"]) !== null && _a !== void 0 ? _a : false), showControls = _d[0], setShowControls = _d[1];
    var rafRef = useRef(0);
    var videoHandler = function (control) {
        if (videoRef.current) {
            if (control === "play") {
                videoRef.current.play();
                setPlaying(true);
            }
            else if (control === "pause") {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    };
    var updateProgress = function () {
        if (videoRef.current) {
            var currentTime = videoRef.current.currentTime;
            setProgress((currentTime / videoRef.current.duration) * 100);
        }
        rafRef.current = requestAnimationFrame(updateProgress);
    };
    var fastForward = function () {
        if (videoRef.current) {
            videoRef.current.currentTime += 0.5;
        }
    };
    var revert = function () {
        if (videoRef.current) {
            videoRef.current.currentTime -= 0.5;
        }
    };
    useEffect(function () {
        if (videoRef.current) {
            rafRef.current = requestAnimationFrame(updateProgress);
        }
        return function () { return cancelAnimationFrame(rafRef.current); };
    }, []);
    var handleMouseMove = function () {
        setShowControls(true);
    };
    var handleMouseLeave = function () {
        setShowControls(false);
    };
    var handleFullscreen = function () {
        var videoElement = videoRef.current;
        if (videoElement) {
            if (videoElement.requestFullscreen) {
                videoElement
                    .requestFullscreen()
                    .catch(function (error) { return console.log("Fullscreen request failed:", error); });
            }
        }
    };
    return (React.createElement("div", { className: "a-media", onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }, props.video ? (React.createElement("div", { className: "a-media__video", style: __assign$1({ "--a-video-border-radius": props["video-border-radius"] }, props.style) },
        React.createElement("div", { className: "video-container" },
            React.createElement("video", { src: props.video, ref: videoRef, style: __assign$1({ width: "100%", "--a-video-object-fit": props["object-fit"] }, props.style), autoPlay: props["remove-controls"] || props["auto-play"], muted: !!(props["remove-controls"] || props.muted), loop: props.loop })),
        React.createElement("div", { className: "progress-line-container", style: __assign$1({ "--a-video-progress-line-background": props["progress-bar-color"] }, props.style) },
            React.createElement("div", { className: "progress-line", style: { width: "".concat(progress, "%") } })),
        props["remove-controls"] ? null : (showControls && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "fullscreen-icon" }, props["custom-fullscreen-icon"] ? (React.createElement("div", { onClick: handleFullscreen }, props["custom-fullscreen-icon"])) : (React.createElement(BsArrowsFullscreen, { onClick: handleFullscreen, className: "controls-icon" }))),
            React.createElement("div", { className: "controls-container" },
                React.createElement("div", { className: "controls" },
                    React.createElement("div", { className: "icon-container" }, props["custom-prev-icon"] ? (React.createElement("div", { onClick: revert }, props["custom-prev-icon"])) : (React.createElement(AiOutlineStepBackward, { className: "controls-icon", onClick: revert }))),
                    playing ? (React.createElement("div", { className: "icon-container" }, props["custom-pause-icon"] ? (React.createElement("div", { onClick: function () { return videoHandler("pause"); } }, props["custom-pause-icon"])) : (React.createElement(FiPauseCircle, { onClick: function () { return videoHandler("pause"); }, className: "controls-icon action-icon" })))) : (React.createElement("div", { className: "icon-container" }, props["custom-play-icon"] ? (React.createElement("div", { onClick: function () { return videoHandler("play"); } }, props["custom-play-icon"])) : (React.createElement(FaPlay, { onClick: function () { return videoHandler("play"); }, className: "controls-icon action-icon" })))),
                    React.createElement("div", { className: "icon-container" }, props["custom-next-icon"] ? (React.createElement("div", { onClick: fastForward }, props["custom-next-icon"])) : (React.createElement(AiOutlineStepForward, { className: "controls-icon", onClick: fastForward })))))))))) : (React.createElement("div", { className: "a-media__image", style: __assign$1({ "--a-media-image-border-radius": props["image-border-radius"] }, props.style) },
        props["label-top-left"] && React.createElement("div", { className: "label top-left" }, props["label-top-left"]),
        props["label-top-right"] && React.createElement("div", { className: "label top-right" }, props["label-top-right"]),
        props["label-bottom-left"] && React.createElement("div", { className: "label bottom-left" }, props["label-bottom-left"]),
        props["label-bottom-right"] && React.createElement("div", { className: "label bottom-right" }, props["label-bottom-right"]),
        props.image))));
}

var css_248z = ".styleguide p {\n  font-size: clamp(1rem, 3.25vw, 1.25rem);\n}\n.styleguide h1 {\n  font-size: clamp(1.6rem, 4vw, 3rem);\n}\n.styleguide h2 {\n  font-size: clamp(1.4rem, 3.5vw, 2.7rem);\n}\n.styleguide h3 {\n  font-size: clamp(1.2rem, 3.25vw, 2.5rem);\n}\n.styleguide h4 {\n  font-size: clamp(1.1rem, 2.9vw, 2rem);\n}\n.styleguide .label {\n  font-size: 5px;\n}\n\n.styleguide h1, .styleguide h2, .styleguide h3, .styleguide h4, .styleguide h5, .styleguide h6, .styleguide p {\n  padding: unset;\n  margin: unset;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: unset;\n  padding: unset;\n}\n\n:root {\n  --m-divider-width: 100%;\n  --m-divider-padding: unset;\n}\n\n.m-divider {\n  width: var(--m-divider-width);\n  padding: var(--m-divider-padding);\n}\n.m-divider.left {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.m-divider.center {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.m-divider.right {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.m-divider.vertical.center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.m-divider.vertical.top {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.m-divider.vertical.bottom {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n}";
styleInject(css_248z);

function Divider(props) {
    var dividerRef = useRef(null);
    useEffect(function () {
        var handleResize = function () {
            var _a, _b;
            if (dividerRef.current && props.vertical) {
                var parentHeight = (_b = (_a = dividerRef.current.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.offsetHeight;
                dividerRef.current.style.height = "".concat(parentHeight, "px");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, [props.vertical]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: dividerRef, className: "m-divider ".concat(props.vertical ? "vertical" : "", " ").concat(props.position), style: __assign$1({ "--m-divider-width": props.width }, props.style) }, props.divider)));
}
// TODO de facut o animatie care sa plece de la 50px de ex si sa se duca pana la 1
// TODO trebuie un apdding pe ambele versiuni
// TODO in loc de left/right la vertical, trebuie pus top/right cumva

export { Animated_text, Button_Line_Drawing, Button_Slide_Second, Button_slide, Card, Description, Divider, FAQ_item, Footer_card, Footer_link, Footer_link_list, Label, Logo, Media, SimpleDivider as Simple_Divider, Title_and_description };
//# sourceMappingURL=index.js.map
