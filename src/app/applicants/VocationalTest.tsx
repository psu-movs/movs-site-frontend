"use client";

import Box from "@mui/material/Box";
import { useRef, useState } from "react";
import { QUESTIONS } from "@/app/applicants/questions";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const TestBox = ({
  questionNumber,
  answerToQuestion,
}: {
  questionNumber: number;
  answerToQuestion(index: number): void;
}) => {
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <>
      <Stack spacing={2}>
        <Typography variant={"h5"}>Вопрос {questionNumber + 1}/5</Typography>
        <Typography variant={"h6"}>
          {QUESTIONS[questionNumber].title}
        </Typography>
      </Stack>

      <Box
        sx={{
          margin: isPhone
            ? "0% 1% 0% 1%"
            : isTablet
            ? "0% 10% 0% 10%"
            : "0% 20% 0% 20%",
          padding: "4%",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={1}>
          {QUESTIONS[questionNumber].answers.map((answer, index) => (
            <Button
              onClick={() => answerToQuestion(index)}
              variant="contained"
              size={"large"}
              disableElevation
              key={answer}
            >
              {answer}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  );
};

const ResultBox = ({ results }: { results: number[] }) => {
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  let profession;
  const indexOfMax = results.indexOf(Math.max(...results));
  if (indexOfMax === 0) profession = "Data scientist";
  else if (indexOfMax === 1) profession = "Мобильный разработчик";
  else if (indexOfMax === 2) profession = "Разработчик информационных систем";
  else if (indexOfMax === 3) profession = "Системный программист";
  else if (indexOfMax === 4) profession = "Web-разработчик";

  return (
    <Box
      sx={{
        margin: isPhone
          ? "0% 1% 5% 1%"
          : isTablet
          ? "0% 10% 5% 10%"
          : "0% 20% 5% 20%",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <Typography variant={'h6'}>Ваша профессия: {profession}</Typography>
        <Typography sx={{fontSize: 20}}>
          Поступайте на кафедру математического обеспечения вычислительных систем
          и по окончанию обучения вы сможете начать работать по этой профессии!
        </Typography>
      </Stack>
    </Box>
  );
};

export default function VocationalTest() {
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  const [questionNumber, setQuestionNumber] = useState(0);
  const answersRef = useRef([0, 0, 0, 0, 0]);
  const [showResult, setShowResult] = useState(false);

  const answerToQuestion = (index: number) => {
    answersRef.current[index] += 1;

    if (questionNumber === 4) {
      setShowResult(true);
      return;
    }

    setQuestionNumber(questionNumber + 1);
  };

  return (
    <Box
      sx={{
        margin: isPhone
          ? "0% 5% 4% 5%"
          : isTablet
          ? "0% 10% 4% 10%"
          : "0% 20% 4% 20%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Stack mb={isPhone ? "10%" : "5%"}>
        <Typography
          sx={{
            fontSize: isPhone ? 20 : 20,
            color: "#FD5600",
            fontWeight: "600",
          }}
        >
          МОЁ БУДУЩЕЕ
        </Typography>
        <Typography sx={{ fontSize: isPhone ? 24 : 38, fontWeight: "600" }}>
          Профориентационный тест
        </Typography>
      </Stack>

      {!showResult ? (
        <TestBox
          questionNumber={questionNumber}
          answerToQuestion={answerToQuestion}
        />
      ) : (
        <ResultBox results={answersRef.current} />
      )}

      <Box display={"flex"} justifyContent={"center"}>
        <Divider
          sx={{ width: "60%", border: "1px solid #2148C0", opacity: "75%" }}
        />
      </Box>
    </Box>
  );
}
