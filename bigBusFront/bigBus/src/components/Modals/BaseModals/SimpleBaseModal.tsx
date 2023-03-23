import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";

interface BaseModalProps {
  title: string;
  children: JSX.Element;
  state: boolean;
  setState(state: boolean): void;
}

export function SimpleBaseModal({
  title,
  children,
  state,
  setState,
}: BaseModalProps) {
  const handleCloseModal = () => {
    setState(false);
  };

  return (
    <Dialog open={state} scroll="body" disableEscapeKeyDown fullWidth>
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
