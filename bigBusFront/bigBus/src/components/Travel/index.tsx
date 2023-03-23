import { Add } from "@mui/icons-material";
import { Container, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Header } from "../Header/Header";
import { AddTravelModal } from "../Modals/Travel/AddTravelModal";
import { TravelTable } from "./TravelTable";

export function TravelPage() {
  const [openAddModal, setOpenAddModal] = useState(false);

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
              title={"Cadastro de Viagens"}
              showButton={true}
              buttonText={"Adicionar Viagem"}
              icon={<Add />}
              action={() => setOpenAddModal(true)}
            />
            <AddTravelModal state={openAddModal} setState={setOpenAddModal}/>
            <TravelTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
