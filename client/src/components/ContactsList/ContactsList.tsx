import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

import Contact from "../Contact";

import { CONTACTS } from "../../constants";

import { IContact } from "../../types";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
 search: string;
 filterMale: boolean;
 filterFemale: boolean;
 filterNoGender: boolean;
}

const getFilteredContacts = (value: string, options: IContact[]) => {
 const filteredName = options
  .filter((el) => el.firstName.toLocaleLowerCase().includes(value))
  .map((el) => JSON.stringify(el));
 const filteredLastName = options
  .filter((el) => el.lastName.toLocaleLowerCase().includes(value))
  .map((el) => JSON.stringify(el));
 const filteredPhone = options
  .filter((el) => el.phone.toLocaleLowerCase().includes(value))
  .map((el) => JSON.stringify(el));
 const filteredMain = [...filteredName, ...filteredLastName, ...filteredPhone];
 const filterUnique = filteredMain.filter(
  (el) => filteredMain.indexOf(el) === filteredMain.lastIndexOf(el),
 );
 return filterUnique.map((el) => JSON.parse(el));
};

const getGenderFiltered = (
 options: IContact[],
 filterMale: boolean,
 filterFemale: boolean,
 filterNoGender: boolean,
) => {
 let result = options;
 if (!filterMale)
  result = result.filter((el: IContact) => el.gender !== "male");
 if (!filterFemale)
  result = result.filter((el: IContact) => el.gender !== "female");
 if (!filterNoGender) result = result.filter((el: IContact) => el.gender);
 return result;
};

const ContactsList = ({
 search,
 filterMale,
 filterFemale,
 filterNoGender,
}: IProps) => {
 const [contacts, setContacts] = useState<IContact[]>([]);

 const debouncedSearch = debounce((value: string) => {
  const filteredValue = value.toLocaleLowerCase().trim();

  setContacts(getFilteredContacts(filteredValue, CONTACTS));
 }, 300);

 const handleChange = (value: string) => {
  debouncedSearch(value);
 };

 useEffect(() => {
  if (
   contacts.length === 0 &&
   !search &&
   filterFemale &&
   filterMale &&
   filterNoGender
  )
   setContacts(CONTACTS);
 }, [contacts, filterFemale, filterMale, filterNoGender, search]);

 useEffect(() => {
  setContacts(
   getGenderFiltered(CONTACTS, filterMale, filterFemale, filterNoGender),
  );
 }, [filterFemale, filterMale, filterNoGender]);

 useEffect(() => {
  handleChange(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [search]);

 return (
  <Box sx={{ py: 2 }}>
   {contacts.length > 0 ? (
    <Grid
     container
     spacing={{ xs: 2, md: 3 }}
     columns={{ xs: 4, sm: 8, md: 12 }}
    >
     {contacts.map((contact) => (
      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={`${contact.firstName} ${contact.lastName}-${contact.phone}`}
      >
       <Link
        to={`/contacts/${contact.firstName}-${contact.lastName}`}
        style={{ textDecoration: "none", color: "inherit" }}
       >
        <Contact
         firstName={contact.firstName}
         lastName={contact.lastName}
         phone={contact.phone}
         gender={contact.gender}
        />
       </Link>
      </Grid>
     ))}
    </Grid>
   ) : (
    <Typography sx={{ textAlign: "center" }} variant="h2" color="#348feb">
     Sorry, contacts not found
    </Typography>
   )}
  </Box>
 );
};

export default ContactsList;
