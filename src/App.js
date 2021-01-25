import './App.css';

function App() {
  let image = "https://picsum.photos/200/300"
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src={image}></img>
        </p>
      </header>
    </div>
  );
}

export default App;
