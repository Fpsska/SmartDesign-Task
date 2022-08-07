import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../common/Layout';
import SearchPage from '../pages/SearchPage';
import CreatePage from '../pages/CreatePage';

import "../../assets/scss/style.scss";
import "../../assets/scss/media.scss";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path="/SmartDesign-Task" element={<Layout />}>
            <Route index element={<SearchPage />} />
            <Route path="createpage" element={<CreatePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
