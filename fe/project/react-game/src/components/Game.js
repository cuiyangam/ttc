import React from 'react';
import Board from './Board';
import Moves from './Moves';
import calculateWinner from './calculateWinner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(Math.pow(this.props.size, 2)).fill(null),
          position: {row: null, column: null} //在历史记录中显示落子行列位置
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      orderASC: true,
      sword: [] // 赢得比赛的凭据
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const position = {...current.position};
    if (squares[i]) {
      return;
    }
    if (calculateWinner(squares).winner) {
      this.setState({
        sword: calculateWinner(squares).sword
      });
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    position.row = Math.ceil((i + 1) / this.props.size);
    position.column = i % this.props.size + 1; 

    this.setState(
      {
        history: history.concat([
          {
            squares: squares,
            position: position
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      },
      () => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
      
        if (calculateWinner(squares).winner) {
          this.setState({
            sword: calculateWinner(squares).sword
          });
          return;
        }
        if(Math.pow(this.props.size, 2) === this.state.stepNumber){
          alert("draw!");
        }
      } 
    );
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      sword: calculateWinner(this.state.history[step].squares).sword
    });
  }

  toggleOrder(){
    this.setState({
      orderASC: !this.state.orderASC
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares).winner;

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            size={this.props.size}
            sword={this.state.sword}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <Moves
            history={this.state.history}
            orderASC={this.state.orderASC}
            stepNumber={this.state.stepNumber}
            onToggle={()=>{this.toggleOrder();}}
            onClick={(i)=> {this.jumpTo(i);}}
          />
        </div>
      </div>
    );
  }
}
