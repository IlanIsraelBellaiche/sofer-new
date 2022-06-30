import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

// Pages imports
import HomePage from "./Pages/HomePage/HomePage";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ItemPage from "./Pages/ItemPage/ItemPage";

import AddItemForm from "./Forms/AddItemForm/AddItemForm.jsx";

// Components imports
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

// Icons import
import croixIcon from "./icons/croixIcon.png";

/**
 * App Component.
 * Includes all the routes of the application.
 * Get the full catalog and dispatch it into all the application.
 * @component
 * @exports
 */
function App() {
  // For mobile.
  const [openSideBar, setOpenSideBar] = useState(false);

  const { defaultLanguage } = useSelector((state) => ({
    ...state.languageReducer,
  }));

  return (
    <div
      className="App"
      style={{ direction: defaultLanguage === "He" ? "rtl" : "ltr" }}
    >
      <Header
        openSideBar={() => {
          setOpenSideBar(true);
        }}
      />
      {openSideBar && (
        <div className="SideBar">
          <SideBar />
          <img
            src={croixIcon}
            alt="Close sidebar"
            className="croixIcon"
            onClick={() => setOpenSideBar(false)}
          />
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="catalog/:categoryName" element={<CatalogPage />} />
        <Route path="catalog/:categoryName/:itemId" element={<ItemPage />} />

        {/* TESTS */}
        <Route path="add" element={<AddItemForm />} />
      </Routes>

        <Footer />
    </div>
  );
}

export default App;
