"use client"

import { useState } from "react";
import { 
  Stack, 
  Modal,  
  Typography, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Button } from "@mui/material";
import { ScienceWork } from "@/http/responseModels";

interface ScienceWorkProps {
 work: ScienceWork;
}

const ScienceWorkBlock = ({work}: ScienceWorkProps) =>  {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
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
        <Button size="small" variant="contained" onClick={() => setOpen(true)}>Подробнее</Button>
      </CardActions>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Stack
          spacing={1}
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: 300,
            maxWidth: 800,
            minHeight: 300,
            maxHeight: 800,
            bgcolor: "#F2F4F8",
            border: '1px solid #2148C0',
            padding: "1%",
            overflow: 'auto',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {work.title}
          </Typography>
          <Typography textAlign={"justify"}>
            {work.description}
          </Typography>
        </Stack>
      </Modal>
    </Card>
  );
}

export default ScienceWorkBlock;