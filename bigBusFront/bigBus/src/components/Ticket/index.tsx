import { Cancel, FormatListBulleted } from "@mui/icons-material";
import {
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";
import { Ticket } from "../../models/Ticket";
import { formatDate } from "../../utils/DateConvert";
import { toCurrency } from "../../utils/NumberConvert";
import { formatTime } from "../../utils/TimeConvert";
import { Header } from "../Header/Header";
import { TicketDetailsModal } from "../Modals/Ticket/TicketDetailsModal";

export function TicketPage() {
  const cpf = "55555555555";

  const [openDetailsModal, setOpenDetailsModal] = useState<boolean[]>([]);
  const { data } = useQuery(
    ["getTicketByCpf", { param: cpf }],
    async () => {
      const res = await api.get<Ticket[]>(`/ticket/getTicketByCpf/${cpf}`);
      return res.data;
    },
    {
      onSuccess: (data) => {
        setOpenDetailsModal(Array(data.length).fill(false));
      },
    }
  );

  const handleOpenDetailsModa = (index: number) => {
    setOpenDetailsModal(
      openDetailsModal.map((value, pos) => (pos === index ? true : value))
    );
  };

  const deleteTicket = async (id: number) => {
    const res = await api.delete(`/ticket/${id}`);
    res.data;
  };

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
            <Header title="Histórico de passagem" showButton={false} />
            <Grid>
              {data?.map((value, index) => (
                <>
                  <Grid
                    key={value.cod}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      p: 2,
                    }}
                  >
                    <Grid
                      item
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography variant="h6">Codigo Passagem:</Typography>
                      <Typography alignSelf="center">
                        {value.cod}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography variant="h6">Data:</Typography>
                      <Typography alignSelf="center">
                        {formatDate(value.date)}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography variant="h6">Hora:</Typography>
                      <Typography alignSelf="center">{formatTime(value.time)}</Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography variant="h6">Preço:</Typography>
                      <Typography alignSelf="center">
                        {toCurrency(value.price)}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <Tooltip title="Detalhes Passagem">
                        <IconButton
                          color="info"
                          onClick={() => handleOpenDetailsModa(index)}
                        >
                          <FormatListBulleted />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    <TicketDetailsModal
                      state={openDetailsModal}
                      setState={setOpenDetailsModal}
                      index={index}
                      ticket={value}
                    />
                    <Tooltip title="Cancelar viagem">
                    <IconButton
                      color="error"
                      onClick={() => deleteTicket(value.cod)}
                    >
                      <Cancel />
                    </IconButton>
                    </Tooltip>
                  </Grid>
                  <Divider />
                </>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
