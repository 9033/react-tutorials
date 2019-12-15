import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
https://ko.reactjs.org/tutorial/tutorial.html

3가지 컴포넌트.

react 컴포넌트는
prop라는 매개변수를 받고
render함수를 통해 반환.
*/
var s="미사일라면방독면⏬"
  function Square(props){//Square를 함수 컴포넌트로 변경.
    return(
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  // class Square extends React.Component {//<button>을 렌더링. 클릭하면 경고창.
  //   //게임의 상태를 유지할 필요가 없음 -> constructor를 지움.

  //   //setState가 호출되면 React에게 Square가 다시 렌더링하라고 알림.
  //   render() {
  //     return (
  //       <button
  //         className="square" 
  //         onClick={() => this.props.onClick({value: this.props.value }) }
  //       >
  //         {this.props.value}
  //       </button>
  //     );//prop을 전달 : 부모 -> 자식 컴포넌트. this.state.value 의 값을 렌더링. 넘겨받은 함수를 실행.
  //   }
  // }
  
  class Board extends React.Component {//4각형 9개를 렌더링.
    constructor(props){
      super(props);
      this.state ={
        squares: Array(...s),
        xIsNext: true,//다음이 누구인가?
      };//Board컴포넌트에 게임의 상태를 저장.(O,X,null) 부모 컴포넌트에 공유 state를 정의.
    }

    handleClick(i){//square를 클릭하면 사각형을 채우게함.
      const squares = this.state.squares.slice();//불변성을 위해 slice로 사본을 만듬.
      if (calculateWinner(squares) || (squares[i] in ['❌' , '⭕'])){//승자가 결정되거나, 채워진 칸일때.
        return;
      }
      squares[i] = this.state.xIsNext ? '❌' : '⭕';
      this.setState({
        squares: squares,
        xIsNext: ! this.state.xIsNext//X O가 번갈아서 나타게함.
      });
    }

    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={()=>this.handleClick(i)}
        />
      );//Square에 value prop전달. squares의 값을 전달. 클릭하면 Board에서 Square로 함수를 전달.
    }
  
    render() {
      //승자가 결정되면 문구를 표시.
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner){
        status = 'Winner: ' + winner;
      } else{
        status = 'Next player: ' + (this.state.xIsNext ? '❌' : '⭕');
      }
        
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

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }