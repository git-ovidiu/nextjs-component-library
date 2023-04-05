import React from "react";
import "./Testing.scss";

export interface TestingProps {
  test: string;
}

export default function Testing(props: TestingProps) {
  return (
    <>
        <div className="test-container" style={{color: "red"}}>
          {props.test}
        </div>
    </>
  );
}
