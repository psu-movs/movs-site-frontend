"use client";

import "./documents.style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import Divider from "@mui/material/Divider";
import Link from "next/link";

const TEXT = `
[test](https://google.com)
– заявление о приеме, подписанное поступающим в соответствии с п. 51 Правил приема;
– приложение к заявлению о приеме, в котором указываются направление (специальность), форма и основа оплаты обучения.
а также копии (электронные образы) следующих документов:
– документа, удостоверяющего личность и гражданство (копии страниц паспорта, содержащих следующие сведения: ФИО, дата выдачи и кем выдан документ, место последней регистрации, данные о ранее выданном паспорте);– страхового свидетельства обязательного пенсионного страхования (СНИЛС) (при наличии);
– документа об образовании с приложением;
– иных документов, подтверждающих особые права и преимущества в соответствии с п.56 Правил приема;
– документа (срок действия которого истекает не ранее дня подачи заявления о приеме), подтверждающего инвалидность, при необходимости создания специальных условий при проведении вступительных испытаний,
– документа, подтверждающего смену фамилии, имени или отчества.

Поступающие на условиях оплаты обучения должны заключить договор на оказание платных образовательных услуг.
По вопросам заключения договоров обращайтесь – grf_dgv@psu.ru; 2-396-582
`

export default function EntryInfo() {
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <Box
      sx={{
        margin: isPhone
          ? "2% 5% 0% 5%"
          : isTablet
          ? "2% 10% 0% 10%"
          : "2% 20% 0% 20%",

        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <Stack>
        <Typography sx={{ fontSize: isPhone ? 24 : 30, fontWeight: "600" }}>
          Необходимые документы:
        </Typography>
        <ReactMarkdown className={"markdown-text"}>{TEXT}</ReactMarkdown>
      </Stack>
      <Stack>
        <Divider
          sx={{ width: "60%", border: "1px solid #2148C0", opacity: "75%" }}
        />
        <Typography sx={{marginTop: '1%'}}>
          Обновлённые правила приёма читайте на{" "}
          <Link
            href={
              "http://www.psu.ru/obrazovanie/vysshee-obrazovanie/postuplenie-983475/bakalavriat-i-spetsialitet/priem-dokumentov"
            }
            style={{textDecoration: 'none', color: '#2148C0'}}
          >
            сайте университета
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
