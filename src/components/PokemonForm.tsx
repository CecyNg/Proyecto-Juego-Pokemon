import { useState } from "react";
import type { GameState } from "../hooks/use-game-manager";

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameState: GameState;
}

function PokemonForm({ handlePokemonNameSubmit, gameState }: Props) {

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!inputValue.trim()){
      return;
    }

    handlePokemonNameSubmit(inputValue.trim().toLowerCase());
    setInputValue("");
  };

  return ( 
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input 
        type="text" 
        disabled={gameState !== "playing"} 
        className="flex-grow bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
        placeholder="Introduce el nombre del Pokémon..." 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button 
        className="bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        type="submit" 
        disabled={!inputValue.trim() || gameState !== "playing"}
      >
        Adivinar
      </button>
    </form>
  )
}

export default PokemonForm;