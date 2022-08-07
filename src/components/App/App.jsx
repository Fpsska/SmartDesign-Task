import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { FetchMongoData } from "../../hooks/request";

import Layout from '../common/Layout';
import SearchPage from '../pages/SearchPage';
import CreatePage from '../pages/CreatePage';

import "../../assets/scss/style.scss";
import "../../assets/scss/media.scss";
import "./App.css";

const App = () => {

  const [data, setData] = useState([]);

  const { loading, error, request } = FetchMongoData();


  const getGoodsData = async () => {
    try {
      const goodsData = await request("GET", "https://backend-smart-design-task.herokuapp.com/cards");
      setData(goodsData);
    } catch (error) {
      console.error(`Error from component: ${error.message || error}`);
    }
  };

  useEffect(() => {
    getGoodsData();
  }, []);

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path="/SmartDesign-Task" element={<Layout />}>
            <Route index element={<SearchPage loading={loading} error={error} data={data} />} />
            <Route path="createpage" element={<CreatePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
