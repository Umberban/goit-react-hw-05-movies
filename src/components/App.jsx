import { Suspense} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {Layout} from "./Layout/Layout";
import {Cast} from "./cast/Cast";
import {Reviews} from "./reviews/Reviews";
import {Home} from 'pages/home/Home';
import {Movies} from 'pages/movies/Movies';
import {Details} from 'pages/details/Details';
// const Home = lazy(() => import('pages/home/Home'));
// const Movies = lazy(() => import('pages/movies/Movies'));
// const Details = lazy(() => import('pages/details/Details'))


export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<Details/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    </Suspense>

  );
};