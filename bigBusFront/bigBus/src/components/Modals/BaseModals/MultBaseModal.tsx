import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  IconButton,
  DialogContent,
  Divider,
} from "@mui/material";

interface BaseModalProps {
  title: string;
  children: JSX.Element;
  index: number;
  state: boolean[];
  setState(state: boolean[]): void;
}

export function MultBaseModal({
  title,
  children,
  index,
  state,
  setState,
}: BaseModalProps) {
  
    const handleCloseModal = () => {
    setState(state.map((value, pos) => (pos === index ? false : value)));
  };

  return (
    <Dialog open={state[index]} scroll="body" disableEscapeKeyDown fullWidth>
      <DialogTitle>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={handleCloseModal}>
            <Close />
          </IconButton>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
