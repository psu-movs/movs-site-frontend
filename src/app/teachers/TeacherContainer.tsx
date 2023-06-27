"use client";

import { Teacher } from "@/app/teachers/getTeachers";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <Box>
    <Stack direction={"row"} spacing={0.5} sx={{ marginTop: "2%" }}>
      <Image src={teacher.photoURL} alt={"photo"} width={170} height={250} />
      <Stack spacing={0.5}>
        <Typography sx={{ fontWeight: "600" }}>{teacher.name}</Typography>
        <Typography>{teacher.post}</Typography>
        {teacher.academicDegree && (
          <>
            <Typography sx={{ fontWeight: "600" }}>
              Ученая степень / ученое звание:
            </Typography>
            <Typography>{teacher.academicDegree}</Typography>
          </>
        )}
      </Stack>
    </Stack>
    <Typography sx={{ fontWeight: "600" }}>
      Преподаваемые дисциплины:
    </Typography>
    <Typography sx={{ whiteSpace: "pre-line" }}>
      {teacher.disciplines}
    </Typography>
  </Box>
);

const TeacherBox = ({ teachers }: { teachers: Teacher[] }) =>
  teachers.map((teacher) => (
    <TeacherCard teacher={teacher} key={teacher.name} />
  ));

const TeacherTable = ({ teachers }: { teachers: Teacher[] }) => (
  <Grid container spacing={2}>
    <Grid item xs={2}>
      <Typography sx={{ fontWeight: "600" }}>Фотография</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography sx={{ fontWeight: "600" }}>ФИО</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography sx={{ fontWeight: "600" }}>Должность</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography sx={{ fontWeight: "600" }}>
        Ученая степень / ученое звание
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography sx={{ fontWeight: "600" }}>
        Преподаваемые дисциплины
      </Typography>
    </Grid>

    {teachers.map((teacher) => (
      <>
        <Grid item xs={2}>
          <Image
            src={teacher.photoURL}
            alt={"photo"}
            width={112}
            height={150}
          />
        </Grid>
        <Grid item xs={2}>
          {teacher.name}
        </Grid>
        <Grid item xs={2}>
          {teacher.post}
        </Grid>
        <Grid item xs={2}>
          {teacher.academicDegree}
        </Grid>
        <Grid item xs={3} sx={{ whiteSpace: "pre-line" }}>
          {teacher.disciplines}
        </Grid>
      </>
    ))}
  </Grid>
);

export default function TeacherContainer({
  teachers,
}: {
  teachers: Teacher[];
}) {
  const isTablet = useMediaQuery("(max-width:960px)");

  return (
    <Box sx={{ margin: "4%", maxWidth: "100%" }}>
      {isTablet ? (
        <TeacherBox teachers={teachers} />
      ) : (
        <TeacherTable teachers={teachers} />
      )}
    </Box>
  );
}
