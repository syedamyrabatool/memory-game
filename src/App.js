import './App.css';
import Game from './Components/Game/';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Memory Game</p>
      </header>
      <Game cardCount={8} />
    </div>
  );
}

export default App;
