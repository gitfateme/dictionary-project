import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center"><h1>Dictionary</h1></header>
        <main>
          <Dictionary />
        </main>
        <footer className=" text-center">
          <small>Coded by FAteme</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
