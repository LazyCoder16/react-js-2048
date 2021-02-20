import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>2048</h1>
        <p id="tag_line">The lesser the tiles the more the survival</p>
      </header>
      <Game/>
    </div>
  );
}

export default App;
