
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Layouts/Main';

const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));

function App() {

  return (
    <Main >
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path='/' element={<MoviesPage />} />
          <Route path='/Movies' element={<MoviesPage />} />
          <Route path='/Movies/:movie' element={<MovieDetailsPage />} />
          <Route path='/Movies/Categories/:cate' element={<CategoriesPage />}/>
          <Route path='*' element={<MoviesPage />} />
        </Routes>
      </Suspense>

    </Main>
  );
}

export default App;
