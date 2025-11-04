import { GameState } from "../hooks/use-game-manager";
import type { Pokemon } from "../types/pokemon.interface";
import Spinner from "./Spinner";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
}

function PokemonDisplay({ pokemon, isLoading, gameState }: Props) {

  const showAnswer = gameState !== GameState.Playing;
  const image = pokemon?.image;

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg p-8 mb-8 shadow-lg backdrop-blur-sm">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        { isLoading ? (
          <Spinner />
        ) : (
          <img 
            src={image} 
            alt="pokemon" 
            className={`transition-all duration-500 ease-in-out transform ${showAnswer ? 'scale-100' : 'scale-90'}`}
            style={{
              filter: showAnswer ? "none" : "brightness(0) saturate(0)",
              transition: "filter 0.5s ease-in-out"
            }}
          />
        )}
      </div>
    </div>
  )
}

export default PokemonDisplay;