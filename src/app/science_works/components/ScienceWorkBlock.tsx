"use client";

import { useState } from "react";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { ScienceWork } from "@/http/responseModels";

interface ScienceWorkProps {
  work: ScienceWork;
}

const ScienceWorkModal = ({
  work,
  isOpened,
  onClose,
}: {
  work: ScienceWork;
  isOpened: boolean;
  onClose(): void;
}) => (
  <Modal open={isOpened} onClose={onClose}>
    <Stack
      spacing={1}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: 300,
        maxWidth: 800,
        minHeight: 300,
        maxHeight: 800,
        backgroundColor: "#FFF",
        padding: "1%",
        overflow: "auto",
        borderRadius: 2
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {work.title}
      </Typography>
      <Typography textAlign={"justify"}>{work.description}</Typography>
    </Stack>
  </Modal>
);

const ScienceWorkBlock = ({ work }: ScienceWorkProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card sx={{maxWidth: "85", minWidth: 300, maxHeight: 500, marginBottom: "2%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={work.image_url}
        title={work.title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {work.title}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" onClick={() => setOpen(true)}>
          Подробнее
        </Button>
      </CardActions>

      <ScienceWorkModal
        work={work}
        isOpened={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Card>
  );
};

export default ScienceWorkBlock;
