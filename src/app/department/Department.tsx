"use client";
import "@/app/applicants/documents.style.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DepartmentInfo, DepartmentHeadInfo } from '@/http/responseModels';
import Image from "next/image";
import ContactInformation from "./components/ContactInformation";
import HeadInformation from './components/HeadInformation';
import ReactMarkdown from "react-markdown";

interface DepartmentProps {
  data: DepartmentInfo;
  head: DepartmentHeadInfo;
}

const Department = ({data, head}: DepartmentProps) => {

  return (
    <Container maxWidth={"lg"}>
      <Stack spacing={1.5}>
        <Typography variant="h5">
          Кафедра математического обеспечения вычислительных систем
        </Typography>

        <Box>
          <Typography variant={"h6"}>
            Контактная информация
          </Typography>
          <ContactInformation data={data} />
        </Box>

        <Box sx={{ maxWidth: "fit-content", marginLeft: 0 }}>
          <Link href={"/teachers"} underline="hover" variant="caption">
            <Stack spacing={1.5} direction={"row"} alignItems={"center"}>
              <Image src="/employees.svg" alt="Сотрудники ссылка" width={30} height={30} />
              <Typography sx={{ fontWeight: "medium" }}>
                Сотрудники кафедры
              </Typography>
            </Stack>
          </Link>
        </Box>

        <Box>
          <Typography variant={"h6"}>
            и. о. заведующего кафедрой
          </Typography>
          <HeadInformation data={head} />
        </Box>

        <Box paddingTop={'2%'}>
          <Typography variant={"h6"}>
            О кафедре
          </Typography>
          <ReactMarkdown className={"markdown-text"}>
            {data.description}
          </ReactMarkdown>
        </Box>
      </Stack>
    </Container>
  );
}

export default Department;