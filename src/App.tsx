import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EntriesPage from "./pages/EntriesPage";

function App() {

  return (
    <main>
      <h2>Add a learning entry</h2>

      <nav>

        <Link to="/">Home</Link> {" | "}
        <Link to="/entries">Entries</Link>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/entries" element={<EntriesPage />}></Route>
        </Routes>

      </nav>
    </main>
  );
}

export default App;
