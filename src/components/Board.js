import Box from "./Box";

function Board({board}) {
  if(board.length !== 4) return null;
  const renderBox = (i, j) => <Box val={board[i][j]} key={`${i} ${j}`}/>;
  const renderRow = (i) => {
    let row = Array(4);
    for(let j=0; j<4; ++j)
      row[j] = renderBox(i, j);
    return (
      <div  className="row" key={i}>
        {row}
      </div>
    );
  }

  return (
    <div className="board">
      {renderRow(0)}
      {renderRow(1)}
      {renderRow(2)}
      {renderRow(3)}
    </div>
  )
}

export default Board;