import React from "react";
import ReactDOM from "react-dom";
import IPAddressContainer from "./IPAddressContainer";//호출할 컴포넌트를 임포트
import "./index.css";

var destination = document.body.querySelector("#container");

ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
);