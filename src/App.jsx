import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router";
import AllFoodPage from "./page/AllFoodPage";
import AllFoodCategories from "./page/AllFoodCategories";


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
