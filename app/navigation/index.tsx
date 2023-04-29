import React from "react";
import { Routes, Route } from "react-router-dom";

import { navigationURL } from "./urls";

const RoutesStack: React.FC = () => {
  return (
    <Routes>
      {navigationURL.map(route => (
        <Route key={route.id} path={route.path} element={route.page} />
      ))}
    </Routes>
  );
};

export default RoutesStack;
