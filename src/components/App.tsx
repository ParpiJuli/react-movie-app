import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
              <Route path="/" element={<HomePage />} />
              <Route path="/:genre" element={<GenrePage />} />
              <Route path="/movies/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  	);
}
