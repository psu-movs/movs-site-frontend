import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { useState } from "react";
import { Button } from "@mui/material";

export default function AddCompanyModal({
  isOpen,
  onClose,
  onCompanyAdd,
}: {
  isOpen: boolean;
  onClose(): void;
  onCompanyAdd(file: File): Promise<void>;
}) {
  const [file, setFile] = useState<File>();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
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
          borderRadius: 2,
        }}
      >
        <Stack sx={{justifyContent: 'center'}}>
          <Input
            type={"file"}
            onChange={(element) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              setFile(element.target.files[0]);
            }}
          />
          <Button
            onClick={() => {
              onCompanyAdd(file as File).then(() => {
                onClose();
              });
            }}
            disabled={!file}
          >
            Добавить
          </Button>
        </Stack>


      </Box>
    </Modal>
  );
}
