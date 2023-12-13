import { useState, useCallback } from "react";

export const useGameOver = () => {
  const [gameOver, setGameOver] = useState(true); //bcs we didnt start it yet
  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);
  return [gameOver, setGameOver, resetGameOver];
};
