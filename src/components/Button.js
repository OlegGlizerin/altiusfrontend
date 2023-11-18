import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ColorButton = styled(Button)(({ theme }) => ({
   color: theme.palette.getContrastText("#1976d2"),
   backgroundColor: "#1976d2",
   "&:hover": {
      backgroundColor: "#4691db",
   },
}));

const CustomizedButton = (props) => {
   return (
      <Stack
         sx={{ padding: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
         spacing={2}
         direction="row"
      >
         <ColorButton variant="contained" onClick={props.onClick} disabled={props.disabled}>
            {props.text}
         </ColorButton>
      </Stack>
   );
};

export default CustomizedButton;
