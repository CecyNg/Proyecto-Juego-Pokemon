interface Props {
    wins: number;
    losses: number;
    effectiveness: number;
}

const GameStats = ({ wins, losses, effectiveness }: Props) => {
    return (
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 mb-8 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4">Estadísticas del Juego</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <h3 className="text-lg font-semibold text-white">Victorias</h3>
                    <p className="text-3xl font-bold text-green-400">{wins}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Derrotas</h3>
                    <p className="text-3xl font-bold text-red-400">{losses}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Efectividad</h3>
                    <p className="text-3xl font-bold text-blue-400">{effectiveness}%</p>
                </div>
            </div>
        </div>
    );
};

export default GameStats;
