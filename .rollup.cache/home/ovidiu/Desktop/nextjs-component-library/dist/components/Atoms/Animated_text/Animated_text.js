import React, { useEffect, useRef } from "react";
import "./Animated_text.scss";
export default function Animated_text(props) {
    var titleRef = useRef(null);
    useEffect(function () {
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
    useEffect(function () {
        var titleElement = titleRef.current;
        if (titleElement) {
            breakTextIntoWords(titleElement);
        }
    }, [props.text]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "tot" },
            React.createElement("h2", null, "cacat"),
            React.createElement("h1", { ref: titleRef, className: "animated-title" }, props.text))));
}
//# sourceMappingURL=Animated_text.js.map