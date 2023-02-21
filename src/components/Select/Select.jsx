import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Select = ({ setPrice, price }) => {
  return (
    <Box sx={{ minWidth: 190 }}>
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
        ></InputLabel>
        <NativeSelect
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {/* <option value={""}>За замовчуванням</option> */}
          <option value={"min"}>Спочатку дешеві</option>
          <option value={"max"}>Спочатку дорогі</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
