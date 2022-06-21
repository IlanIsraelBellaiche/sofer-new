import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { requestCatalog } from "./Request/RequestCatalog.js";

import "./App.css";

// Pages imports
import HomePage from "./Pages/HomePage/HomePage";

// Components imports
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

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
  // Get all the catalog
  const [catalog, setCatalog] = useState();
  // For mobile.
  const [openSideBar, setOpenSideBar] = useState(false);

  const { defaultLanguage } = useSelector((state) => ({
    ...state.languageReducer,
  }));

  /**
   * Get all the catalog.
   */
  useEffect(() => {
    requestCatalog.getActive().then((res) => {
      setCatalog(res.data.catalog);

      /**
       * @todo Enlever le dispatch
       */
      /* dispatch({
        type: "setCatalog",
        value: res.data.catalog,
      }); */
    });
  }, []);

  return (
    <div
      className="App"
      style={{ direction: defaultLanguage === "he" ? "rtl" : "ltr" }}
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
        <Route path="/" element={<HomePage catalog={catalog} />} />
      </Routes>
    </div>
  );
}

export default App;
