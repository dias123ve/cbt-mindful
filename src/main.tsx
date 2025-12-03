import React from "react";
import { createRoot } from "react-dom/client";
import Index from "../Index";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  );
}
