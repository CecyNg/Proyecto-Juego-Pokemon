# Poke Proyecto - ¿Quién es ese Pokémon?

Este proyecto es un sencillo juego de "¿Quién es ese Pokémon?" creado con React y TypeScript. Sirve como un ejemplo práctico para estudiantes que están aprendiendo a construir aplicaciones interactivas con estas tecnologías.

El objetivo del juego es adivinar el nombre del Pokémon que se muestra en pantalla.

## ✨ Características

- Muestra una imagen de un Pokémon aleatorio.
- Permite al usuario introducir un nombre para adivinar.
- Valida si el nombre es correcto o no.
- Muestra una celebración cuando el usuario acierta.
- Permite jugar de nuevo con un nuevo Pokémon.
- Diseño responsivo utilizando Bootstrap.

## 🚀 Cómo empezar

Sigue estas instrucciones para clonar y ejecutar el proyecto en tu máquina local.

### Pre-requisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/installation) (o puedes usar `npm` o `yarn`)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/poke-proyecto.git
    cd poke-proyecto
    ```

2.  **Instala las dependencias:**
    ```bash
    pnpm install
    ```
    o si usas npm:
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    o si usas npm:
    ```bash
    npm run dev
    ```

¡Ahora puedes abrir [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación!

## ⚛️ Conceptos de React y TypeScript utilizados

Este proyecto utiliza varios conceptos fundamentales de React y TypeScript.

### 1. Componentes

La interfaz de usuario está dividida en componentes reutilizables, cada uno con una responsabilidad específica. Los encuentras en `src/components`.

- `PokemonDisplay.tsx`: Muestra la imagen del Pokémon.
- `PokemonForm.tsx`: Contiene el campo de entrada para que el usuario escriba el nombre.
- `PokemonResult.tsx`: Muestra si la respuesta fue correcta o incorrecta y el botón para volver a jugar.

### 2. Custom Hooks

La lógica principal del juego está encapsulada en un **custom hook** llamado `useGameManager` (`src/hooks/use-game-manager.ts`). Esto nos permite separar la lógica del estado de la presentación y reutilizarla fácilmente.

Un custom hook es simplemente una función de JavaScript cuyo nombre comienza con `use` y que puede llamar a otros hooks.

```typescript
// src/hooks/use-game-manager.ts
const useGameManager = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [gameState, setGameState] = useState<GameState>(GameState.Playing);

    // ... lógica para cargar Pokémon y validar la respuesta

    return {
        pokemon,
        gameState,
        // ... otras funciones y estados
    };
};
```

### 3. Estado y Ciclo de Vida (`useState`, `useEffect`)

- **`useState`**: Se utiliza para manejar el estado dentro de los componentes y el custom hook. Por ejemplo, para almacenar la información del Pokémon actual, el estado del juego (`jugando`, `correcto`, `incorrecto`), etc.
- **`useEffect`**: Se usa para ejecutar "efectos secundarios", como obtener datos de una API. En este proyecto, lo usamos para cargar un nuevo Pokémon cuando el juego comienza.

```typescript
// src/hooks/use-game-manager.ts
useEffect(() => {
    loadNewPokemon();
}, [loadNewPokemon]);
```

### 4. TypeScript para Tipado

TypeScript nos ayuda a escribir un código más robusto y con menos errores. Definimos tipos para nuestras estructuras de datos, como la del Pokémon.

```typescript
// src/types/pokemon.interface.ts
export interface Pokemon {
  id: number;
  name: string;
  image: string;
}
```

Y luego usamos estos tipos en nuestros componentes y hooks para asegurar que los datos que pasamos son correctos.

```typescript
// src/hooks/use-game-manager.ts
const [pokemon, setPokemon] = useState<Pokemon | null>(null);
```

### 5. Renderizado Condicional

La aplicación muestra diferentes elementos en la interfaz de usuario dependiendo del estado del juego. Por ejemplo, muestra un spinner de carga mientras se obtiene un nuevo Pokémon, o muestra un mensaje de éxito/error después de que el usuario ha adivinado.

```tsx
// src/components/PokemonDisplay.tsx
const PokemonDisplay = ({ pokemon, isLoading, gameState }) => {
  if (isLoading) {
    return <Spinner />;
  }
  // ...
};
```

## 📁 Estructura de Archivos

```
poke-proyecto/
├── src/
│   ├── assets/         # Imágenes y otros recursos estáticos
│   ├── components/     # Componentes de React
│   ├── hooks/          # Custom hooks de React
│   ├── services/       # Lógica para comunicarse con APIs externas
│   ├── types/          # Definiciones de tipos de TypeScript
│   └── utils/          # Funciones de utilidad
├── public/             # Archivos públicos
└── README.md           # Este archivo
```