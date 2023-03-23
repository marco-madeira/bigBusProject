import { Grid, Paper, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid item display="flex">
        <Paper
          sx={{
            display: "flex",
            mt: 15,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 2,
              width: 300,
            }}
          >
            <Grid item alignSelf="center">
              <Typography variant="h5">Big Bus</Typography>
            </Grid>
            <Grid item>
              <TextField
                type="email"
                required
                label="Digite o email"
                size="small"
                fullWidth
              />
              <TextField
                type="password"
                required
                label="Digite a senha"
                size="small"
                fullWidth
                sx={{
                  mt: 3,
                }}
              />
            </Grid>
            <Grid item alignSelf="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/customer/searchTravel")}
              >
                Confirmar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
