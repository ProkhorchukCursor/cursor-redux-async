import React from "react";

import {
 Button,
 Card,
 CardActions,
 CardContent,
 CardHeader,
 Divider,
 Modal,
} from "@mui/material";

interface IProps {
 children: React.ReactNode;
 open: boolean;
 handleClose: () => void;
 title: string;
 onSubmit: any;
}

const ModalForm = ({
 children,
 open,
 handleClose,
 title,
 onSubmit,
}: IProps) => {
 return (
  <Modal open={open} onClose={handleClose}>
   <Card
    sx={{
     p: 2,
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
    }}
   >
    <CardHeader title={title} />
    <Divider />
    <CardContent sx={{ p: 2 }}>{children}</CardContent>
     <Divider />
    <CardActions sx={{display: "flex", justifyContent:"space-between"}}>
     <Button size="small" onClick={onSubmit} variant="contained">
      Ok
     </Button>
     <Button
      size="small"
      onClick={handleClose}
      variant="contained"
      color="error"
     >
      Cancel
     </Button>
    </CardActions>
   </Card>
  </Modal>
 );
};

export default ModalForm;
