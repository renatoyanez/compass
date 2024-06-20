import React from "react";
import { Routes as Switch, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import ListingDetail from "./components/ListingDetail";
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/saved-listings/:listingId" element={<ListingDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
