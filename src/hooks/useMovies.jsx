import { searchMovies } from "../service/movies";
import { useState, useRef } from "react";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (search === previousSearch.current) return;

    try {
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    }
  };
  return { movies, getMovies };
}
