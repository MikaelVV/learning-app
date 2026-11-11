import { useState } from "react";
import type { LearningEntryData } from "../types/LearningEntryData";

export default function HomePage() {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [learned, setLearned] = useState("");
  const [confidence, setConfidence] = useState(3);
  const [dog, setDog] = useState("");

  const [message, setMessage] = useState("");

  async function handleAddEntry() {
    if (topic.trim() === "" || learned.trim() === "") {
      setMessage("Topic and learned sections cannot be empty!");
      return;
    }

    const newEntry: Omit<LearningEntryData, "id"> = {
      topic: topic.trim(),
      date,
      learned: learned.trim(),
      confidence,
      dog: dog.trim()
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/entries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEntry)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save entry");
      }

      setMessage("Entry saved successfully!");

      setTopic("");
      setDate("");
      setLearned("");
      setConfidence(3);
      setDog("");

    } catch {
      setMessage("Couldn't save entry. Check your backend!");
    }
  }

  return (
    <main>
      <h1>My Learning App</h1>
      <p>Track what you have learned.</p>
      <p>Student: Mikko Mikkola</p>

      <h2>Add a learning entry</h2>

      <form onSubmit={(event) => {
        event.preventDefault();
        handleAddEntry();
      }}>
        <div>
          <label htmlFor="topic">Topic:</label>
          <input
            id="topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="learned">Learned:</label>
          <input
            id="learned"
            value={learned}
            onChange={(event) => setLearned(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confidence">Confidence:</label>
          <select
            id="confidence"
            value={confidence}
            onChange={(event) =>
              setConfidence(Number(event.target.value))
            }
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div>
          <label htmlFor="dog">Dog:</label>
          <input
            id="dog"
            value={dog}
            onChange={(event) => setDog(event.target.value)}
          />
        </div>

        <button type="submit">
          Add learning entry
        </button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}


/*export default function HomePage() {
  return (
    <main>
      <h1>My Learning App</h1>
      <p>Track what you have learned.</p>
    </main>
  );
} */