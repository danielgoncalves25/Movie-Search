import "./App.css";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { MovieProvider } from "./services/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Search />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
