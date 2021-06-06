import React, { useContext } from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import MenuContext from "../../context/MenuContext";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBarFechado: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarAberto: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonAberto: {
    display: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const { menuAberto, setMenuAberto } = useContext(MenuContext);
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        className={!menuAberto ? classes.appBarFechado : classes.appBarAberto}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMenuAberto(true)}
            className={clsx(classes.menuButton, menuAberto && classes.menuButtonAberto)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
