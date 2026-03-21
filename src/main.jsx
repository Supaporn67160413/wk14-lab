import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./contexts/CartContext.jsx";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);
