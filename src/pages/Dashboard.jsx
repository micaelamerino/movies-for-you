import { useState } from "react";
import { Movies } from "../components/Movies";
import NavBar from "../components/NavBar";
import { useMovies } from "../hooks/useMovies";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(null);
  const { movies, getMovies } = useMovies({ search });

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getMovies();

    if (search === "") {
      setSearchError("*Por favor introduzca una película");
    } else {
      setSearchError(null);
    }
  };

  return (
    <>
      <NavBar />
      <header className="flex flex-col items-center mt-5 gap-5">
        <h1 className="text-2xl">¿Qué estás buscando?</h1>
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            className="border-2 border-blue-700 rounded p-2 text-black"
            type="text"
            value={search}
            placeholder="Matrix, Star Wars, Love..."
            onChange={handleChangeSearch}
          />
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium rounded py-1 px-2">
            BUSCAR
          </button>
        </form>
        <p className="text-red-600 font-semibold h-6">{searchError}</p>
      </header>
      <Movies movies={movies} />
    </>
  );
};

export default Dashboard;
