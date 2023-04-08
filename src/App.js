import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import {
  Home,
  About,
  Contact,
  Shop,
  Login,
  Register,
  Reset,
} from "./pages/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="reset" element={<Reset />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
