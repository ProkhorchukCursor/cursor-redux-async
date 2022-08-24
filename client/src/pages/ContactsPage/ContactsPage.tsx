import { useState } from "react";

import { Box, Divider, Typography } from "@mui/material";

import { ContactsList, Filter } from "../../components";

const ContactsPage = () => {
 const [search, setSearch] = useState("");
 const [filterMale, setFilterMale] = useState(true);
 const [filterFemale, setFilterFemale] = useState(true);
 const [filterNoGender, setFilterNoGender] = useState(true);

 return (
  <Box>
   <Typography variant="h2" color="#348feb">
    Phonebook
   </Typography>
   <Divider />
   <Filter
    search={search}
    setSearch={setSearch}
    filterMale={filterMale}
    setFilterMale={setFilterMale}
    filterFemale={filterFemale}
    setFilterFemale={setFilterFemale}
    filterNoGender={filterNoGender}
    setFilterNoGender={setFilterNoGender}
   />
   <Divider />
   <ContactsList
    search={search}
    filterMale={filterMale}
    filterFemale={filterFemale}
    filterNoGender={filterNoGender}
   />
  </Box>
 );
};

export default ContactsPage;
