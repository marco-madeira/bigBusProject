import { Edit, Delete } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";
import { Travel } from "../../models/Travel";
import { formatDate } from "../../utils/DateConvert";
import { toCurrency } from "../../utils/NumberConvert";
import { formatTime } from "../../utils/TimeConvert";
import { EditTravelModal } from "../Modals/Travel/EditTravelModa";

export function TravelTable() {
  const companyName = "Viação Haaland";

  const { data, isSuccess } = useQuery(
    ["/travel/getTravelByCompanyName"],
    async () => {
      const res = await api.get<Travel[]>(
        `/travel/getTravelByCompanyName/${companyName}`
      );
      return res.data;
    },
    {
      onSuccess: (data) => {
        setOpenEditModal(Array(data.length).fill(false));
        console.log(data);
      },
    }
  );

  const deleteTravel = async (id: number) => {
    const res = await api.delete(`/travel/${id}`);
    return res.data;
  };

  const [openEditModal, setOpenEditModal] = useState<boolean[]>([]);

  const handleOpenEditModal = (index: number) => {
    setOpenEditModal(
      openEditModal.map((value, pos) => (pos === index ? true : value))
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Código</TableCell>
          <TableCell>Empresa</TableCell>
          <TableCell>Origem</TableCell>
          <TableCell>Destino</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Hora</TableCell>
          <TableCell>Preço</TableCell>
          <TableCell>Editar</TableCell>
          <TableCell>Deletar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((value, index) => (
          <TableRow key={index}>
            <TableCell>{value.cod}</TableCell>
            <TableCell>{value.companyName}</TableCell>
            <TableCell>{value.departure}</TableCell>
            <TableCell>{value.arrival}</TableCell>
            <TableCell>{formatDate(value.dateTravel)}</TableCell>
            <TableCell>{formatTime(value.timeTravel)}</TableCell>
            <TableCell>{toCurrency(value.price)}</TableCell>
            <TableCell>
              <IconButton
                color="info"
                onClick={() => handleOpenEditModal(index)}
              >
                <Edit />
              </IconButton>
            </TableCell>
            <TableCell>
              <IconButton color="error" onClick={() => deleteTravel(value.cod)}>
                <Delete />
              </IconButton>
            </TableCell>
            <EditTravelModal
              state={openEditModal}
              setState={setOpenEditModal}
              index={index}
              travel={value}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
