import * as React from "react";
import * as styles from "./RatingQuestionOption.module.scss";

interface RatingQuestionOptionProps {
  questionId: string;
  value: string;
  optionSelected: React.ChangeEventHandler;
}

const RatingQuestionOption = (props: RatingQuestionOptionProps) => {
  return (
    <div className={styles.optionContainer}>
      <input
        className={styles.optionInput}
        type="radio"
        name={props.questionId}
        value={props.value}
        onChange={props.optionSelected}
      />
      <p className={styles.optionValue}>{props.value}</p>
    </div>
  );
};

export default RatingQuestionOption;
