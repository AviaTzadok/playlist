import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useEffect, useState, useRef } from "react";

export default function PopupAddPlaylist() {
  const [open, setOpen] = React.useState(false);
  const [addParam, setAddParam] = useState("");

  //   useEffect(() => {
  //     console.log(addParam);
  //   }, [addParam]);

  //   const inputOpanRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddAndClose = () => {
    console.log(addParam);
    fetch(`http://localhost:3001/playlist/playlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ name: addParam }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        + New playlist
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter playlist name</DialogContentText>
          <TextField
            value={addParam}
            onChange={(e) => setAddParam(e.target.value)}
            // ref={inputOpanRef}
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddAndClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
