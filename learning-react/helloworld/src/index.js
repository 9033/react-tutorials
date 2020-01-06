import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";//호출할 컴포넌트를 임포트
import "./index.css";

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById("root")
);