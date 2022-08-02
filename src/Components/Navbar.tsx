import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['skills', 'projects', 'about', 'contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component='a' href={`#${item}`} sx={{ textAlign: 'center','&:hover': {
            color: 'gray' } }}>
              <ListItemText primary={item}>{item}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" style={{backgroundColor: "#2e353b", color: "white"}}>
        <Toolbar>    
          <Typography
            variant="h6"
            component="a"
            href='#'
            sx={{ ml:2, flexGrow: 1, textDecoration: 'none', color:'white', '&:hover': {
              color: 'gray' }, display: { xs: 'block'} }}
          >
            Portfolio
          </Typography>
          <Box sx={{display: { xs: 'none', lg: 'block'}}}>
            {navItems.map((item) => (
              <Button key={item} component='a' href={`#${item}`} sx={{mx:1, color: '#fff', '&:hover': {
                color: 'gray' } }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}        
            sx={{ px: 1, display: { lg: 'none' }}}
          >
            <MenuIcon sx={{fontSize: "35px"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
        container={container}
          PaperProps={{sx: {
            backgroundColor:"#2e353b",
            color: "white"
          }}}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}


export default Navbar;
