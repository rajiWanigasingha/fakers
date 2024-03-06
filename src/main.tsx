import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CreatePage from "./pages/createPage.tsx";
import TablePage from "./pages/tablePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatePage />,
  },
  {
    path: "/table",
    element: <TablePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
