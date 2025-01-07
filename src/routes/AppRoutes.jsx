import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";  // Asegúrate de importar el Layout
import Toros from "../pages/Toros";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import SearchResults from "../pages/SearchResults";
import Historia from "../pages/Historia";
import Semen from "../pages/Semen";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/toros",
    element: (
      <Layout>
        <Toros />
      </Layout>
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <Layout>
        <DetailPage />
      </Layout>
    ),
  },
  {
    path: "/search",
    element: (
      <Layout>
        <SearchResults />
      </Layout>
    ),
  },
  {
    path: "/historia",
    element: (
      <Layout>
        <Historia />
      </Layout>
    ),
  },
  {
    path: "/semen",
    element: (
      <Layout>
        <Semen />
      </Layout>
    ),
  },
]);

export default router;
