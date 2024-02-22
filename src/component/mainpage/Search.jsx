import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const result = [
  {
    id: 0,
    name: "Football",
    to: "/football",
  },
  {
    id: 1,
    name: "Music",
    to: "/music",
  },
  {
    id: 2,
    name: "Bitcoin",
    to: "/bitcoin",
  },
  {
    id: 3,
    name: "Entertainment",
    to: "/entertainment",
  },
  {
    id: 4,
    name: "Religion",
    to: "/religion",
  },
  {
    id: 5,
    name: "Educatiion",
    to: "/education",
  },
  {
    id: 6,
    name: "World",
    to: "/world",
  },
  {
    id: 7,
    name: "Drama",
    to: "/drama",
  },
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <input onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            {result.map((item) => (
              <Button
                key={item.id}
                component={Link}
                to={item.to}
                style={{
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
