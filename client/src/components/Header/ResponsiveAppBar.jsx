import * as React from 'react';
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
import { Link, NavLink, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { LogoDev } from '@mui/icons-material';

const pages = ['Home', 'Projects', 'Trending'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

  // const handleTheme = () => {
  //   // console.log(darkTheme.palette.mode);
  //   darkTheme  =  darkTheme.palette.mode === "dark" ? "light" : "dark" 
  //   // setDarkTheme( (prev) => { ...prev, prev.palette.mode: theme })
  //   // setDarkTheme({...darkTheme, (darkTheme.palette.mode = darkTheme.palette.mode === "dark" ? "light" : "dark"  })
  //   // darkTheme.palette.mode = darkTheme.palette.mode === "dark" ? "light" : "dark";
  // }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
              SIH-Project
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
              SIH-Project
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

            <Box sx={{ flexGrow: 0 }}>
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu} style={{ textDecoration: 'none', color: "inherit"}}>
                      <Typography textAlign="center" color={ "inherit"} sx={{  display: 'block' ,  }}>{setting}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
                
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;