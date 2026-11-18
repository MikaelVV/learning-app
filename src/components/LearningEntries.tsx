import { useEffect, useState } from "react";
import LearningEntry from "../types/LearningEntry";
import { useLearningStore } from "../store/useLearningStore";
import { loadEntries } from "../api/entries";

function LearningEntries() {

  const entries = useLearningStore((state) => state.entries);

  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  async function handleLoadEntries() {
    setLoadError("");
    setLoading(true);

    try {
      await loadEntries();
    } catch (error) {
      console.error(error);
      setLoadError("Could not load entries. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    handleLoadEntries();
  }, []);

  if (loading) {
    return <p>Loading entries...</p>;
  }

  return (
    <section>
      <h1>My Learning Entries</h1>

      <button type="button" onClick={handleLoadEntries}>
        Load from backend
      </button>

      {loadError && <p>{loadError}</p>}

      {entries.map((entry) => (
        <LearningEntry key={entry.id} entry={entry} />
      ))}
    </section>
  );
}

export default LearningEntries;
