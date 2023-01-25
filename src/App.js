import { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import QuestionCard from "./components/QuestionCard";
import ResultsCards from "./components/ResultsCards";
import questions from "./data/questions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const finishedQuiz = currentQuestionIndex === questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const goToNext = () => {
    setCurrentQuestionIndex((prevState) => prevState + 1);
  };

  const submitAnswer = (value) => {
    setAnswers((prevState) => [...prevState, value]);
    goToNext();
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  return (
    <div>
      <CssBaseline />
      <Box sx={styles.box}>
        <Container maxWidth="sm">
          {finishedQuiz ? (
            <ResultsCards restartQuiz={restartQuiz} answers={answers} />
          ) : (
            <QuestionCard
              questionNumber={currentQuestionIndex + 1}
              question={currentQuestion}
              submitAnswer={submitAnswer}
            />
          )}
        </Container>
      </Box>
    </div>
  );
}

const styles = {
  box: {
    backgroundColor: lightBlue[500],
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
};

export default App;
