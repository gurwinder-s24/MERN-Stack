import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Pastes from './components/Pastes.jsx'
import ViewPaste from './components/ViewPaste.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar />
        <Home />
      </div>,
    },
    {
      path: '/pastes',
      element: 
      <div>
        <Navbar />
        <Pastes />
      </div>,
    },
    {
      path: '/pastes/:id',
      element: 
      <div>
        <Navbar />
        <ViewPaste />
      </div>,
    },
  ]
);

function App() {

  return (
    <div>
      Paste App
      <RouterProvider router={router} />
    </div>
  )
}

export default App
