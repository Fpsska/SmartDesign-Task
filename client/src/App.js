import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FetchMongoData } from "./hooks/request";
import Layout from './components/common/Layout';
import SearchPage from './components/pages/SearchPage';
import CreatePage from './components/pages/CreatePage';
import "./assets/scss/style.scss"

const App = () => {
  const { loading, error, request } = FetchMongoData()

  const getMongoData = async () => {
    try {
      const data = await request("GET", "http://localhost:8080/cards")
      console.log(data);
    } catch (error) { }
  }

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
