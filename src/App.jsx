import { Route, Routes } from 'react-router';
import { MainLayout } from './layouts';
import {
  FetchOnRender,
  FetchOnRenderPost,
  Home,
  NotFound,
  RenderAsYouFetch,
  RenderAsYouFetchOrchestrator
} from './pages';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/fetch-on-render' element={<FetchOnRender />} />
        <Route path='/fetch-on-render/:id' element={<FetchOnRenderPost />} />
        <Route path='/render-as-you-fetch' element={<RenderAsYouFetch />} />
        <Route path='/render-as-you-fetch/:id' element={<RenderAsYouFetchOrchestrator />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
