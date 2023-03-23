import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../../api";
import { Bus } from "../../../models/Bus";
import { TravelDTO } from "../../../models/dtos/TravelDTO";
import { Travel } from "../../../models/Travel";
import { SimpleBaseModal } from "../BaseModals/SimpleBaseModal";

interface AddTravelModalProps {
  state: boolean;
  setState(state: boolean): void;
}

export function AddTravelModal({ state, setState }: AddTravelModalProps) {
  const [travel, setTravel] = useState({} as TravelDTO);
  const [buses, setBuses] = useState<string[]>([]);

  const insertTravel = async (travelDTO: TravelDTO) => {
    const res = await api.post("/travel", travelDTO);
    return res.data;
  };

  const { data } = useQuery(
    ["getAllAvailableBuses"],
    async () => {
      const res = await api.get<Bus[]>("/bus/getAllAvailableBuses");
      return res.data;
    },
    {
      onSuccess: (data) => {
        setBuses(data.map((value) => value.plate));
      },
    }
  );

  const handleConfirm = () => {
    const updatedTravel = travel;
    insertTravel(updatedTravel);
    setState(false);
  };

  return (
    <SimpleBaseModal
      title={"Adicionar Viagem"}
      state={state}
      setState={setState}
    >
      <Grid>
        <Grid>
        <TextField
            fullWidth
            required
            label="Nome Empresa"
            onChange={(e) =>
              setTravel({ ...travel, companyName: e.target.value })
            }
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Origem"
            onChange={(e) =>
              setTravel({ ...travel, departure: e.target.value })
            }
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Destino"
            onChange={(e) => setTravel({ ...travel, arrival: e.target.value })}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Dia da Viagem"
            onChange={(e) => setTravel({ ...travel, dateTravel: Number(e.target.value)})}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Hora da Viagem"
            onChange={(e) => setTravel({ ...travel, timeTravel: Number(e.target.value) })}
            sx={{ mt: 2 }}
          />
            <TextField
              fullWidth
              required
              label="Preço da Passagem"
              onChange={(e) =>
                setTravel({ ...travel, price: Number(e.target.value) })
              }
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              required
              label="Cnh Motorista"
              onChange={(e) =>
                setTravel({ ...travel, driverCnh: e.target.value})
              }
              sx={{ mt: 2 }}
            />
            <Autocomplete
              options={buses}
              onChange={(e, value) => setTravel({...travel, plate: value!})}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Ônibus"
                  fullWidth
                  sx={{ mt: 2 }}
                />
              )}
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
