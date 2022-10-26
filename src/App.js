import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Wine from "./components/Wine/Wine";
import AuthPage from "./pages/AuthPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const accessToken = useSelector((state) => state.sv.accessToken);
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centeredDiv">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          {!accessToken && <Route path="/" element={<AuthPage />} />}
          {accessToken && <Route path="/welcome" element={<WelcomePage />} />}
          {accessToken && (
            <Route path="/welcome/:wineId" element={<Wine />}></Route>
          )}
          {!accessToken && (
            <Route path="*" element={<Navigate replace to="/" />} />
          )}
          {accessToken && (
            <Route path="*" element={<Navigate replace to="/welcome" />} />
          )}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
