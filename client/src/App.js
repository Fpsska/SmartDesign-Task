import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FetchMongoData } from "./hooks/request";
import Layout from './components/common/Layout';
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
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="playlist" element={<PlayListPage />} />
          <Route path="player" element={<PlayerPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
