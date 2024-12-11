import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';


export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const user = useSelector((state:RootState) => state.user);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let pages:{ name: string; link: string; }[] = []

  let auth:{ name: string; link: string; }[] = []

  if(user.logged){
    pages = [
      {
        name:"empleados",
        link:"/employees"
      },
      {
        name:"inventario",
        link:"/inventory"
      }
    ]
    auth = [
      {
        name:"Usuario",
        link:"/User"
      }
    ]
  }
  else{
    auth = [
      {
        name:"login",
        link:"/login"
      },
      {
        name:"regirtrarse",
        link:"/register"
      }
    ]
  }

  return(
    <AppBar sx={{height:64}}>
    <Container maxWidth={false}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          INVENTARIOS
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
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
            sx={{ display: { xs: 'block', md: 'none' } }}
          >

            {
              pages.map(page => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.name}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))
            }

          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          INVENTARIOS
        </Typography>


        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {
          pages.map(page => (
            <Link key={page.name} to={page.link}>
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            </Link>
          ))
        }
        </Box>
        
          
        

        <Box sx={{width:"min-content", display:{ xs: 'none', md: 'flex' }}}>
          {
            auth.map(auth => (
              <Link key={auth.name} to={auth.link}>
                <Button
                  key={auth.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {auth.name}
                </Button>
              </Link>
            ))
          }
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}