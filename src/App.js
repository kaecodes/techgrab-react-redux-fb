import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import { Home, About, Contact, Shop } from "./pages/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
