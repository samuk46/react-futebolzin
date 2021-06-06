import { makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import MenuContext from "../../context/MenuContext";
import Routes from "../../routes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "240px",
  },
}));

export default function Conteudo() {
  const classes = useStyles();

  const { menuAberto } = useContext(MenuContext);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: menuAberto,
      })}
    >
      <div className={classes.drawerHeader} />
      <Routes />
    </main>
  );
}
