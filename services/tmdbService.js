const API_KEY = "96b9832c1e2ecd069688c4ec031c06b9";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getMovieDetails = async (movieId = 1087192) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    if (!response.ok) {
      throw new Error("Error al obtener los detalles de la película");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getMovieDetails:", error);
    throw error;
  }
};
