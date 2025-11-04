import { useCallback, useEffect, useState } from "react";
import { pokemonService } from "../services/pokemos.service";
import type { Pokemon } from "../types/pokemon.interface";

// export enum GameState {
//     Playing = "playing",
//     Correct = "correct",
//     Wrong = "wrong",
// }

export const GameState = {
    Playing: "playing",
    Correct: "correct",
    Wrong: "wrong",
} as const;

export type GameState = typeof GameState[keyof typeof GameState];

const useGameManager = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [gameState, setGameState] = useState<GameState>(GameState.Playing);

    const [wins, setWins] = useState<number>(() => {
        const savedWins = localStorage.getItem("wins");
        return savedWins ? parseInt(savedWins, 10) : 0;
    });
    
    const [losses, setLosses] = useState<number>(() => {
        const savedLosses = localStorage.getItem("losses");
        return savedLosses ? parseInt(savedLosses, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem("wins", wins.toString());
    }, [wins]);

    useEffect(() => {
        localStorage.setItem("losses", losses.toString());
    }, [losses]);

    const handlePokemonNameSubmit = useCallback((userInput: string) => {
        if (!pokemon) return;

        const isValid = pokemonService.isPokemonNameValid(pokemon.name, userInput);
        
        if(isValid){
            setGameState(GameState.Correct)
            setWins(prev => prev + 1);
        }else{
            setGameState(GameState.Wrong);
            setLosses(prev => prev + 1);
        }
        }, [pokemon]);

    const loadNewPokemon = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setGameState(GameState.Playing);
        try {
            const randomPokemon = await pokemonService.getRandomPokemon();
            setPokemon(randomPokemon);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadNewPokemon();
    }, [loadNewPokemon]);

    const totalGames = wins + losses;
    const effectiveness = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;

    return {
        pokemon,
        isLoading,
        error,
        loadNewPokemon,
        handlePokemonNameSubmit,
        gameState,
        wins,
        losses,
        effectiveness
    };
};

export default useGameManager;
