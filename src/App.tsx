import { BreedsPage } from 'pages/BreedsPage';
import { BreedPage } from 'pages/BreedPage';
import { GalleryPage } from 'pages/GalleryPage';
import { HomePage } from 'pages/HomePage';
import { VotingPage } from 'pages/VotingPage';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { AppRoute } from 'AppRoute';
import { SearchPage } from 'pages/SearchPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { LikesPage } from 'pages/LikesPage';
import { DislikesPage } from 'pages/DislikesPage';


function App() {
  return <Routes>
    <Route path={AppRoute.HOME} element={<HomePage />} />
    <Route path={AppRoute.VOTING} element={<VotingPage />} />
    <Route path={AppRoute.BREEDS} element={<BreedsPage />} />
    <Route path={`${AppRoute.BREEDS}/:id`} element={<BreedPage />} />
    <Route path={AppRoute.GALLERY} element={<GalleryPage />} />

    <Route path={AppRoute.SEARCH} element={<SearchPage />} />
    <Route path={AppRoute.FAVORITES} element={<FavoritesPage />} />
    <Route path={AppRoute.LIKES} element={<LikesPage />} />
    <Route path={AppRoute.DISLIKES} element={<DislikesPage />} />
  </Routes>
} 

export default App;
