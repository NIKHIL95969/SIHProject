import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Profile from './components/Profile/Profile.jsx';
import ProjectsList from './components/Home/ProjectsList.jsx'
import PageNotFound from './components/NotFound/PageNotFound';
import LoginPage from './components/Login/LoginPage'
import { AuthProvider } from './Context/AuthContext';
import AuthRequired from './components/Features/AuthRequired';
import HeroSection from './components/Home/HeroSection'
import AboutUs from './components/Pages/AboutUs'
import CollectionPreview from './components/Pages/CollectionPreview';

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
        <HeroSection />
        <ProjectsList />
        <CollectionPreview props={"Most Recent"}/>
        </>
        )
        ,
      },
      {
        path: "projects",
        element: (
          <>
          <CollectionPreview props={"Most Rated Projects"}/>
          <ProjectsList />
          </>
        ),
      },
      {
        path: "trending",
        element: (
          <div>
            <CollectionPreview props={"Trending"}/>
          </div>
        ),
      },
      {
        path: "profile",
        element: < Profile />
      },
      {
        path: "about",
        element: <AboutUs />
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
