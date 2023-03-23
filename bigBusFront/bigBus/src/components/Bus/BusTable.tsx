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
import { Bus } from "../../models/Bus";
import { EditBusModal } from "../Modals/BusModals/EditBusModal";

export function BusTable() {
  const { data, isSuccess } = useQuery(
    ["bus/getAllBuses"],
    async () => {
      const res = await api.get<Bus[]>("/bus/getAllBuses");
      return res.data;
    },
    {
      onSuccess: (data) => {
        setOpenEditModal(Array(data.length).fill(false));
      },
    }
  );

  const deleteBus = async (plate: string) => {
    const res = await api.delete(`/bus/${plate}`);
    return res.data;
  };

  const [openEditModal, setOpenEditModal] = useState<boolean[]>([]);

  const handleOpenEditModal = (index:number)=>{
    setOpenEditModal(openEditModal.map((value,pos)=> pos === index ? true : value))
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Placa</TableCell>
            <TableCell>Nº de Assentos</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Deletar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((value, index) => (
            <TableRow key={value.plate}>
              <TableCell>{value.plate}</TableCell>
              <TableCell>{value.seatNumbers}</TableCell>
              <TableCell>
                <IconButton color="info" onClick={()=> handleOpenEditModal(index)}>
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  onClick={() => deleteBus(value.plate)}
                >
                  <Delete />
                </IconButton>
              </TableCell>
              <EditBusModal
                state={openEditModal}
                setState={setOpenEditModal}
                index={index}
                bus={value}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
