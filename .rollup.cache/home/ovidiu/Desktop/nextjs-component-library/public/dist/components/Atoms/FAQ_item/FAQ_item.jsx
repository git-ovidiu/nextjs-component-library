import React from "react";
import "./FAQ_item.scss";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
export default function FAQ_item(props) {
    var _a = React.useState(false), toggle = _a[0], setToggle = _a[1];
    var _b = useState([]), titles = _b[0], setTitles = _b[1];
    useEffect(function () {
        var titles = document.querySelectorAll('.animated-title');
        setTitles(Array.from(titles));
    }, []);
    var breakTextIntoWords = function (text) {
        var words = text.innerText.trim().split(' ');
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
    useEffect(function () {
        if (titles.length > 0) {
            initializeAnimatedTitle();
            addAnimatedTitleObserver();
        }
    }, [titles]);
    var toggleFaq = function () {
        setToggle(function (prevToggle) { return !prevToggle; });
    };
    return (<motion.div className={"faq-item ".concat(toggle ? 'toggle' : '')} onClick={toggleFaq} initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="hidden-text animated-title">{props.description}</div>
      </div>
      <div className="arrow">{props.arrow}</div>
      <div className="close">{props.close}</div>
    </motion.div>);
}
//# sourceMappingURL=FAQ_item.jsx.map