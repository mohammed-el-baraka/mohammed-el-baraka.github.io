
import React, { useState, useEffect } from 'react';
import { useTypingGame } from './hooks/useTypingGame';
import TypingArea from './components/TypingArea';
import Stats from './components/Stats';
import Results from './components/Results';
import LevelSelector from './components/LevelSelector';
import { TOTAL_LEVELS } from './constants';
import { GameState } from './types';

const App: React.FC = () => {
  const [level, setLevel] = useState<number>(1);
  const {
    gameState,
    textToType,
    typed,
    wpm,
    accuracy,
    elapsedTime,
    resetGame,
  } = useTypingGame(level);

  const handleLevelSelect = (selectedLevel: number) => {
    setLevel(selectedLevel);
  };
  
  const handleRestart = () => {
    resetGame();
  };

  const handleNextLevel = () => {
    if (level < TOTAL_LEVELS) {
      setLevel(prev => prev + 1);
    } else {
      setLevel(1);
    }
  };

  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);


  const renderContent = () => {
    switch (gameState) {
      case GameState.FINISHED:
        return (
          <Results
            wpm={wpm}
            accuracy={accuracy}
            onRestart={handleRestart}
            onNextLevel={handleNextLevel}
            isLastLevel={level === TOTAL_LEVELS}
          />
        );
      case GameState.RUNNING:
      case GameState.WAITING:
        return (
          <>
            <Stats wpm={wpm} accuracy={accuracy} elapsedTime={elapsedTime} />
            <TypingArea
              text={textToType}
              typed={typed}
            />
            <div className="mt-6 text-center">
              <button onClick={handleRestart} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                Restart Level
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-cyan-400 tracking-wider">Typing Prodigy</h1>
        <p className="text-gray-400 mt-2">Hone your speed and accuracy. The ultimate typing challenge.</p>
      </header>
      
      <main className="w-full max-w-4xl bg-gray-800 shadow-2xl rounded-lg p-6 md:p-8">
        <div className="mb-6">
          <LevelSelector currentLevel={level} onSelectLevel={handleLevelSelect} />
        </div>
        {renderContent()}
      </main>

      <footer className="mt-8 text-gray-500 text-sm">
        <p>Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;