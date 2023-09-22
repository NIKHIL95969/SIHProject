// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useEffect } from 'react'
import ProjectCard from '../Pages/ProjectCard'
import { Link } from 'react-router-dom';
import { TERipple } from 'tw-elements-react';
import DataLoadingCard from '../Pages/DataLoadingCard'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function ProjectsList() {

  const [projectsList, setProjectsList] = useState([1,2,3,4,5,6,7,8,9])
  const [isloading, setLoading] = useState(true);

  useEffect(() => {

    
    
    const timer = setTimeout(() => {
      // Code to be executed after 2 seconds
      // Add your logic here
      
      fetch('http://127.0.0.1:8000/project/', {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          }
        })
        .then( response => response.json())
        .then( data => {
            console.log(data);
            setProjectsList(data)
          })
          .catch(error => {
            console.log(error);
          });
          
          
        setLoading(false);
        
      }, 2000);
  
      // Cleanup function to clear the timer if the component unmounts or the effect re-runs
      return () => clearTimeout(timer);
  }, [isloading])
  

  return (
    <div className="relative bg-gray-50 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
      <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Projects
      </h1>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          { isloading ?
            cards.map((card) => (
              <DataLoadingCard />
            ))
            :
            ( projectsList.map((project) => (
              // <ProjectCard key={project.id} project={project} />
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt="" />
                </a>
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {project.name ? project.name : "Project Title"}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <TERipple>
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Project
                    </button>
                  </TERipple>
                </div>
              </div>
            )))

            }


        </div>
      </div>
    </div>
  );
}