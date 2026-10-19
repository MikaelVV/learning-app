import './App.css'
import LearningEntry from "./components/LearningEntry";

function App() {
  const studentName: string = "Mikko Mikkola";

  return (
    <main>
      <h1>My Learning</h1>
      <p>Fullstack Project</p>
      <p>Student: {studentName}</p>

      <LearningEntry
        topic="React Components"
        date="2026-10-19"
        learned="Components help divide the UI into reusable parts."
        confidence={3}
        dog='Dalmatian'
      />

      <LearningEntry
        topic="Flip1"
        date="2022-10-19"
        learned="Learned to add a second LearningEntry into my application."
        confidence={5}
        dog='Tibetan Spaniel'
      />
    </main>
  );
}

export default App;
