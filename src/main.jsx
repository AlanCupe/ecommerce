import { createRoot } from "react-dom/client";
import router from "./router/Router";
import "./main.css";

import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
