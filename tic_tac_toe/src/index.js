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
class Square extends React.Component {//<button>을 렌더링.
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );//prop을 전달 : 부모 -> 자식 컴포넌트.
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
  