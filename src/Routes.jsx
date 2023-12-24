import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Portfolio = React.lazy(() => import("pages/Portfolio"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
