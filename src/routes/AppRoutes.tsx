import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Shoppe from "../pages/Shoppe";
import ProductDescription from "../pages/ProductDescription";
import Register from "../pages/Register";
import Description from "../pages/Description";
import DevSadhna from "../pages/DevSadhna";
import MantraSadhna from "../pages/MantraSadhna";

interface AppRoutesProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  isAuthenticated,
  // onLogin,
  onLogout,
}) => {
  return (
    <Routes>
      {/* Public */}

      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Restricted: Only if NOT logged in */}
      <Route
        path="/login"
        element={
          <ProtectedRoute isAllowed={!isAuthenticated} redirectPath="/">
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute isAllowed={!isAuthenticated} redirectPath="/">
            <Register />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute isAllowed={!isAuthenticated} redirectPath="/">
            <Home isAuthenticated={isAuthenticated} onClick={onLogout}/>
          </ProtectedRoute>
        }
      />

      {/* Protected: Only if logged in */}
      {/* <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <>Internal Home</>
            <button onClick={onLogout}>Logout</button>
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <Home isAuthenticated={isAuthenticated} onClick={onLogout} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teerrath-shop"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <Shoppe  isAuthenticated={isAuthenticated} onClick={onLogout}/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/product"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <ProductDescription  isAuthenticated={isAuthenticated} onClick={onLogout}/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/description"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <Description  isAuthenticated={isAuthenticated} onClick={onLogout}/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/devsadhna"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <DevSadhna />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mantrasadhna"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <MantraSadhna />
          </ProtectedRoute>
        }
      />
  
      

      

      <Route
        path="/logout"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <>logout</>
            <button onClick={onLogout}>Logout</button>
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
