import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import classes from './App.module.scss';
import LoginPage from "./Components/LoginPage";
// import DashboardPage from './Components/DashboardPage'
// import ProductsPage from './Components/ProductsPage'
// import AddNewProductPage from './Components/AddNewProductPage'
// import AccountsPage from './Components/AccountsPage'

import { useEffect, useState } from "react";
// import Dashboard from './Components/DashboardPage';
// import { useParams } from 'react-router-dom';

function App() {
  const [url, setUrl] = useState("");

  const Validation = () =>
    localStorage.getItem("user") == "Kirito" ? (
      <Navigate to="/Dashboard" />
    ) : (
      <Navigate to="/Login" />
    );
  useEffect(() => {
    Validation();
    setUrl(Validation().props.to);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
