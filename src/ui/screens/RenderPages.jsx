import { useEffect, useState } from "react";
import { NumberConverter } from "./NumberConverter/NumberConverter";

export function RenderPages() {
  const [page, setPage] = useState(1);

  useEffect(() => {}, [page]);

  const CONVERTER_PAGE = 1;
  const GAME_OF_LIFE_PAGE = 2;

  if (page == CONVERTER_PAGE) {
    return (
      <div>
        <NumberConverter />
        <button onClick={setPage(GAME_OF_LIFE_PAGE)}>
          Ir Para Jogo da Vida
        </button>
      </div>
    );
  } else if (page == GAME_OF_LIFE_PAGE) {
    return (
      <div>
        <NumberConverter />
        <button onClick={setPage(CONVERTER_PAGE)}>
          Ir para Conversor de Numeros
        </button>
      </div>
    );
  }
}
