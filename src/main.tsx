import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{ background: "#0f0f10", minHeight: "100vh" }} />}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Suspense>
  </React.StrictMode>
);
