import {
    Grid,
    Box,
    Container,
    ThemeProvider,
  } from "@mui/material";
  import { useState } from "react";
import { Theme } from "../../utils/Theme";
  import { AppBar } from "../AppBar";
  import { Drawer } from "../Drawer";
  
  interface DashBoardContainerProps {
    children: React.ReactNode;
  }
  
  export function DashBoardContainer({ children }: DashBoardContainerProps) {
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          sx={{
            backgroundColor: "#F0F0F0",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 15, mb: 6 }}>
            <Grid container>{children}</Grid>
          </Container>
        </Box>
      </Box>
      </ThemeProvider>
    );
  }
  