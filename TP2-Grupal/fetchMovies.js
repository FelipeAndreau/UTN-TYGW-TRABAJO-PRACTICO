const axios = require('axios');

// Reemplaza con tu API key de TMDB
const TMDB_API_KEY = 'b5cb3054d127a4a5e1eb2a3071fc58b8';

// URL base de TMDB
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// URL de tu instancia de Strapi
const STRAPI_BASE_URL = 'http://localhost:1337';  // Cambia esto si tu Strapi no está en localhost

// Endpoint de autenticación de Strapi
const STRAPI_LOGIN_ENDPOINT = `${STRAPI_BASE_URL}/api/auth/local`;

// Credenciales de Strapi
const STRAPI_EMAIL = 'mondinopedro12@gmail.com';
const STRAPI_PASSWORD = '141216Pepe';


// Función para obtener las 10 películas más populares de 20th Century Fox
async function getPopularMovies() {
  const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
    params: {
      api_key: TMDB_API_KEY,
      sort_by: 'popularity.desc',
      with_companies: '25', // ID de 20th Century Fox en TMDB
      page: 1,
    },
  });

  console.log(response.data.results.slice(0, 10))
  return response.data.results.slice(0, 10);
}

// Función para guardar la información en Strapi
async function saveToStrapi(jwt, movie) {
  const response = await axios.post(
    `${STRAPI_BASE_URL}/movie`,
    {
      title: movie.title,
      genres: movie.genre_ids.join(', '),
      release_date: movie.release_date,
      vote_count: movie.vote_count,
      vote_average: movie.vote_average,
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  return response.data;
}

async function main() {
  try {
    const jwt = axios.post(STRAPI_LOGIN_ENDPOINT, {
        "identifier": STRAPI_EMAIL,
        "password": STRAPI_PASSWORD,
      });

      console.log("Llegue hasta aca")
    const movies = await getPopularMovies();

    for (const movie of movies) {
      const movieDetails = await axios.get(`${TMDB_BASE_URL}/movie/${movie.id}`, {
        params: {
          api_key: TMDB_API_KEY,
        },
      });

      const movieData = {
        title: movieDetails.data.title,
        genres: movieDetails.data.genres.map(genre => genre.name).join(', '),
        release_date: movieDetails.data.release_date,
        vote_count: movieDetails.data.vote_count,
        vote_average: movieDetails.data.vote_average,
      };

      await saveToStrapi(jwt, movieData);
      console.log(`Saved movie: ${movieData.title}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}




main();
