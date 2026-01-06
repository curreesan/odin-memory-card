import { useState, useEffect } from "react";
import Heading from "./components/Heading";
import ScoreTracker from "./components/ScoreTracker";
import CardGrid from "./components/CardGrid";
import agentsData from "./data/agents";
import "./App.css";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedAgents, setClickedAgents] = useState([]);
  const [agents, setAgents] = useState([]);

  const shuffleAgents = (agentsArray) => {
    return [...agentsArray].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setAgents(shuffleAgents(agentsData));
  }, []);

  const handleCardClick = (agent) => {
    if (clickedAgents.includes(agent.id)) {
      //agent clicked already
      setCurrentScore(0);
      setClickedAgents([]);
      console.log("agent already clicked, game reset");
    } else {
      //new agent clicked
      const newClicked = [...clickedAgents, agent.id];
      setClickedAgents(newClicked);
      const newScore = newClicked.length;
      setCurrentScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
        console.log(`new best score ${bestScore}`);
      }

      console.log(`new agent selected, cur score ${newScore}`);
    }

    //shuffle after every click
    setAgents(shuffleAgents(agents));
  };

  return (
    <>
      <Heading />
      <ScoreTracker currentScore={currentScore} bestScore={bestScore} />
      <CardGrid agents={agents} onCardClick={handleCardClick} />
    </>
  );
}

export default App;
