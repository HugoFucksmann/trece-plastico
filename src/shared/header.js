import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Slide } from "@mui/material";
import logo from "../assets/home/Logo-Plasticos.png";
import LogoBlanco from "../assets/LogoBlanco.png";
import { isMobile } from "../helpers/isMobile";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HeaderTreceMobile(props) {
  const location = useLocation();
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [headerBack, setHeaderBack] = React.useState(false);

  React.useEffect(() => {
    let reg = window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleScroll = () => {
    if (window.pageYOffset > 60) {
      setHeaderBack(true);
    } else {
      setHeaderBack(false);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <HideOnScroll {...props}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          elevation={0}
          position="fixed"
          open={open}
          style={{ backgroundColor: "#fff", paddingBottom: 12 }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                width: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {!open && (
                <img
                  onClick={() => navigate("/")}
                  src={props.logo}
                  alt="logo"
                  style={{
                    margin: 12,
                    height: 34,
                    cursor: "pointer",
                    alignSelf: "center",
                  }}
                />
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div style={{ backgroundColor: "#004A89", height: "100%" }}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon style={{ color: "#fff" }} />
                ) : (
                  <ChevronRightIcon style={{ color: "#fff" }} />
                )}
              </IconButton>
            </DrawerHeader>

            <List>
              {props.pages.map((page) => (
                <ListItem key={page.link} disablePadding>
                  <ListItemButton>
                    <MenuItem
                      onClick={() => {
                        navigate(page.link);
                        setOpen(false);
                      }}
                    >
                      <span
                        style={{
                          fontSize: 34,
                          marginRight: 8,
                          color: "#00C4AE",
                        }}
                      >
                        •
                      </span>
                      <Typography
                        textAlign="center"
                        style={{
                          color: "#fff",
                          fontFamily: "museoSansRoundedBold",
                        }}
                      >
                        {page.txt}
                      </Typography>
                    </MenuItem>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </HideOnScroll>
  );
}

HeaderTreceMobile.defaultProps = {
  logo: logo,
  pages: [
    { txt: "Home", link: "" },
    { txt: "Productos", link: "productos" },
    { txt: "Quienes Somos", link: "quienessomos" },
    { txt: "Donde Comprar", link: "dondecomprar" },
    { txt: "Sumate", link: "sumate" },
  ],
};
