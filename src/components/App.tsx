import React from 'react';
import {BrowserRouter, BrowserRouter as Router, HashRouter, Route, Routes} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { HomePage } from '../stories/pages/homePage/homePage';
import { GenrePage } from '../stories/pages/genrePage/genrePage';
import { DetailsPage } from '../stories/pages/detailsPage/detailsPage';
import '../../src/tailwind-input.css';

export default function App() {
  const queryClient = new QueryClient;
  	return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/:genre" Component={GenrePage} />
              <Route path="/movies/:id" Component={DetailsPage} />
            </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  	);
}
