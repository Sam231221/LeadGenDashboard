import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import { Spinner } from "./components/Spinner";
import "./App.css";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Reports = React.lazy(() => import("./pages/Reports"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Help = React.lazy(() => import("./pages/Help"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/customers" element={<Customers />} />
            <Route exact path="/reports" element={<Reports />} />
            <Route exact path="/products" element={<Products />} />
            <Route path={"/help"} element={<Help />} />
            <Route path={"/products/:id/"} element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
