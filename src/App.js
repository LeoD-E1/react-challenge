import React from 'react';
import DropdownController from './components/DropdownController';
import TableData from './components/TableData.js';
import './styles/global.css';
import PostState from './context/PostState';

const App = () => {

  return (

    <div className="container" >

      <PostState>
        <TableData />
      </PostState>


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
            <TableData />
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