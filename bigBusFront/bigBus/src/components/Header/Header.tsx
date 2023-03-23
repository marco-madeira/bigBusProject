import { Grid, Typography, Divider, Button } from "@mui/material";

interface HeaderProps {
  title: string;
  showButton: boolean;
  buttonText?: string;
  icon?: JSX.Element;
  action?(): void;
}

export function Header({
  title,
  showButton,
  buttonText,
  icon,
  action,
}: HeaderProps) {
  return (
    <>
      <Grid
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        <Typography variant="h5">{title}</Typography>
        {showButton &&
        <Button 
          color="primary" 
          variant="contained"
          onClick={action}
          startIcon={icon}
        >
          {buttonText}
        </Button>
        }
      </Grid>
      <Divider />
    </>
  );
}
