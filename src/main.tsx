import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { router } from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
