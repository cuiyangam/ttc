import React from 'react';

export default class Moves extends React.Component {
  render(){
    const moves = this.props.history.map((step, move) => {
      const position = step.position;
      const desc = move ?
        `Go to move #${move}. row: ${position.row}, column: ${position.column}`:
        `Go to game start. row: , column: `;
      return (
        <li key={move}>
          <button 
            className={this.props.stepNumber === move ? 'active' : ''}
            onClick={() => {this.props.onClick(move)}}
          >
            {desc}
          </button>
        </li>
      );
    });
    if(!this.props.orderASC){
      moves.reverse();
    }
    return (
      <div>
        <button onClick={() => {this.props.onToggle()}}>
          {this.props.orderASC ? 'asc' : 'desc'}
        </button>
        <ol>{moves}</ol>
      </div>
    );
  }
}
