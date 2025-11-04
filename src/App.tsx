import PokemonDisplay from "./components/PokemonDisplay"
import PokemonForm from "./components/PokemonForm"
import PokemonResult from "./components/PokemonResult"
import useGameManager, { GameState } from "./hooks/use-game-manager"
import GameStats from "./components/GameStats"

const App = () => {

  const { loadNewPokemon, pokemon, isLoading, error, gameState, handlePokemonNameSubmit, wins, losses, effectiveness} = useGameManager();

  if (error) {
    return <div className="bg-red-500 text-white text-center p-4">{error}</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600 transform -skew-x-12 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 transform -skew-x-12 z-0"></div>
      
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 tracking-wider text-yellow-400 [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)]">¿Quién es ese Pokémon?</h1>
        <GameStats wins={wins} losses={losses} effectiveness={effectiveness} />
        <PokemonDisplay pokemon={pokemon} isLoading={isLoading} gameState={gameState} />
        <PokemonForm gameState={gameState} handlePokemonNameSubmit={handlePokemonNameSubmit} />
        <PokemonResult LoadNewPokemon={loadNewPokemon} gameState={gameState} />
      </div>
    </div>
  )
}

export default App
