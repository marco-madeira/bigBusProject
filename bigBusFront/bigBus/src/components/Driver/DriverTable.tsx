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
import { BusDriver } from "../../models/BusDriver";
import { EditBusDriverModal } from "../Modals/BusDriver/EditBusDriverModal";
import { EditBusModal } from "../Modals/BusModals/EditBusModal";

export function BusDriverTable() {
  const { data, isSuccess } = useQuery(
    ["/busDriver/getAllDrivers"],
    async () => {
      const res = await api.get<BusDriver[]>("/busDriver/getAllDrivers");
      return res.data;
    },
    {
      onSuccess: (data) => {
        setOpenEditModal(Array(data.length).fill(false));
      },
    }
  );

  const deleteBusDriver = async (cnh: string) => {
    const res = await api.delete(`/busDriver/${cnh}`);
    return res.data;
  };

  const [openEditModal, setOpenEditModal] = useState<boolean[]>([]);

  const handleOpenEditModal = (index: number) => {
    setOpenEditModal(
      openEditModal.map((value, pos) => (pos === index ? true : value))
    );
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cnh</TableCell>
            <TableCell>Nome</TableCell>
            {/* <TableCell>Disponível</TableCell> */}
            <TableCell>Editar</TableCell>
            <TableCell>Deletar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((value, index) => (
            <TableRow key={index}>
              <TableCell>{value.cnh}</TableCell>
              <TableCell>{value.name}</TableCell>
              {/* <TableCell>
                {value.isAvailable ? "Disponível" : "Indisponível"}
              </TableCell> */}
              <TableCell>
                <IconButton
                  color="info"
                  onClick={() => handleOpenEditModal(index)}
                >
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  onClick={() => deleteBusDriver(value.cnh)}
                >
                  <Delete />
                </IconButton>
              </TableCell>
              <EditBusDriverModal
                state={openEditModal}
                setState={setOpenEditModal}
                index={index}
                busDriver={value}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
