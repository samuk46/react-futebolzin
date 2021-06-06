import {
  Divider,
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IconButton } from "@material-ui/core";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuContext from "../../context/MenuContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();

  const { menuAberto, setMenuAberto } = useContext(MenuContext);

  const menus = [
    { titulo: "Main", rota: "/" },
    { titulo: "Contatos", rota: "/contato" },
    { titulo: "Send email", rota: "/send-email" },
    { titulo: "Drafts", rota: "/drafts" },
  ];

  const DrawerComponent = () => (
    <div>
      <div className={classes.toolbar}>
        <IconButton onClick={() => setMenuAberto(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{montarMenus()}</List>
      <Divider />
      <List>{montarMenus()}</List>
      <Divider />
      <List>{montarMenus()}</List>
    </div>
  );

  function montarMenus() {
    return menus.map((menu, index) => (
      <Link to={menu.rota} key={menu.titulo}>
        <ListItem button>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={menu.titulo} />
        </ListItem>
      </Link>
    ));
  }

  return (
    <>
      <nav aria-label="mailbox folders" className={classes.drawer}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={menuAberto}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerComponent />
        </Drawer>
      </nav>
    </>
  );
}
