import React,{Component} from "react";
import "./HelloWorld.css";//이 컴포넌트에 사용하는 css

function randint(i){
    return Math.floor(Math.random()*i);
}

class HelloWorld extends Component{
    constructor(props){
        let words = [];
        words.push(['국민 여려분','미사일을 쐈습니다','라면 사십시요','방독면 챙기십쇼']);
        words.push(['형님 형님','형님']);
        words.push(['내 나라는','내가 지킨다 하는','의지와 자신감을 가지고 있어야','국방이 되는것이지']);
        words.push(['여긴 중환자실입니다','전화는 없어요']);
        words.push(['$1','$4','$2','$4','$3','$4','ok 4$','ok thank you!']);

        super(props);

        this.state={
            strs : words[randint(words.length)],
            i : 0
        };

        this.changeI = this.changeI.bind(this);
    }
    changeI(){
        this.setState({
            i: (this.state.i+1)%this.state.strs.length
        });
    }
    componentDidMount(){ //컴포넌트가 렌더링 된 후에 한번 실행된다.
        setInterval(this.changeI,1000);
    }
    render(){
        return (
            <div className="helloContainer">
                <h1>{this.state.strs[this.state.i]}</h1>
                <h2>press F5</h2>
            </div>
        );
    }
}

export default HelloWorld;