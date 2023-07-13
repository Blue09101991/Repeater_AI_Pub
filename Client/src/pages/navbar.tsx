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

import { Link, useHistory } from 'react-router-dom';


const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const history = useHistory();

    const handleSettings = () => {
        history.push('/homepage/settings');
    };

    const handleChangePass = () => {
        history.push('/forget');
    };

    const handleLogOut = () => {
        history.push('/logout');
    };



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className='toolbar-style'>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <img alt="Remy Sharp" src="/static/images/logo/logo.png" style={{ width: '80px', height: '80px' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 10,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: '@font-face, Logirent',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        REPEATER AI
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
                            <MenuItem key="playground" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">PLAYGROUND</Typography>
                            </MenuItem>
                            <MenuItem key="playground" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">COMPARE</Typography>
                            </MenuItem>
                            <MenuItem key="playground" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">SETTINGS</Typography>
                            </MenuItem><MenuItem key="playground" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">CHAT</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key="playground"
                            href="/homepage/playground"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            PLAYGROUND
                        </Button>
                        <Button
                            key="playground"
                            href="/homepage/compare"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Compare
                        </Button>
                        {/* <Button
                            key="playground"
                            href="/homepage/settings"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Settings
                        </Button> */}
                        <Button
                            key="playground"
                            href="/homepage/chat"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Chat
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/logo/user1.png" />
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
                            {/* {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))} */}
                            <MenuItem key="changePassword" onClick={handleSettings}>
                                <Typography textAlign="center">Settings</Typography>
                            </MenuItem>
                            <MenuItem key="changePassword" onClick={handleChangePass}>
                                <Typography textAlign="center">Change Password</Typography>
                            </MenuItem>
                            <MenuItem key="logOut" onClick={handleLogOut}>
                                <Typography textAlign="center">Log Out</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;