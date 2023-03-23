import { Add } from "@mui/icons-material";
import { Container, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Header } from "../Header/Header";
import { AddBusModal } from "../Modals/BusModals/AddBusModal";
import { BusTable } from "./BusTable";

export function BusPage() {
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
              title={"Cadastro de ônibus"}
              showButton={true}
              buttonText={"Adicionar Ônibus"}
              icon={<Add />}
              action={()=> setOpenAddModal(true)}
            />
            <AddBusModal state={openAddModal} setState={setOpenAddModal}/>
            <BusTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
