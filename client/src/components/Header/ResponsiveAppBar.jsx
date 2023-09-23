import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, NavLink, Navigate, useNavigate, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


const pages = ['Home', 'Projects', 'Trending'];
const settings = ['Profile', 'Account', 'Dashboard', 'About',];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const location = useLocation();
  const currentRoutePath = location.pathname;
  const { logout, user } = useAuth()
  const navigate = useNavigate()
  // console.log(currentRoutePath);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    window.alert("You are logout")
    logout()
    
  }
  const handleLogin = () => {
    navigate('/login')
  }

  // const handleTheme = () => {
  //   // console.log(darkTheme.palette.mode);
  //   darkTheme  =  darkTheme.palette.mode === "dark" ? "light" : "dark" 
  //   // setDarkTheme( (prev) => { ...prev, prev.palette.mode: theme })
  //   // setDarkTheme({...darkTheme, (darkTheme.palette.mode = darkTheme.palette.mode === "dark" ? "light" : "dark"  })
  //   // darkTheme.palette.mode = darkTheme.palette.mode === "dark" ? "light" : "dark";
  // }
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit the search term to the backend
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" >
        <Container  maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to='/'>SIH</Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  // <Link key={page} to={`/${ page === "Home" ? "": page.toLowerCase()}`} style={{ textDecoration: 'none' }} >
                  <NavLink key={page} to={`/${ page === "Home" ? "": page.toLowerCase()}`} style={ { textDecoration: 'none', } }>
                    <MenuItem  onClick={ handleCloseNavMenu }>
                      <Typography textAlign="center"
                        sx={{  display: 'block' , color: `${ currentRoutePath === `/${page === 'Home' ? "" : page.toLowerCase()}` ? "orange" : "white" }` ,  }}
                      >
                        {page}</Typography>
                    </MenuItem>
                  </NavLink>
                  // </Link>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SIH
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                // <Link key={page} to={`/${ page === "Home" ? "": page.toLowerCase()}`} style={{ textDecoration: 'none' }} >
                <NavLink key={page} to={`/${ page === "Home" ? "": page.toLowerCase()}`} style={ { textDecoration: 'none', } }>
                  <Button
                    onClick={ handleCloseNavMenu}
                    sx={{ my: 2, display: 'block' , color: `${ currentRoutePath === `/${page === 'Home' ? "" : page.toLowerCase()}` ? "orange" : "white" }` ,  }}
                  >
                    {page}
                  </Button>
                  </NavLink>
                // </Link>
              ))}
            </Box>

            <Box className="flex gap-x-3" sx={{ flexGrow: 0 }}>
            <form onSubmit={handleSubmit}>
              <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-200 focus:border-blue-500 dark:bg-stone-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-stone-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-stone-900 dark:hover:bg-stone-800 dark:focus:ring-stone-800">Search</button>
              </div>
            </form>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <NavLink key={setting} to={`/${ setting === "Home" ? "": setting.toLowerCase()}`} style={ { textDecoration: 'none', color: `${ currentRoutePath === `/${setting.toLowerCase()}` ? "orange" : "white" }` } }>
                    <MenuItem key={setting} onClick={setting==="Logout" ? handleLogout :handleCloseUserMenu} style={{ textDecoration: 'none', color: "inherit"}}>
                      <Typography textAlign="center" color={ "inherit"} sx={{  display: 'block' ,  }}>{setting}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
                {
                  user ? (
                    <NavLink style={ { textDecoration: 'none' } }>
                    <MenuItem onClick={ handleLogout } style={{ textDecoration: 'none', color: "inherit"}}>
                      <Typography textAlign="center" color={ "inherit"} sx={{  display: 'block' ,  }}>Logout</Typography>
                    </MenuItem>
                  </NavLink>
                  ) : (
                    <NavLink style={ { textDecoration: 'none' } }>
                    <MenuItem onClick={ handleLogin } style={{ textDecoration: 'none', color: "inherit"}}>
                      <Typography textAlign="center" color={ "inherit"} sx={{  display: 'block' ,  }}>Login</Typography>
                    </MenuItem>
                  </NavLink>
                  )
                }
                
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;