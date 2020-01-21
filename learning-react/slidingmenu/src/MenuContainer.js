import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

/*
메뉴가 보이는지 안보이는지 상태를 저장.
그 상태를 메뉴와 버튼이 공통으로 접근할 수 있는 위치인 이 컨테이너에 저장.

메뉴 버튼을 누를때와 메뉴를 누를때마다
매뉴가 보이는 상태를 toggle
 */
class MenuContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            visible:false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    handleMouseDown(e){
        console.log("clicked");
        if(e.target.innerText==='Home'){// 메뉴를 다시 그리지 않고 링크가 실행되게 함. 여기서는 셈플이 모여있는 페이지가 있어서 동작하게 함.
            return;
        }
        this.toggleMenu();
        e.stopPropagation();// Menu를 다시 그리기 때문에 호출이 무의미 한거 같다.
    }

    toggleMenu(){
        this.setState({
            visible:!this.state.visible
        });
    }

    render(){
        console.log("rendering : MenuContainer");
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                <div>
                    <p>youtube</p>
                    <ul>
                        <li>심영</li>
                        <li>김두한</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;