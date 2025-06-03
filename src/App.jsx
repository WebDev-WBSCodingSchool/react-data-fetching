import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { MainLayout } from './layouts';
import {
  FetchOnRender,
  FetchOnRenderPost,
  Home,
  NotFound,
  RenderAsYouFetch,
  RenderAsYouFetchOrchestrator,
  RenderAsYouFetchReactRouter,
  RenderAsYouFetchReactRouterPage
} from './pages';
import { ErrorElement, Loading } from './components';
import { loadPostWithComments } from './data';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/fetch-on-render' element={<FetchOnRender />} />
        <Route path='/fetch-on-render/:id' element={<FetchOnRenderPost />} />
        <Route path='/render-as-you-fetch' element={<RenderAsYouFetch />} />
        <Route path='/render-as-you-fetch/:id' element={<RenderAsYouFetchOrchestrator />} />
        <Route path='/render-as-you-fetch-react-router' element={<RenderAsYouFetchReactRouter />} />
        <Route
          path='/render-as-you-fetch-react-router/:id'
          loader={loadPostWithComments}
          hydrateFallbackElement={
            <Loading message={`Loading data for post (only shows on first page load)`} />
          }
          errorElement={<ErrorElement />}
          element={<RenderAsYouFetchReactRouterPage />}
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
