import { Route, Routes } from 'react-router';
import { MainLayout } from './layouts';
import { Home, NotFound } from './pages';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
