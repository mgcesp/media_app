import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {
  Home,
  Search,
  Explore,
  OndemandVideo,
  Chat,
  FavoriteBorder,
  Add,
  AccountCircle,
} from "@mui/icons-material"

const Sidebar = () => {
  return (
    <Box bgcolor="#EEE" flex={1} sx={{ display: { xs:"none", sm:"block"} }}>
      <List>
       <ListItemButton>
         <ListItemIcon>
           <Home/>
         </ListItemIcon>
         <ListItemText primary="Home"/>
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
           <Search/>
         </ListItemIcon>
         <ListItemText primary="Search"/>
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
           <Explore/>
         </ListItemIcon>
         <ListItemText primary="Explore"/>
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
         <OndemandVideo />
         </ListItemIcon>
         <ListItemText primary="Reels"/>
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
           <Chat/>
         </ListItemIcon>
         <ListItemText primary="Messages"/>
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
           <FavoriteBorder/>
         </ListItemIcon>
         <ListItemText primary="Notifications"/>
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
           <Add/>
         </ListItemIcon>
         <ListItemText primary="Create"/>
       </ListItemButton>
       <ListItemButton>
         <ListItemIcon>
           <AccountCircle/>
         </ListItemIcon>
         <ListItemText primary="Profile"/>
       </ListItemButton>
     </List>
    </Box>
  )
}

export default Sidebar