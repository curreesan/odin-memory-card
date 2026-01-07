import { useState, useEffect } from "react";
import Heading from "./components/Heading";
import ScoreTracker from "./components/ScoreTracker";
import CardGrid from "./components/CardGrid";
import WinModal from "./components/WinModal";
import "./App.css";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedAgents, setClickedAgents] = useState([]);
  const [agents, setAgents] = useState([]);
  const [displayAgents, setDisplayAgents] = useState([]);
  const [showWinModal, setShowWinModal] = useState(false);

  const shuffleAgents = (array) => [...array].sort(() => Math.random() - 0.5);

  // Fetch real agents from Valorant API
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.map((agent) => ({
          id: agent.uuid,
          name: agent.displayName,
          image: agent.fullPortraitV2 || agent.fullPortrait || "",
        }));
        setAgents(formatted);
        setDisplayAgents(shuffleAgents(formatted));
      })
      .catch((err) => console.error("API fetch failed:", err));
  }, []);

  // Handle card click
  const handleCardClick = (agent) => {
    if (clickedAgents.includes(agent.id)) {
      // Lose
      setCurrentScore(0);
      setClickedAgents([]);
      console.log("Repeat click! Game reset.");
    } else {
      // Good click
      const newClicked = [...clickedAgents, agent.id];
      setClickedAgents(newClicked);
      setCurrentScore(newClicked.length);

      if (newClicked.length > bestScore) {
        setBestScore(newClicked.length);
      }

      // Win check
      if (newClicked.length === agents.length) {
        setShowWinModal(true);
        console.log("You Win! All agents remembered!");
      }
    }

    // Shuffle after every click
    setDisplayAgents(shuffleAgents(agents));
  };

  //Reset Game after win
  const resetGameAfterWin = () => {
    setShowWinModal(false);
    setCurrentScore(0);
    setClickedAgents([]);
    setDisplayAgents(shuffleAgents(agents));
  };

  return (
    <>
      <Heading />
      <ScoreTracker currentScore={currentScore} bestScore={bestScore} />
      <CardGrid agents={displayAgents} onCardClick={handleCardClick} />
      <WinModal isOpen={showWinModal} onReset={resetGameAfterWin} />
    </>
  );
}

export default App;
