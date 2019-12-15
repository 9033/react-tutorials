import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
3가지 컴포넌트.

react 컴포넌트는
prop라는 매개변수를 받고
render함수를 통해 반환.
*/
var s="미사일라면방독면⏬"
  class Square extends React.Component {//<button>을 렌더링. 클릭하면 경고창.
    constructor(props){//무언가를 ㄱ하기 위해 컴포넌트는 state를 사용.
      super (props);//생성자에서 super는 반드시.
      this.state = {
        value:null,
      };
    }

    //setState가 호출되면 React에게 Square가 다시 렌더링하라고 알림.
    render() {
      return (
        <button
          className="square" 
          onClick={() => this.setState({value: this.props.value }) }
        >
          {this.state.value}
        </button>
      );//prop을 전달 : 부모 -> 자식 컴포넌트. this.state.value 의 값을 렌더링.
    }
  }
  
  class Board extends React.Component {//4각형 9개를 렌더링.
    renderSquare(i) {
      return <Square value={s[i]}/>;//Square에 value prop전달.
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {//게임판을 렌더링.
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  