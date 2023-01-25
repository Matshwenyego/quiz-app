import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function QuestionCard(props) {
  const { question = {}, questionNumber, submitAnswer } = props;
  const [value, setValue] = useState(null);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    submitAnswer(value);
    setValue(null);
  };

  return (
    <Card sx={styles.container}>
      <CardContent>
        <Typography variant="h5" component="div">
          Questions {questionNumber}
        </Typography>
        <Typography sx={styles.title} color={"text.secondary"}>
          {question.title}
        </Typography>

        <FormControl>
          <RadioGroup value={value} onChange={handleRadioChange}>
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index + 1}
                value={index + 1}
                control={<Radio />}
                label={option.description}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button
          disabled={!value}
          onClick={handleSubmit}
          fullWidth
          variant="outlined"
          size="small"
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

const styles = {
  container: { minWidth: 275 },
  title: { mb: 1.5 },
};
