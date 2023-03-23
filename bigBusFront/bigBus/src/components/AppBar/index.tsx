import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Grid} from "@mui/material";

interface AppBarProps {
  open?: boolean;
  toggleDrawer(): void;
}

interface AppBarSetupProps {
  open?: boolean;
}

const AppBarSetup = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarSetupProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function AppBar({ open, toggleDrawer }: AppBarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AppBarSetup position="absolute" open={open}>
      <Toolbar sx={{ pr: "24px" }}>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{ marginRight: "36px", ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={handleLogout}>
              <LogoutIcon htmlColor="#ffffff" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarSetup>
  );
}
