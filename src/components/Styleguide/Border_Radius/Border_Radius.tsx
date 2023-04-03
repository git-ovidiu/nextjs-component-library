import React from "react";
import "./Border_Radius.scss";


export default function Border_Radius() {
  return (
    <>
        <div className="border-radius-container">
            <div className="border-radius-small-container border-radius-0">0</div>
            <div className="border-radius-small-container border-radius-xs">xs</div>
            <div className="border-radius-small-container border-radius-s">s</div>
            <div className="border-radius-small-container border-radius-m">m</div>
            <div className="border-radius-small-container border-radius-l">l</div>
            <div className="border-radius-small-container border-radius-xl">xl</div>
            <div className="border-radius-small-container border-radius-xxl">xxl</div>
            <div className="border-radius-small-container border-radius-xxxl">xxxl</div>
        </div>
    </>
  );
}
