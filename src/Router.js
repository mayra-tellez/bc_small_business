import React from 'react'
import { Routes, Route } from 'react-router'
import Listing from './Containers/Listing'
import AddListing from './Containers/AddListing';

const Router = () => {
  return (
      <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/listing" element={<Listing />} />
          <Route path="/addlisting" element={<AddListing />} />
          {/* <Route path="/car/:id" component={Car} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/import" element={<Import/>} /> */}
      </Routes>
  );
};

export default Router;