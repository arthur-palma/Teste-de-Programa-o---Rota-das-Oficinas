import { useState } from "react";
import "./App.css";
import { GameOfLife } from "./ui/screens/GameOfLife/Life";
import { NumberConverter } from "./ui/screens/NumberConverter/NumberConverter";

function App() {
  const [page, setPage] = useState(1);
  function HandlerContent() {
    if (page === 1)
      return (
        <div className="container">
          <NumberConverter />
          <button onClick={() => setPage(2)}>Ir Para Exercicio 2</button>
        </div>
      );
    if (page === 2)
      return (
        <div className="container">
          <GameOfLife />
          <button onClick={() => setPage(1)}>Ir Para Exercicio 1</button>
        </div>
      );
  }

  return (
    <div className="container">
      <HandlerContent />
      <footer>
        <p>Desenvolvido por ARTHUR RAFAEL DA COSTA PALMA</p>
      </footer>
    </div>
  );
}
export default App;
