import { Component } from 'react';
import Board from './Board';
import { dict, spawn, isValidMove, merge } from './util';

class Game extends Component {
  state = {board: [[]], score: 0};

  componentDidMount() {
    this.resetState();
    document.addEventListener("keyup", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyDown);
  }

  resetState = () => {
    let board = [];
    for(let i=0; i<4; ++i) {
      let row = [];
      for(let j=0; j<4; ++j) {
        row.push(0);
      }
      board.push(row);
    }
    let a = spawn(board);
    board[a[0]][a[1]] = a[2];
    a = spawn(board);
    board[a[0]][a[1]] = a[2];
    this.setState({board, score: 0});
  }

  handleKeyDown = (e) => {
    let key = e.keyCode;
    let { score, board } = this.state;
    if(key < 37 || key > 40) return;
    if(!isValidMove(board, key)) return;

    let d = dict[key];
    let i=d[0], j=d[1];
    
    for(let a=0; a<4; ++a) {
      let arr = Array(4).fill(0);
      let i_ = i;
      let j_ = j;
      for(let k=0; k<4; ++k) {
        arr[k] = board[i_][j_];
        i_ += d[2];
        j_ += d[3];
      }
      let x = merge(arr);
      let narr = x[0];
      score += x[1];
      for(let k=0; k<4; ++k) {
        board[i][j] = narr[k];
        i += d[2];
        j += d[3];
      }
      i += d[4];
      j += d[5];
    }
    let s = spawn(board);
    board[s[0]][s[1]] = s[2];
    this.setState({ board, score });
  }

  render() {
    return (
      <div id="game">
        <Board board={this.state.board}/>
        <div id="score-reset">
          <h3 id="score_txt">Score: {this.state.score}</h3>
          <button onClick={this.resetState} id="reset-button">Reset</button>
        </div>
      </div>
    );
  }
}

export default Game;