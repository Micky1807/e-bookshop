import React from 'react';
import { AppBar, Toolbar, styled, IconButton, Drawer, Box, List} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const StyledHeader = styled(AppBar)`
background:#454545;
height: 55px;
`;
const Components = styled(Link)`
margin-left:5%;
line-height:0;
color: inherit;
`

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
   const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (

        <StyledHeader>
            <Toolbar style={{ minHeight: 55}}>
            <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>

                <Components to='/'>
                    <img src='/logo.png' alt="logo" style={{ width: 100 }} />
                </Components>
                    <Search/>
                    <CustomButtonWrapper>
                        <CustomButtons/>
                    </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>

    )
}
export default Header;