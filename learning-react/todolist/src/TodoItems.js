/*
아이템의 목록을 보여줌.
 */

import React, { Component } from "react";
import "./TodoList.css";
import FlipMove from 'react-flip-move';//리엑트에 간단하게 추가할 수 있는 에니메이션 

class TodoItems extends Component{
    constructor(props){
        super(props);

        this.createTasks=this.createTasks.bind(this);
    }

    delete(key){
        this.props.delete(key);//또다른 컴포넌트의 delete함수를 호출.
    }

    createTasks(item){
        return <li onClick={()=>this.delete(item.key)} key={item.key}>{item.text}</li>
    }
    render(){
        var todoEntries=this.props.entries;
        var listItems=todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );        
    }
}

export default TodoItems;