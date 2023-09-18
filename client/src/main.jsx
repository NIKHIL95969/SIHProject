import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Profile from './components/Profile/Profile.jsx';
import AlbumCard from './components/Home/AlbumCard.jsx'
import PageNotFound from './components/NotFound/PageNotFound';
import LoginPage from './components/Login/LoginPage'
import { AuthProvider } from './Context/AuthContext';
import AuthRequired from './components/AuthRequired';

// const [userDetails, setuserDetails] = useState(second)

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
    children: [
      {
        path: "",
        element: 
        (
        <>
        <AlbumCard />
        </>
        )
        ,
      },
      {
        path: "projects",
        element: (
          <div>
            Projects
          </div>
        ),
      },
      {
        path: "trending",
        element: (
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quod. Omnis doloribus vero reprehenderit porro nam commodi doloremque voluptates atque voluptatibus magnam? Possimus aliquid voluptatum nobis omnis, sit eum et expedita nam eos iure eligendi repudiandae quaerat! Ex sunt modi, minima et quaerat dolore aliquam officia ad veritatis recusandae magni.</h1>
          </div>
        ),
      },
      {
        path: "profile",
        element: <AuthRequired>< Profile /> </AuthRequired>
      },
      {
        path: "*",
        element: <PageNotFound />,
      }
    ]
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <></>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
