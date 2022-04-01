import "./PopupAddPlaylist.css";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";

export default function PopupAddPlaylist({ getAllPlaylist }) {
  const [open, setOpen] = React.useState(false);
  const [addParam, setAddParam] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  //Add a new playlist
  const handleAddAndClose = () => {
    fetch(`http://localhost:3001/playlist/playlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ name: addParam }),
    })
      .then((res) => res.json())
      .then((data) => {});
    setOpen(false);
    getAllPlaylist();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="popupAddPlaylist">
      <Button
        id="addPlaylistPlus"
        variant="outlined"
        onClick={handleClickOpen}
        className="addPlaylist"
      >
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            value={addParam}
            onChange={(e) => setAddParam(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            placeholder="playlist name"
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
