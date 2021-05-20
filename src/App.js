import React, { useState, useEffect } from 'react';
import DropdownController from './components/DropdownController';
import TableData from './components/TableData.js';
import './styles/global.css';

const App = () => {

  const [items, setItems] = useState({});

  //const url = "../../assets/data.json";
  const bringData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setItems(json)
  };

  useEffect(() => {
    bringData();
  }, []);

  const addItems = (item) => {
    setItems({
      ...items,
      item
    })
  }

  return (

    <div className="container" >
      <h1>CRUD Blog Client</h1><br />
      <div className="row">

        <div className="col-md-6 capsule">
          <div className="flex-large">
            <DropdownController />
          </div>
        </div>

        <div className="col-md-6 capsule">
          <div className="flex-large">
            <h2 className="title">Home</h2>
            <TableData items={items} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="flex-large">
            <h2 className="title">Details</h2>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;