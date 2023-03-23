import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface ListItemProps {
  title: string;
  icon: JSX.Element;
  onClick(): void;
}

export function ListItens({ title, icon, onClick }: ListItemProps) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title}/>
    </ListItemButton>
  );
}
