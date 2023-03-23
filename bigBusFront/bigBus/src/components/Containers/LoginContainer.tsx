import { Grid, Box, ThemeProvider } from "@mui/material";
import { Theme } from "../../utils/Theme";

interface DashBoardContainerProps {
  children: React.ReactNode;
}

export function LoginContainer({ children }: DashBoardContainerProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          backgroundColor: "#F0F0F0",
          height: "100vh",
          flexGrow: 1,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
