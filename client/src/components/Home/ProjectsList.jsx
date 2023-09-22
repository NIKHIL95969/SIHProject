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

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function ProjectsList() {

  const [projectsList, setProjectsList] = useState()

  useEffect(() => {

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
  }, [])
  

  return (
    <div className="relative bg-gray-50 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {projectsList.map( (project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}