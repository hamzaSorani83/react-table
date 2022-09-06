import React from 'react';
import './App.css';
import BasicTable from './components/BasicTable';
import GroupedTable from './components/GroupedTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path='/' element={<BasicTable />} />
          <Route path='/group' element={<GroupedTable />} />
          <Route path='/sort' element={<SortingTable />} />
          <Route path='/filter' element={<FilteringTable />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
