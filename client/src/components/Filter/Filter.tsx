import {
 Box,
 Button,
 Checkbox,
 FormControlLabel,
 TextField,
 Typography,
} from "@mui/material";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";

interface IProps {
 search: string;
 setSearch: (value: string) => void;
 filterMale: boolean;
 setFilterMale: (value: boolean) => void;
 filterFemale: boolean;
 setFilterFemale: (value: boolean) => void;
 filterNoGender: boolean;
 setFilterNoGender: (value: boolean) => void;
}

const Filter = ({
 search,
 setSearch,
 filterMale,
 setFilterMale,
 filterFemale,
 setFilterFemale,
 filterNoGender,
 setFilterNoGender,
}: IProps) => {
 return (
  <Box>
   <Box sx={{ pt: 2, display: "flex", alignItems: "center" }}>
    <TextField
     sx={{ width: "100%" }}
     label="Search"
     variant="outlined"
     value={search}
     onChange={(e) => setSearch(e.target.value)}
    />
    <Button sx={{ ml: 2 }} variant="contained" onClick={() => setSearch("")}>
     Clear
    </Button>
   </Box>
   <Box
    sx={{
     my: 2,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
    }}
   >
    <Typography variant="h6" color="#348feb">
     Filters
    </Typography>
    <Box>
     <FormControlLabel
      control={
       <Checkbox
        icon={<MaleIcon />}
        checkedIcon={<MaleIcon color="info" />}
        checked={filterMale}
        onChange={() => setFilterMale(!filterMale)}
       />
      }
      label={
       <Typography
        sx={{ fontSize: "12px" }}
        color={`${filterMale && "#348feb"}`}
       >
        Male
       </Typography>
      }
      labelPlacement="bottom"
     />
     <FormControlLabel
      control={
       <Checkbox
        icon={<FemaleIcon />}
        checkedIcon={<FemaleIcon color="error" />}
        checked={filterFemale}
        onChange={() => setFilterFemale(!filterFemale)}
       />
      }
      label={
       <Typography sx={{ fontSize: "12px" }} color={`${filterFemale && "red"}`}>
        Female
       </Typography>
      }
      labelPlacement="bottom"
     />
     <FormControlLabel
      control={
       <Checkbox
        icon={<TransgenderIcon />}
        checkedIcon={<TransgenderIcon color="success" />}
        checked={filterNoGender}
        onChange={() => setFilterNoGender(!filterNoGender)}
       />
      }
      label={
       <Typography sx={{ fontSize: "12px" }} color={`${filterNoGender && "green"}`}>
        N/A
       </Typography>
      }
      labelPlacement="bottom"
     />
    </Box>
   </Box>
  </Box>
 );
};

export default Filter;
