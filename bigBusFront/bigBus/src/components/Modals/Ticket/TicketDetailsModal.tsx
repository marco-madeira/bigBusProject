import { Grid, Paper, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { api } from "../../../api";
import { Ticket } from "../../../models/Ticket";
import { Travel } from "../../../models/Travel";
import { formatDate } from "../../../utils/DateConvert";
import { toCurrency } from "../../../utils/NumberConvert";
import { formatTime } from "../../../utils/TimeConvert";
import { MultBaseModal } from "../BaseModals/MultBaseModal";

interface TicketDetailsModal {
  state: boolean[];
  setState(state: boolean[]): void;
  index: number;
  ticket: Ticket;
}

export function TicketDetailsModal({
  state,
  setState,
  index,
  ticket,
}: TicketDetailsModal) {
  const { data, isLoading } = useQuery(
    ["getTravelByCod", { id: ticket.travelCod }],
    async () => {
      const res = await api.get<Travel>(
        `/travel/getTravelByCod/${ticket.travelCod}`
      );
      return res.data;
    },
    { enabled: state[index] }
  );

  return (
    <MultBaseModal
      title="Detalhes da viagem"
      state={state}
      setState={setState}
      index={index}
    >
      {data ? (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            p: 2,
            gap:2
          }}
        >
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">Cod Viagem:</Typography>
            <Typography alignSelf="center">{data.cod}</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">Empresa:</Typography>
            <Typography alignSelf="center">{data.companyName}</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">Origem:</Typography>
            <Typography alignSelf="center">{data.departure}</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">Destino:</Typography>
            <Typography alignSelf="center">{data.arrival}</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">Data:</Typography>
            <Typography alignSelf="center">{formatDate(data.dateTravel)}</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">Hora:</Typography>
            <Typography alignSelf="center">{formatTime(data.timeTravel)}</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h6">Preço:</Typography>
            <Typography alignSelf="center">{toCurrency(data.price)}</Typography>
          </Grid>
        </Grid>
      ) : (
        <h1>Loading...</h1>
      )}
    </MultBaseModal>
  );
}
