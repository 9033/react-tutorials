import React, { Component } from "react";
import './Menu.css';

/*
class 를 변경해서 css에 지정한 대로 매뉴가 보이거나 숨겨짐.
 */
class Menu extends Component{
    render(){
        console.log("rendering : Menu");
        var visibility="hide";
        if(this.props.menuVisibility){
            visibility="show";
        }

        return (
            <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown}
            className={visibility}>
                <h2><a href="../../">Home</a></h2>
                <h2><a href="/">About</a></h2>
                <h2><a href="/">Contact</a></h2>
                <h2><a href="/">Search</a></h2>
            </div>
        );
    }
}

export default Menu;