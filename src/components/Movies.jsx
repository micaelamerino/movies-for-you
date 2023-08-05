function ListOfMovies({ movies }) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 justify-items-center">
      {movies &&
        movies?.map((m) => (
          <div key={m.id} className="flex flex-col flex-wrap items-center text-center">
            <h3 className="font-medium text-lg">{m.title}</h3>
            <p className="font-medium">{m.year}</p>
            <img className="w-56 h-68" src={m.img} alt={`Portada de la película ${m.title}`} />
          </div>
        ))}
    </main>
  );
}

function NoMoviesResults() {
  return <p className="text-red-600 font-semibold text-center">No hay resultados para esta búsqueda, pruebe con otro título</p>;
}

export function Movies({ movies }) {
  return movies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
