import {__assign} from "tslib";
import React, {useEffect, useRef} from "react";
import "./Animated_text.scss";

export default function Animated_text(props) {
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
    return (React.createElement(React.Fragment, null, props.variant === "h1" ? (React.createElement("h1", { ref: titleRef, className: "animated-title", style: __assign({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "h2" ? (React.createElement("h2", { ref: titleRef, className: "animated-title", style: __assign({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "h3" ? (React.createElement("h3", { ref: titleRef, className: "animated-title", style: __assign({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "h4" ? (React.createElement("h4", { ref: titleRef, className: "animated-title", style: __assign({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : props.variant === "p" ? (React.createElement("p", { ref: titleRef, className: "animated-title", style: __assign({ "--a-animated-text-color": props.color }, props.style) }, props.text)) : ("")));
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
//# sourceMappingURL=Animated_text.js.map