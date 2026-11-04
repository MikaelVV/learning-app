import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, "learningapp.db");

export const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS learning_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    topic TEXT NOT NULL,
    date TEXT NOT NULL,
    learned TEXT NOT NULL,
    confidence INTEGER NOT NULL CHECK (confidence BETWEEN 1 AND 5),
    dog TEXT NOT NULL
  )
`);