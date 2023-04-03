import React from "react";
import "./Colors.scss";


export default function Colors() {
  return (
    <>
        <div className="colors-container">
            <div className="small-container">
                <p className="title">Primary</p>
                <div className="color-only primary"></div>
            </div>
            <div className="small-container">
                <p className="title">Secondary</p>
                <div className="color-only secondary"></div>
            </div>
            <div className="small-container">
                <p className="title">Tertiary</p>
                <div className="color-only tertiary"></div>
            </div>
            <div className="small-container">
                <p className="title">Extra</p>
                <div className="color-only extra"></div>
            </div>
        </div>
    </>
  );
}
