import { Add } from "@mui/icons-material";
import { Container, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Header } from "../Header/Header";
import { AddBusDriverModal } from "../Modals/BusDriver/AddBusDriverModal";
import { BusDriverTable } from "./DriverTable";

export function BusDriverPage() {
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
              title={"Cadastro de motorista"}
              showButton={true}
              buttonText={"Adicionar Motorista"}
              icon={<Add />}
              action={() => setOpenAddModal(true)}
            />
            <AddBusDriverModal
              state={openAddModal}
              setState={setOpenAddModal}
            />
            <BusDriverTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
