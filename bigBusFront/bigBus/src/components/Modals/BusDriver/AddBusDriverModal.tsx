import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { BusDriver } from "../../../models/BusDriver";
import { SimpleBaseModal } from "../BaseModals/SimpleBaseModal";

interface AddBusDriverModalProps {
  state: boolean;
  setState(state: boolean): void;
}

export function AddBusDriverModal({ state, setState }: AddBusDriverModalProps) {
  const [busDriver, setBusDriver] = useState({} as BusDriver);

  const insertBusDriver = async (busDriver: BusDriver) => {
    const res = await api.post("/busDriver", busDriver);
    return res.data;
  };

  const handleConfirm = () => {
    const updatedBusDriver = busDriver;
    insertBusDriver(updatedBusDriver);
    setState(false);
  };

  return (
    <SimpleBaseModal
      title={"Adicionar Motorista"}
      state={state}
      setState={setState}
    >
      <Grid>
        <Grid>
          <TextField
            fullWidth
            required
            label="Cnh Motorista"
            onChange={(e) =>
              setBusDriver({ ...busDriver, cnh: e.target.value })
            }
          />
          <TextField
            fullWidth
            required
            label="Nome do Motorista"
            onChange={(e) =>
              setBusDriver({ ...busDriver, name: e.target.value })
            }
            sx={{ mt: 2 }}
          />
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            color="error"
            variant="contained"
            onClick={() => setState(false)}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            color="success"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Confirmar
          </Button>
        </Grid>
      </Grid>
    </SimpleBaseModal>
  );
}
