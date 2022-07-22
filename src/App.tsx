import { BreedsPage } from 'pages/BreedsPage';
import { GalleryPage } from 'pages/GalleryPage';
import { HomePage } from 'pages/HomePage';
import { VotingPage } from 'pages/VotingPage';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { AppRoute } from 'AppRoute';


function App() {
  return <Routes>
    <Route path={AppRoute.HOME} element={<HomePage />} />
    <Route path={AppRoute.VOTING} element={<VotingPage />} />
    <Route path={AppRoute.BREEDS} element={<BreedsPage />} />
    <Route path={AppRoute.GALLERY} element={<GalleryPage />} />
  </Routes>
} 

export default App;
