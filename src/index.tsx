import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { IntlayerProvider } from 'react-intlayer';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <IntlayerProvider>
      <App />
    </IntlayerProvider>
  </StrictMode>
);
