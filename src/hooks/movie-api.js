import { reactive, watch } from '@vue/composition-api';
const API_KEY = "dd447029";

export const useMovieApi = () => {
    const state = reactive({
        search: "Joker",
        loading: true,
        movies: [],
    });

    watch(() => {
        const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(json => {
                state.movies = json.Search;
                state.loading = false;
            });
    });
    return state;
};

export const example = {
    "Title": "Indiana Jones and the Last Crusade",
    "Year": "1989",
    "Rated": "PG-13",
    "Released": "24 May 1989",
    "Runtime": "127 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Jeffrey Boam (screenplay), George Lucas (story), Menno Meyjes (story), George Lucas (characters), Philip Kaufman (characters)",
    "Actors": "Harrison Ford, Sean Connery, Denholm Elliott, Alison Doody",
    "Plot": "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry \"Indiana\" Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its powers.",
    "Language": "English, German, Greek, Arabic",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 6 wins & 20 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "88%"
        },
        {
            "Source": "Metacritic",
            "Value": "65/100"
        }
    ],
    "Metascore": "65",
    "imdbRating": "8.2",
    "imdbVotes": "644,532",
    "imdbID": "tt0097576",
    "Type": "movie",
    "DVD": "21 Oct 2003",
    "BoxOffice": "N/A",
    "Production": "Paramount Pictures",
    "Website": "N/A",
    "Response": "True"
};