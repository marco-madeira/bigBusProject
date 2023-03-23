import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../../api";
import { Bus } from "../../../models/Bus";
import { TravelDTO } from "../../../models/dtos/TravelDTO";
import { Travel } from "../../../models/Travel";
import { MultBaseModal } from "../BaseModals/MultBaseModal";

interface EditnewTravelModalProps {
  state: boolean[];
  setState(state: boolean[]): void;
  index: number;
  travel: Travel;
}

export function EditTravelModal({
  state,
  setState,
  index,
  travel,
}: EditnewTravelModalProps) {

  const [newTravel, setNewTravel] = useState<TravelDTO>(
    {
      "date": travel.date,
      "time": travel.time,
      "departure": travel.departure,
      "arrival": travel.arrival,
      "companyName": travel.companyName,
      "driverCnh": travel.driverCnh,
      "plate": travel.plate,
      "price": travel.price
    }as TravelDTO
  );
  const [buses, setBuses] = useState<string[]>([]);

  const updatenewTravel = async (travelDTO: TravelDTO, cod: number) => {
    const res = await api.put(`/newTravel/${cod}`, travelDTO);
    return res.data;
  };

  const handleCloseModal = () => {
    setState(state.map((value, pos) => (pos === index ? false : value)));
  };

  const handleConfirm = () => {
    const updatednewTravel = newTravel;
    updatenewTravel(updatednewTravel, travel.cod);
    handleCloseModal();
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
            defaultValue={travel.companyName}
            label="Nome Empresa"
            onChange={(e) =>
                setNewTravel({ ...newTravel, companyName: e.target.value })
            }
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            defaultValue={travel.departure}
            label="Origem"
            onChange={(e) =>
                setNewTravel({ ...newTravel, departure: e.target.value })
            }
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            defaultValue={travel.arrival}
            label="Destino"
            onChange={(e) => setNewTravel({ ...newTravel, arrival: e.target.value })}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            defaultValue={travel.date}
            label="Dia da Viagem"
            onChange={(e) => setNewTravel({ ...newTravel, date: Number(e.target.value)})}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            required
            defaultValue={travel.time}
            label="Hora da Viagem"
            onChange={(e) => setNewTravel({ ...newTravel, time: Number(e.target.value) })}
            sx={{ mt: 2 }}
          />
            <TextField
              fullWidth
              required
              defaultValue={travel.price}
              label="Preço da Passagem"
              onChange={(e) =>
                setNewTravel({ ...newTravel, price: Number(e.target.value) })
              }
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              required
              defaultValue={travel.driverCnh}
              label="Cnh Motorista"
              onChange={(e) =>
                setNewTravel({ ...newTravel, driverCnh: e.target.value})
              }
              sx={{ mt: 2 }}
            />
            <Autocomplete
              options={buses}
              defaultValue={travel.plate}
              onChange={(e, value) => setNewTravel({...newTravel, plate: value!})}
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
              onClick={handleCloseModal}
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

