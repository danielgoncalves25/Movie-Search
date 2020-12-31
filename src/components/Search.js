import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { MovieContext } from "../services/MovieContext";

const Search = () => {
  const { value1, value2, value3 } = useContext(MovieContext);
  const [query, setQuery] = value1;
  const [movies, setMovies] = value2;
  const [queryMovie, setQueryMovie] = value3;

  function changeQuery(e) {
    setQuery(e.target.value);
  }

  const fetchMovie = () => {
    setQueryMovie(true);
    // console.log(`Search Button is pressed.`);
  };

  return (
    <Navbar>
      <Navbar.Brand href="https://danielgoncalves25.github.io/Movie-Search/">
        <p> Daniel Goncalves </p>
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search for a movie"
          className="mr-sm-2 search"
          value={query}
          onChange={changeQuery}
        />
        <Button onClick={fetchMovie} variant="outline-info">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default Search;
