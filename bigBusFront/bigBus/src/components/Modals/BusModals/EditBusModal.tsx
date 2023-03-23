import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api";
import { Bus } from "../../../models/Bus";
import { MultBaseModal } from "../BaseModals/MultBaseModal";

interface EditBusModalProps {
  state: boolean[];
  setState(state: boolean[]): void;
  index: number;
  bus: Bus;
}

export function EditBusModal({
  state,
  setState,
  index,
  bus,
}: EditBusModalProps) {
  const [newBus, setNewBus] = useState<Bus>(bus);

  const updateBus = async (bus: Bus, plate: string) => {
    const res = await api.put(`/bus/${plate}`, bus);
    return res.data;
  };

  const handleCloseModal = () => {
    setState(state.map((value, pos) => (pos === index ? false : value)));
  };

  const handleConfirm = () => {
    const updatedBus = newBus;
    updateBus(updatedBus, bus.plate);
    handleCloseModal();
  };

  return (
    <MultBaseModal
      title={"Editar Ônibus"}
      state={state}
      setState={setState}
      index={index}
    >
      <Grid>
        <Grid>
          <TextField
            fullWidth
            required
            defaultValue={bus.plate}
            label="Placa do Ônibus"
            onChange={(e) => setNewBus({ ...newBus, plate: e.target.value })}
          />
          <TextField
            fullWidth
            defaultValue={bus.seatNumbers}
            required
            label="Número de assentos"
            onChange={(e) =>
              setNewBus({ ...newBus, seatNumbers: Number(e.target.value) })
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
