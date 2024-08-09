import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.tsx";
import UserProFile from "./Pj1-5/UserProFile.tsx";
import Search from "./Pj1-5/Search.tsx";
import CollectionList from "./Pj1-5/Pj3/CollectionList.tsx";
import ProductReview from "./Pj1-5/Pj4/ProductReview.tsx";
import UserList from "./Pj1-5/Pj5/UserList.tsx";
import BuySubscription from "./Pj6-9/Pj6/BuySubscription.tsx";
import Notification from "./Pj6-9/Pj7/Notification.tsx";
import List from "./Pj6-9/Pj9/List.tsx";
import JobCards from "./Pj6-9/Pj8/JobCards.tsx";
import Login from "./Login.tsx";
import User from "./User.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
// import { AuthWrapper } from "./auth/AuthWrapper.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthWrapper /> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="pj1" element={<UserProFile />} />
            <Route path="pj2" element={<Search />} />
            <Route path="pj3" element={<CollectionList />} />
            <Route path="pj4" element={<ProductReview />} />
            <Route path="pj5" element={<UserList />} />
            <Route path="pj6" element={<BuySubscription />} />
            <Route path="pj7" element={<Notification />} />
            <Route path="pj8" element={<JobCards />} />
            <Route path="pj9" element={<List />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
