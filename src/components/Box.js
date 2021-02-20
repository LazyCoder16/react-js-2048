function Box({val}) {
  let colors = {
    2: '#eee4da',
    4: '#eee1c9',
    8: '#f3b27a',
    16: '#f69664',
    32: '#f77c5f',
    64: '#f75f3b',
    128: '#edd073',
    256: '#edcc62',
    512: '#edc950',
    1024: '#edc53f',
    2048: '#edc22e'
  }

  let bgc = colors[val];
  let tc = val > 4 ? '#ffffff' : 'rgb(119, 110, 101)';
  return (
    
    <div className="obox">
      
      {val !== 0 &&
        <div 
          className="box" 
          style={{backgroundColor: bgc, color: tc}}>
            {val}
        </div>
      }
      
    </div>
  );
}

export default Box;