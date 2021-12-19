import React, { useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

const types = ["good", "neutral", "bad"];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onSetVoice = (type) => {
    switch (type) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        break;
    }
  }


  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);
    
  return (
    <div className="App">
      <Container title="Please leave feedback">
        <Feedback options={types} addVoice={onSetVoice} />
      </Container>
      <Container title="Statistics">
        {total > 0 ? (
          <Statistics
            options={{ good, neutral, bad }}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    </div>
  );
}