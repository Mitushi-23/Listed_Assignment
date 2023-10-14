import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PlusCircleFill, X } from "react-bootstrap-icons";
import BasicTabs from "./BasicTabs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(props.open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="display_flex flex_column align_item_center"
        style={{ marginTop: "10%", cursor: "pointer" }}
        onClick={handleOpen}
      >
        <PlusCircleFill className="color_grey" style={{ fontSize: "80px" }} />
        <p className="color_grey">Add Profile</p>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
           <div className="display_flex justify_between align_item_center">
            <h3>Add New Profile</h3>
            <X  onClick={handleClose} style={{cursor:'pointer'}} />
           </div>
            <hr />
            <BasicTabs/>
          </Box>
        </Modal>
      </div>
    </>
  );
}
