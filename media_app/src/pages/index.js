import { 
  styled,
  Button, 
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Stack
} from "@mui/material"

import { 
  Instagram,
  Settings,
  Home,
  Search,
  Explore,
  OndemandVideo,
  Chat,
  FavoriteBorder,
  Add,
  AccountCircle,
} from "@mui/icons-material"

import Sidebar from "@/components/Sidebar";
import Rightbar from "@/components/Rightbar";
import Navbar from "@/components/Navbar";
import Feed from "@/components/Feed";
import { Container } from "@mui/system";

function HomePage() {

  const CustomButton = styled(Button) ({
    color: 'black',
    backgroundColor: 'pink',
    textTransform: "lowercase",
  });

  const drawerWidth = 240;

  return (
    <div>
      
      <Box>
        <Navbar></Navbar>
        <Stack direction="row" m={0} justifyContent="space-between">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      </Box>
    </div>
    // <div>
    //   <AppBar position="fixed">
    //     <Toolbar>
    //       <IconButton sx={{color: '#FFF'}}>
    //         <Instagram/>
    //       </IconButton>
    //       <Typography variant="h6" component="div">
    //         Instamedia
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    
    // </div>
  );
}

export default HomePage
