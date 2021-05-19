import React, { useState, useEffect } from 'react';
import TableData from './components/TableData.js'

const App = () => {

  const url = "https://jsonplaceholder.typicode.com/posts"
  const [data, setData] = useState([]);
  //const url = "../../assets/data.json";
  const bringData = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setData(json)
  };

  useEffect(() => {
    bringData();
  });

  return (

    <div className="container" >
      <h1>CRUD Blog Client</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Item</h2>
        </div>
        <div className="flex-large">
          <h2>Detail</h2>
        </div>
        <div className="flex-large">
          <h2>View Items</h2>
          <TableData data={data} />
        </div>
      </div>
    </div >
  );
}

export default App;