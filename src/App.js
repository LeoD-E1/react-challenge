import React, { useState, useEffect } from 'react';
import TableData from './components/TableData.js';
import './styles/global.css';

const App = () => {
  // Get the data from json placeholder
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
      <h1>CRUD Blog Client</h1><br />
      <div className="row">

        <div className="col-md-6 capsule">
          <div className="flex-large">
            <h2 className="title">Add or dit item</h2>
          </div>
        </div>

        <div className="col-md-6 capsule">
          <div className="flex-large">
            <h2 className="title">View Items</h2>
            <TableData data={data} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="flex-large">
            <h2 className="title">Detail</h2>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;