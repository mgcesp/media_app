import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, styled, Stack, InputBase, Icon, Badge, Avatar } from '@mui/material'
import { Instagram, Mail, Notifications } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
    padding: "16px"
});

const SearchBox = styled(Box) (({theme}) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "8px",
}));

const SearchIconBox = styled(Box) (({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
    margin: "8px",
    color: "black"
}));

const StyledInputBase = styled(InputBase) (({theme}) => ({
    margin: "0",
    padding: "0"
}));

const IconsBox = styled(Box) (({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    backgroundColor: "gray",
    borderRadius: theme.shape.borderRadius,
}));

const Navbar = () => (
    <Box bgcolor="pink">
        <AppBar position="sticky">
            <StyledToolbar>
                <Stack direction="row" alignItems="center">
                    <IconButton>
                        <Instagram sx={{ color: 'white' }} />
                    </IconButton>
                    <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Instamedia
                    </Typography>
                </Stack>
                <SearchBox>
                    <SearchIconBox>
                        <SearchIcon/>
                    </SearchIconBox>
                    <StyledInputBase placeholder='Search'></StyledInputBase>
                </SearchBox>
                <IconsBox>
                    <Badge badgeContent={3} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={3} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar src=""></Avatar>
                </IconsBox>
            </StyledToolbar>
        </AppBar>
    </Box>
)

export default Navbar