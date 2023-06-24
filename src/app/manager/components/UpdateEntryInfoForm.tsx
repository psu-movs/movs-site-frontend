import { EntryInfo } from "@/http/responseModels";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import httpClient from "@/http";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function UpdateEntryInfoForm({info}: {info?: EntryInfo}) {
  const [documentsInfo, setDocumentsInfo] = useState<string>("");
  const [startDateInfo, setStartDateInfo] = useState<string>("");

  useEffect(() => {
    if (!info) return;

    setDocumentsInfo(info.documents);
    setStartDateInfo(info.entry_start_date_info);
  }, [info]);

  const save = async () => {
    await httpClient.updateApplicantsEntryInfo({
      documents: documentsInfo,
      entry_start_date_info: startDateInfo
    })
  }

  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant={'h4'}>
          Информация о необходимых документах
        </Typography>
        <TextField
          id="start-date"
          label="Информация о начале приёма документов"
          multiline
          variant="outlined"
          sx={{ backgroundColor: "#FFFFFF" }}
          onChange={(element) => setStartDateInfo(element.target.value.trim())}
          value={startDateInfo}
        />
        <TextField
          id="documents"
          label="Информация о необходимых документах"
          multiline
          variant="outlined"
          sx={{ backgroundColor: "#FFFFFF" }}
          onChange={(element) => setDocumentsInfo(element.target.value.trim())}
          value={documentsInfo}
        />

        <Button
          variant="contained"
          size={"large"}
          sx={{ boxShadow: 0, textTransform: "none" }}
          onClick={save}
          disabled={!documentsInfo || !startDateInfo}
        >
          Сохранить
        </Button>
      </Stack>
    </Box>
  )
}