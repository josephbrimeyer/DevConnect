import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeveloperGallery from '../DeveloperGallery';
import CreateProfilePage from '../CreateProfilePage';
import PostAdPage from '../PostAdPage';
import ProjectBoard from '../ProjectBoard';
import SignIn from '../SignIn';
import Profile from "../Profile";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



// Code from listitems.js start

export const mainListItems = (
  <div>
      <ListItem button>
        <ListItemIcon>
         <Link to="/DeveloperGallery"> <DashboardIcon /></Link>
        </ListItemIcon>
        <Link to="/DeveloperGallery"><ListItemText primary="Developer Gallery" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <Link to="/CreateProfilePage"><PeopleIcon /></Link>
        </ListItemIcon>
        <Link to="/CreateProfilePage"><ListItemText primary="Create Profile" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
         <Link to="/ProjectBoard"> <DashboardIcon /></Link>
        </ListItemIcon>
        <Link to="/ProjectBoard"><ListItemText primary="Project Board" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
        <Link to="/PostAdPage"><BarChartIcon /></Link>
        </ListItemIcon>
        <Link to="/PostAdPage"><ListItemText primary="Post Project" /></Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
         <Link to="/Profile"> <DashboardIcon /></Link>
        </ListItemIcon>
        <Link to="/Profile"><ListItemText primary="Profile" /></Link>
      </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
        <ListItemIcon>
        <Link to="/SignIn"><BarChartIcon /></Link>
        </ListItemIcon>
        <Link to="/SignIn"><ListItemText primary="Sign In" /></Link>
      </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>

  </div>
);


// Code from listitems.js end

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
          style={{ background: '#455a64' }}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              align="center"
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              className={classes.title}
            > 
               Dev Connect
          </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route path="/DeveloperGallery">
            <DeveloperGallery />
          </Route>
          <Route path="/ProjectBoard">
            <ProjectBoard />
          </Route>
          <Route path="/CreateProfilePage">
            <CreateProfilePage />
          </Route>
          <Route path="/PostAdPage">
            <PostAdPage/>
          </Route>
          <Route path="/SignIn">
            <SignIn/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
        </Switch>
        </main>
      </Router>
      
    </div >
  );
}