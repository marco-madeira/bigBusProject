import { LocalAtm } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { api } from "../../api";
import { TicketDTO } from "../../models/dtos/TicketDTO";
import { Travel } from "../../models/Travel";
import { formatDate } from "../../utils/DateConvert";
import { toCurrency } from "../../utils/NumberConvert";
import { formatTime } from "../../utils/TimeConvert";

interface ShowTravelProps {
  state: boolean;
  setState(state: boolean): void;
  departure: string;
  arrival: string;
}

export function ShowTravel({
  state,
  setState,
  departure,
  arrival,
}: ShowTravelProps) {
  
  const { data, isLoading, isError } = useQuery(
    ["travel/getTravelByRoute", { param1: departure, param2: arrival }],
    async () => {
      const response = await api.get<Travel[]>(
        `travel/getTravelByRoute/${departure}/${arrival}`
      );
      return response.data;
    },
    { enabled: state }
  );

  const buyTicket = async (ticketDTO: TicketDTO) => {
         const res = await api.post("/ticket", ticketDTO);  
         return res.data;   
  }
    
  return (
    <>
      {isLoading ? (
        <Grid>
          <Grid sx={{ mt: 3 }}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                p: 2,
              }}
            >
              <Typography variant="h6">
                Loading....
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Grid>
          {data?.map((value) => (
            <Grid sx={{ mt: 3 }} key={value.cod}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  p: 2,
                }}
              >
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Cod Viagem:</Typography>
                  <Typography alignSelf="center">{value.cod}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Empresa:</Typography>
                  <Typography alignSelf="center">{value.companyName}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Origem:</Typography>
                  <Typography alignSelf="center">{value.departure}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Destino:</Typography>
                  <Typography alignSelf="center">{value.arrival}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Data:</Typography>
                  <Typography alignSelf="center">{formatDate(value.dateTravel)}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Hora:</Typography>
                  <Typography alignSelf="center">{formatTime(value.timeTravel)}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Preço:</Typography>
                  <Typography alignSelf="center">{toCurrency(value.price)}</Typography>
                </Grid>
                <Button
                  variant="contained"
                  startIcon={<LocalAtm />}
                  sx={{ height: 35 }}
                  onClick={()=> buyTicket({
                    "cpf": "55555555555",
                    "travelCod": value.cod,
                    "price": value.price,
                    "date": Number(value.dateTravel),
                    "time": Number(value.timeTravel)
                  } as TicketDTO)}
                >
                  Comprar Passagem
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
