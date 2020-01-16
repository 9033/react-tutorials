import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state={
            items:[]//사용자의 입력을 저장.
        };

        //그냥 Date.now()로 하면 같은 값으로 key가 생성되서 random함수도 이용.
        this.state.items.unshift({key:Math.floor(Math.random()*10000000),text:"sample 1"});
        this.state.items.unshift({key:Math.floor(Math.random()*10000000),text:"sample 2"});
        this.state.items.unshift({key:Math.floor(Math.random()*10000000),text:"sample 3"});
        this.state.items.unshift({key:Math.floor(Math.random()*10000000),text:"sample 4"});
        this.state.items.unshift({key:Math.floor(Math.random()*10000000),text:"sample 5"});
        this.state.items.unshift({key:Math.floor(Math.random()*10000000),text:"sample 6"});

        console.log(this.state);

        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    addItem(e){//폼이 제출되면 호출.
        var itemArray = this.state.items;

        if(this._inputElement.value!==""){
            itemArray.unshift({
                text:this._inputElement.value,
                key:Date.now()*100+Math.floor(Math.random()*100)
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value='';
        }

        console.log(itemArray);

        e.preventDefault();//폼이 submit될때 새로고치는 이벤트를 막는다.
    }

    deleteItem(key){
        var filteredItems=this.state.items.filter((item)=>(item.key!==key)); //삭제하려는 key와 같은 것만 빼고 배열을 만듬.

        this.setState({
            items: filteredItems
        });
    }

    render(){
        /*
        폼에 onSubmit에 함수를 바인드. 제출하면 실행하게 함.
        제출하면 기본적으로 refresh하지 않게 이벤트를 사용하지 않게함.
        */
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="enter task"
                            ref={(a)=>this._inputElement=a}>
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>                
                <TodoItems entries={this.state.items}                
                delete = {this.deleteItem} /* 실제로 호출할 함수를 props로 전달*//>
            </div>
        );
    }
}

export default TodoList;