import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResponsiveAppBar from './components/Header/ResponsiveAppBar.jsx';
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';
import Profile from './components/Profile/Profile.jsx';
import AlbumCard from './components/Home/AlbumCard.jsx'

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
        {/* <Home /> */}
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
        element: <Profile />
      }
    ]
  },
  {
    path: "login",
    element: (
      <>
      <div>
        Login Page
      </div>
      </>
    ),
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* </RouterProvider> */}
    {/* <App /> */}
  </React.StrictMode>,
)
