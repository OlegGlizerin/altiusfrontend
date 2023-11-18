import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BasicTextFields = (props) => {
   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": { m: 0, width: "25ch" },
            backgroundColor: "white",
            padding: 1,
         }}
         noValidate
         autoComplete="off"
      >
         <TextField id="outlined-basic" label={props?.label} onChange={props.onChange} value={props.value} variant="outlined" />
      </Box>
   );
};

export default BasicTextFields;
