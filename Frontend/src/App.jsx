import { useState } from "react";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
