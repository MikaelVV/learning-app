import express from "express";
import cors from "cors";
import { db } from "./data/database";



/*type LearningEntryData = {
  id: number;
  topic: string;
  date: string;
  learned: string;
  confidence: number;
  dog: string;
}; */

const { isValidConfidence, isValidTopic } = require("./validation");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;

app.get("/api/entries", (req, res) => {
  const entries = db.prepare(`
    SELECT * FROM learning_entries
    ORDER BY date DESC, id DESC
  `).all();

  res.json(entries);
});

app.get("/api/entries/:id", (req, res) => {
  const entry = db.prepare(`
    SELECT * FROM learning_entries
    WHERE id = ?
  `).get(req.params.id);

  if (!entry) {
    return res.status(404).json({
      message: "Learning entry not found"
    });
  }

  res.json(entry);
});

app.post("/api/entries", (req, res) => {
  const { topic, date, learned, confidence, dog } = req.body;

if (
  !isValidTopic(topic) ||
  typeof date !== "string" ||
  !date.trim() ||
  typeof learned !== "string" ||
  !learned.trim() ||
  !isValidConfidence(confidence) ||
  typeof dog !== "string" ||
  !dog.trim()
) {
  return res.status(400).json({
    message: "Invalid learning entry data"
  });
}

  try {
    const result = db.prepare(`
      INSERT INTO learning_entries
      (topic, date, learned, confidence, dog)
      VALUES (?, ?, ?, ?, ?)
    `).run(topic.trim(), date.trim(), learned.trim(), confidence, dog.trim());

    const newEntry = db.prepare(`
      SELECT * FROM learning_entries WHERE id = ?
    `).get(result.lastInsertRowid);

    return res.status(201).json(newEntry);

  } catch (error) {
    console.error("Error saving learning entry:", error);

    return res.status(500).json({
      message: "Failed to save learning entry"
    });
  }
});


app.delete("/api/entries/:id", (req, res) => {
  const result = db.prepare(`
    DELETE FROM learning_entries
    WHERE id = ?
  `).run(req.params.id);

  if (result.changes === 0) {
    return res.status(404).json({
      message: "Learning entry not found"
    });
  }

  res.status(200).json({
    message: "Learning entry deleted"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});