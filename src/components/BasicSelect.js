import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BasicSelect = (props) => {
   return (
      <Box
         sx={{
            "& > :not(style)": { m: 0, width: "25ch" },
            backgroundColor: "white",
            padding: 1,
         }}
      >
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={props.value}
               label={props?.label}
               onChange={props.onChange}
            >
               <MenuItem value={"fo1.altius.finance"}>fo1.altius.finance</MenuItem>
               <MenuItem value={"fo2.altius.finance"}>fo2.altius.finance</MenuItem>
            </Select>
         </FormControl>
      </Box>
   );
};

export default BasicSelect;
