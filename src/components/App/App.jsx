import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDataFetch } from "../../hooks/useDataFetch";

import Layout from '../common/Layout';
import SearchPage from '../pages/SearchPage';
import CreatePage from '../pages/CreatePage';

import "../../assets/scss/style.scss";
import "../../assets/scss/media.scss";
import "./App.css";

const App = () => {

  const [data, setData] = useState([]);

  const { loading, error, request } = useDataFetch();

  useEffect(() => {
    const getGoodsData = async () => {
      try {
        const data = await request("GET", "https://backend-smart-design-task.herokuapp.com/cards");
        setData(data);
      } catch (error) {
        console.error(`Error from component: ${error.message || error}`);
      }
    };

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
