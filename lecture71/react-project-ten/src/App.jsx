import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Dashboard from './components/Dashboard.jsx';
import NavBar from './components/NavBar.jsx';
import ParamComponent from './components/ParamComponent.jsx';
import NotFound from './components/NotFound.jsx';

// const router = createBrowserRouter([]); // array of routes
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <NavBar />
      <Home />
    </div>,
  },
  {
    path: "/about",
    element: 
    <div>
      <NavBar />
      <About />
    </div>,
  },
  {
    path: "/dashboard",
    element: 
    <div>
      <NavBar />
      <Dashboard />
    </div>,
    children: // nested routing 
    [
      {path: "courses", element:<>COURSES</>,},
      {path: "performance", element:<>PERFORMANCE</>,},
      {path: "notifications", element:<>NOTIFICATIONS</>,}, 
    ],
  },


  {
    // path: "/:id", // parameterized route

    // path: "/student/:id", // route parameter example
    // "baseurl/student/abcd"

    path: "/student", //query parameter example
    // "baseurl/student?id=abcd"
    element: 
    <div>
      <NavBar />
      <ParamComponent />
    </div>
  },

  // Handle 404 - page not found (error cases)
  {
    path: "*",
    element:
    <div>
      <NotFound />
    </div>,
  }
]);


function App() {
  return (
    <div className="App">
      App Component starts here
      <RouterProvider router={router} />
      App Component ends here
    </div>
  )
}

export default App
