import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { Bus } from "../../../models/Bus";
import { SimpleBaseModal } from "../BaseModals/SimpleBaseModal";

interface AddBusModalProps {
  state: boolean;
  setState(state: boolean): void;
}

export function AddBusModal({ state, setState }: AddBusModalProps) {
  const [bus, setBus] = useState({} as Bus);

  const insertBus = async (bus:Bus) => {
    const res = await api.post("/bus", bus)
    return res.data;
  }

  const handleConfirm = ()=>{
    const updatedBus =  {...bus, isAvailable: true } as Bus;
     insertBus(updatedBus);
     setState(false)
   }

  return (
    <SimpleBaseModal
      title={"Adicionar Ônibus"}
      state={state}
      setState={setState}
    >
      <Grid>
        <Grid>
          <TextField
            fullWidth
            required
            label="Placa do Ônibus"
            onChange={(e) => setBus({ ...bus, plate: e.target.value })}
          />
          <TextField
            fullWidth
            required
            label="Número de assentos"
            onChange={(e) =>
              setBus({ ...bus, seatNumbers: Number(e.target.value) })
            }
            sx={{mt:2}}
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
          onClick={handleConfirm} color="success" variant="contained" sx={{ ml: 2 }}>
            Confirmar
          </Button>
        </Grid>
      </Grid>
    </SimpleBaseModal>
  );
}
