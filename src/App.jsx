import { useState } from "react";
import Heading from "./components/Heading";
import ScoreTracker from "./components/ScoreTracker";
import "./App.css";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <Heading />
      <ScoreTracker currentScore={currentScore} bestScore={bestScore} />
    </>
  );
}

export default App;
