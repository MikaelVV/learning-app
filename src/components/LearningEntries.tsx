import { useEffect, useState } from "react";
import type { LearningEntryData } from "../types/LearningEntryData";
import LearningEntry from "./LearningEntry";

function LearningEntries() {
  const [entries, setEntries] = useState<LearningEntryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/entries")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch entries");
        }

        return response.json();
      })
      .then((data: LearningEntryData[]) => {
        setEntries(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading entries...</p>;
  }

  return (
    <section>
      <h1>My Learning Entries</h1>

      {entries.map((entry) => (
        <LearningEntry key={entry.id} entry={entry} />
      ))}
    </section>
  );
}

export default LearningEntries;