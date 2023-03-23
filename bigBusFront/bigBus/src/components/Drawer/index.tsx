import { Close } from "@mui/icons-material";
import { Divider, IconButton, List, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { MenuMenu } from "../MenuList";

interface DrawerProps {
  open?: boolean;
  toggleDrawer(): void;
}

interface DrawerSetupProps {
  open?: boolean;
}

const DrawerSetup = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<DrawerSetupProps>(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export function Drawer({ open, toggleDrawer }: DrawerProps) {

  return (
    <DrawerSetup variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <Close />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MenuMenu/>
        <Divider sx={{ my: 1 }} />
      </List>
    </DrawerSetup>
  );
}
