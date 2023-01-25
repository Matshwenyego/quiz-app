import React, { useMemo } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import questions from "../data/questions";

export default function ResultsCards(props) {
  const { answers, restartQuiz } = props;

  const correctAnswers = useMemo(() => {
    return questions.filter((question, index) => {
      return question.correctAnswer === parseInt(answers[index]);
    }).length;
  }, [answers]);

  return (
    <Card variant="outline" sx={styles.container}>
      <CardContent>
        <Typography sx={styles.text} variant="h4" color="text.primary">
          Result
        </Typography>
        <Typography sx={styles.text} variant="h4" color="text.primary">
          {correctAnswers}/{questions.length}
        </Typography>
      </CardContent>
      <CardActions sx={styles.button}>
        <Button onClick={restartQuiz} variant="outlined">
          Retry
        </Button>
      </CardActions>
    </Card>
  );
}
const styles = {
  container: {
    pt: 3,
    pb: 3,
  },
  text: {
    display: "flex",
    justifyContent: "center",
    mb: 3,
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
};
