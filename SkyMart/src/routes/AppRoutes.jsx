import React from "react";
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from "../pages/Home";
import Shop from "../pages/Shop"
import About from "../pages/About";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import ProductDetail from "../pages/ProductDetail";
import { useContext } from "react";
import { MyStore } from "../context/MyContext.jsx";
import CartDrawer from "../components/CartDrawer.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const AppRoutes = () => {
  
  const { isCartOpen } = useContext(MyStore);
  return (
    <div className="h-screen">
      <Routes>
        <Route 
            path="/login" 
            element={<Login />}
        />
        <Route 
            path="/register" 
            element={<Register />} 
        />
        <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
        />
        <Route 
            path="/shop" 
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            } 
        />
        <Route
          path="/about"
          element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            } 
        />
        <Route
          path="/detail/:id"
          element={
              <ProtectedRoute>
                <Navbar />
                <ProductDetail />
                <Footer />
              </ProtectedRoute>
            } 
        />
      </Routes>
      {isCartOpen && <CartDrawer />}
      
    </div>
  );
};

export default AppRoutes;