import { combineReducers } from "redux";
import LatestReducer from "./LatestReducer";
import MovieSearchReducer from "./MovieSearchReducer";
import MovieDetailsReducer from "./MovieDetailsReducer";
import PopupMessageReducer from "./PopupMessageReducer";

const createRootReducer = () => combineReducers({
  latestMovies: LatestReducer,
  searchedMovie: MovieSearchReducer,
  movieDetails: MovieDetailsReducer,
  popupMessage: PopupMessageReducer
});

export default createRootReducer;
