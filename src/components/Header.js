import React, {useState, useEffect} from 'react'
import { AppBar, Button, Icon, IconButton, Stack, Switch, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Logout, Pets } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})


const Header = () => {
    
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("logged", JSON.stringify(logged)) === "true") {
        setLogged(true)
        }
      }, [logged]);

      const handleChange = () => {
        localStorage.setItem("darkmode",true);
      }

  return (
    <div>
        {
            logged ?
        
    <AppBar position="sticky">
        <StyledToolBar>
            <Typography variant='h6'> 
                <Icon>
                    <Pets />
                </Icon>
                CatApp
            </Typography>
            <Stack direction="row" spacing={2}>
                <Link to={"/cats"}>
                <Button color="inherit">Cats</Button>
                </Link>
                <Link to={"/favorites"}>
                <Button color="inherit">Favorites</Button>
                </Link>
                <Link to={"/"}>
                <IconButton color="inherit"><Logout /></IconButton>
                </Link>
            </Stack>
        </StyledToolBar>
    </AppBar>
    :
    <AppBar>
        <StyledToolBar>
            <Typography variant='h6'> 
                <Icon>
                    <Pets />
                </Icon>
                CatApp
            </Typography>
            <Stack direction="row" spacing={2}>
                <Typography>
                    Login
                </Typography>
            </Stack>
        </StyledToolBar>
    </AppBar>
    }
    </div>
  )
}

export default Header