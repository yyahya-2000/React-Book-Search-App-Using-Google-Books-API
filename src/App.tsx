import {FC} from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import NoPage from './componentes/common/NoPage';
import BookDetail from './componentes/SearchBooks/BookDetail/BookDetail';
import searchBooksRoutes from './routers/searchBooks';
import SearchBooks from './view/SearchBooks';

const App: FC =  () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBooks />}>
            <Route path={searchBooksRoutes.home} element={<SearchBooks />} />
        </Route>
        <Route path={searchBooksRoutes.detail} element={<BookDetail />} />
        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
