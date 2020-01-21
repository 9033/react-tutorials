import React, { Component } from "react";
// import React, { PureComponent } from "react";
import './MenuButton.css';

// class MenuButton extends PureComponent{
class MenuButton extends Component{
    /*
    불필요한 render호출을 막기 위해
    속성이 바뀌었을때만 render를 호출하게 한다.

    혹은 Component대신 PureComponent를 사용한다.
    */    
    shouldComponentUpdate(nextProps,nextState){
        return !nextProps.handleMouseDown===this.props.handleMouseDown;
    }
    render(){
        console.log("rendering : MenuButton");
        return (
            <button id="roundButton"
            onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;