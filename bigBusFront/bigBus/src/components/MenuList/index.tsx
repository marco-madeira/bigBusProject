import {
  Assignment,
  Badge,
  BarChart,
  ConfirmationNumber,
  DepartureBoard,
  DirectionsBus,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ListItens } from "./ListItens";

export function MenuMenu() {
  const navigate = useNavigate();

  return (
    <>
      <ListItens
        title={"Pesquisar Passagens"}
        icon={<DepartureBoard />}
        onClick={() => navigate("/customer/searchTravel")}
      />
      <ListItens
        title={"Ver Passagens"}
        icon={<ConfirmationNumber />}
        onClick={() => navigate("/customer/ticket")}
      />
      <ListItens
        title={"Cadastro de Ônibus"}
        icon={<DirectionsBus />}
        onClick={() => navigate("/company/bus")}
      />
      <ListItens
        title={"Cadastro de Motorista"}
        icon={<Badge />}
        onClick={() => navigate("/company/busDriver")}
      />
      <ListItens
        title={"Cadastro de Viagens"}
        icon={<Assignment />}
        onClick={() => navigate("/company/travel")}
      />
    </>
  );
}
