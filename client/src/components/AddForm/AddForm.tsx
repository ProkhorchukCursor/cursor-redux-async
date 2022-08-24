import { Dispatch, SetStateAction } from "react";

import { Button, Stack, TextField } from "@mui/material";

interface IFields {
 label: string;
 value: string;
 onChange: Dispatch<SetStateAction<any>>;
}

interface IProps {
 fields: IFields[];
 onSave: () => void;
}

const AddForm = ({ fields, onSave }: IProps) => {
 return (
  <Stack spacing={2} sx={{ minWidth: "400px" }}>
   {fields.map((field, id) => (
    <TextField
     key={`${field.label}-${id}`}
     label={field.label}
     value={field.value}
     onChange={(e) => field.onChange(e.target.value)}
     fullWidth
    />
   ))}
   <Button variant="contained" onClick={onSave}>
    Add
   </Button>
  </Stack>
 );
};

export default AddForm;
