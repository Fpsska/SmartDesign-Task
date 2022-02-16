import { FetchMongoData } from "./hooks/request";

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
      <button onClick={getMongoData}>test</button>
    </div>
  );
}

export default App;
