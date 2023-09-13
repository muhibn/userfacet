import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// pages
import Gamefuncts from './method/Gamefuncts';
import About from './method/About';
import Login from './method/Login';
import Navbar from './method/Navbar';
import { useState } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Gamefuncts />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

const routerLogin = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  const [logged, setUser] = useState(true);

  return (
    <RouterProvider router={logged ? router : routerLogin} />
  );
}

export default App;
