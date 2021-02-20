let dict = {37: [0, 0, 0, 1, 1, -4], //Left
            38: [0, 0, 1, 0, -4, 1], //Up
            39: [0, 3, 0, -1, 1, 4], //Right
            40: [3, 0, -1, 0, 4, 1]}; //Down

let spawn = (board) => {
  let spots = [];
  for(let i=0; i<4; ++i) {
    for(let j=0; j<4; ++j) {
      if(board[i][j] === 0) {
        spots.push([i, j]);
      }
    }
  }
  let s = spots[Math.floor(Math.random() * spots.length)];
  let x = (Math.random() > 0.1) ? 2 : 4;
  return [s[0], s[1], x];
}

let isValidMove = (board, key) => {
  let d = dict[key];
  let i=d[0];
  let j=d[1];

  for(let a=0; a<4; ++a) {
    let arr = [];
    for(let b=0; b<4; ++b) {
      arr.push(board[i][j]);
      i += d[2];
      j += d[3];
    }
    for(let k=1; k<4; ++k) {
      if((arr[k] !== 0) && (arr[k-1] === 0 || arr[k-1] === arr[k])) {
        return true;
      }
    }
    i += d[4];
    j += d[5];
  }
  return false;
}

let merge = (arr) => {
  let narr = Array(4).fill(0);
  let i = 0;
  let score_change = 0;
  for(let j=0; j<4; ++j) {
    if(arr[j] !== 0) {
      if(arr[j] === narr[i]) {
        narr[i] = arr[j] * 2;
        score_change += narr[i];
        ++i;
      }
      else {
        if(narr[i] !== 0) ++i;
        narr[i] = arr[j];
      }
    }
  }

  return [narr, score_change];
}

export { dict, spawn, isValidMove, merge };