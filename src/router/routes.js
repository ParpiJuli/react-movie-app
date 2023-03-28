import DetailsPage from '../stories/pages/detailsPage/detailsPage';
import GenrePage from '../stories/pages/genrePage/genrePage';
import HomePage from '../stories/pages/homePage/homePage';
import ErrorPage from '../stories/pages/errorPage/errorPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movies/:id',
    element: <DetailsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/:genre',
    element: <GenrePage />,
    errorElement: <ErrorPage />
  },
];
