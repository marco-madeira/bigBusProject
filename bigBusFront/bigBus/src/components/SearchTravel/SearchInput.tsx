import { Add, Search } from "@mui/icons-material";
import { Container, Grid, Paper, TextField } from "@mui/material";
import { Header } from "../Header/Header";
import { useState } from "react";
import { ShowTravel } from "./ShowTravel";

export function SearchInput() {
  const [handleTravel, setHandleTravel] = useState(false);
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");

  const searchTravel = () => {
    setHandleTravel(true);
  };

  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
            }}
          >
            <Header
              title="Pesquisar viagem"
              buttonText="Enviar Pesquisa"
              showButton={true}
              icon={<Search />}
              action={searchTravel}
            />
            <Grid sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
              <TextField
                type="text"
                required
                label="Origem"
                fullWidth
                sx={{
                  ml: 3,
                }}
                onChange={(e) => setDeparture(e.target.value)}
              />
              <TextField
                type="text"
                required
                label="Destino"
                fullWidth
                sx={{
                  ml: 3,
                }}
                onChange={(e) => setArrival(e.target.value)}
              />
            </Grid>
          </Paper>
          <ShowTravel state={handleTravel} setState={setHandleTravel} departure={departure} arrival={arrival}/>
        </Grid>
      </Grid>
    </Container>
  );
}
