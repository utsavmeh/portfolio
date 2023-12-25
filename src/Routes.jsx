import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import AboutMe from "components/AboutMe";
const Portfolio = React.lazy(() => import("pages/Portfolio"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
