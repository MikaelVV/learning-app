import './App.css'
import LearningEntry from "./components/LearningEntry";
import { useState } from "react";
import type { LearningEntryData } from './types/LearningEntryData';

function App() {
  const studentName: string = "Mikko Mikkola";

  const firstEntry = {
    id: 1,
    topic: "React Components",
    date: "2026-10-19",
    learned: "Components help divide the UI into reusable parts.",
    confidence: 3,
    dog: "Dalmation"

  };

    const secondEntry = {
    id: 2,
    topic: "React Components",
    date: "2022-10-19",
    learned: "Learned to add a second LearningEntry into my application.",
    confidence: 5,
    dog: "Tibetan Spaniel"

  };

  const initialEntries: LearningEntryData[] = [firstEntry, secondEntry];
  const [entries, setEntries] = useState<LearningEntryData[]>(initialEntries);

  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [learned, setLearned] = useState("");
  const [confidence, setConfidence] = useState(3);
  const [dog, setDog] = useState("");

  function handleAddEntry(){
    if (topic.trim() === ""|| learned.trim() === "" ){
      alert("Topic and learned sections cannot be empty!");
      return;
    }

    const newEntry: LearningEntryData = {
      id: Date.now(),
      topic: topic.trim(),
      date: date,
      learned: learned.trim(),
      confidence: confidence,
      dog: dog.trim()
    };

    setEntries((currentEntries) => [...currentEntries, newEntry])

    setTopic("");
    setDate("");
    setLearned("");
    setConfidence(3);
    setDog("");
  }


  return (
    <main>
      <h2>Add a learning entry</h2>

      <form>
        <div>
          <label  htmlFor="topic">Topic:</label>
          <input 
          id="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}>
          </input>

        </div>

        <div>
          <label  htmlFor="date">Date:</label>
          <input 
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}>
          </input>

        </div>

        <div>
          <label  htmlFor="learned">Learned:</label>
          <input 
          id="learned"
          value={learned}
          onChange={(event) => setLearned(event.target.value)}>
          </input>

        </div>

        <div>
          <label  htmlFor="confidence">Confidence:</label>
          <select 
          id="confidence"
          value={confidence}
          onChange={(event) => setConfidence(Number(event.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

        </div>

        <div>
          <label  htmlFor="dog">Dog:</label>
          <input 
          id="dog"
          value={dog}
          onChange={(event) => setDog(event.target.value)}>
          </input>

        </div>

        <button type="button" onClick={handleAddEntry}> Add learning entry </button>
      </form>
      <h1>My Learning</h1>
      <p>Fullstack Project</p>
      <p>Student: {studentName}</p>

    {entries.map((entry) =>(
      <LearningEntry
      key={entry.id}
      entry={entry}
      />
    ))}
    </main>
  );
}

export default App;
