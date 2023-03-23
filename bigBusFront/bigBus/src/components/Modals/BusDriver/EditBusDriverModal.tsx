import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { Bus } from "../../../models/Bus";
import { BusDriver } from "../../../models/BusDriver";
import { MultBaseModal } from "../BaseModals/MultBaseModal";

interface EditBusDriverModalProps {
  state: boolean[];
  setState(state: boolean[]): void;
  index: number;
  busDriver: BusDriver;
}

export function EditBusDriverModal({
  state,
  setState,
  index,
  busDriver,
}: EditBusDriverModalProps) {
  const [newBusDriver, setNewBusDriver] = useState<BusDriver>(busDriver);

  const updateBusDriver = async (busDriver: BusDriver, cnh: string) => {
    const res = await api.put(`/busDriver/${cnh}`, busDriver);
    return res.data;
  };

  const handleCloseModal = () => {
    setState(state.map((value, pos) => (pos === index ? false : value)));
  };

  const handleConfirm = () => {
    const updatedBusDriver = newBusDriver;
    updateBusDriver(updatedBusDriver, busDriver.cnh);
    handleCloseModal();
  };

  return (
    <MultBaseModal
      title={"Editar Motorista"}
      state={state}
      setState={setState}
      index={index}
    >
      <Grid>
        <Grid>
          <TextField
            fullWidth
            required
            defaultValue={busDriver.cnh}
            label="Cnh"
            onChange={(e) =>
              setNewBusDriver({ ...newBusDriver, cnh: e.target.value })
            }
          />
          <TextField
            fullWidth
            defaultValue={busDriver.name}
            required
            label="Nome do Motorista"
            onChange={(e) =>
              setNewBusDriver({ ...newBusDriver, name: e.target.value })
            }
            sx={{ mt: 2 }}
          />
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleCloseModal}
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
    </MultBaseModal>
  );
}
