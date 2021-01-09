import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i, target) {
    return (
      <Square
        value={this.props.squares[i]}
        target={target}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  }

  renderRow(row, sword){
    let coloums = [];
    for(let i = 0; i < this.props.size; i++){
      let num = row * this.props.size + i;
      let target = sword.includes(num);
      
      coloums.push(this.renderSquare(num, target));
    }
    return (
      <div 
        className="board-row" 
        key={row}
      >
        {coloums}
      </div>
    );
  }

  render() {
    let rows = [];
    for(let i = 0; i < this.props.size; i++){
      rows.push(this.renderRow(i, this.props.sword));
    }
    return (
      <div>{rows}</div>
    );
  }
}