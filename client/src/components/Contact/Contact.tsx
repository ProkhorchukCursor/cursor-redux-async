import {
 Avatar,
 Box,
 Card,
 CardContent,
 CardHeader,
 Typography,
} from "@mui/material";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";

import { IContact } from "../../types";

const getIconGender = (gender: string) => {
 switch (gender) {
  case "male":
   return <MaleIcon color="info" />;
  case "female":
   return <FemaleIcon color="error" />;
  default:
   return <TransgenderIcon color="success" />;
 }
};

const Contact = ({
 firstName,
 lastName,
 phone,
 gender = "N/A",
 info,
}: IContact) => {
 return (
  <Box>
   <Card sx={{ maxWidth: 345 }}>
    <CardHeader
     avatar={<Avatar aria-label="recipe">{getIconGender(gender)}</Avatar>}
     title={
      <Typography>
       {firstName} {lastName}
      </Typography>
     }
     subheader={<Typography>{phone}</Typography>}
    />
    <CardContent sx={{ pt: 0, pl: 5 }}>
     <Typography>{info || `Brief information about ${firstName}`}</Typography>
    </CardContent>
   </Card>
  </Box>
 );
};

export default Contact;
