import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import SearchPage from './components/pages/SearchPage';
import CreatePage from './components/pages/CreatePage';
import "./assets/scss/style.scss"

const App = () => {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="searchpage" element={<SearchPage />} />
            <Route path="createpage" element={<CreatePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
