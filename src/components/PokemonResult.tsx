import { GameState } from "../hooks/use-game-manager";

interface Props {
  LoadNewPokemon: () => void;
  gameState: GameState;
}

function PokemonResult({ LoadNewPokemon, gameState }: Props) {

  if (gameState === "playing") {
    return null;
  }
  
  return (
    <div className={`alert alert-${gameState === GameState.Correct ? "success" : "danger"} text-center`}>
       {gameState === GameState.Correct ? (<h2>Correcto! <i className="bi bi-arrow-through-heart"></i></h2>) : (<h2>Incorrecto! <i className="bi bi-bookmark-x-fill"></i></h2>)}
       <button className="btn btn-dark mt-3" onClick={LoadNewPokemon}>Volver a jugar</button>
       </div>
  )
}

export default PokemonResult;
