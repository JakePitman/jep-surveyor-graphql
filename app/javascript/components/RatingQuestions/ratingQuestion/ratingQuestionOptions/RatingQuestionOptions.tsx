import React from "react";
import RatingQuestionOption from "./ratingQuestionOption/RatingQuestionOption";
import * as styles from "./RatingQuestionOptions.module.scss";

const questionValues = [
  "strongly-disagree",
  "disagree",
  "neutral",
  "agree",
  "strongly-agree"
];

const optionColors: any = {
  "strongly-disagree": "#d31d3b",
  disagree: "#ea7b04",
  neutral: "#f2da00",
  agree: "#b9f100",
  "strongly-agree": "#3dce04"
};

interface RatingQuestionOptionProps {
  questionId: string;
  currentlySelectedOption: string;
  optionSelected: React.ChangeEventHandler;
  surveyId: string;
}

const ratingQuestionOptions = (props: RatingQuestionOptionProps) => (
  <div className={styles.answersColumn}>
    <div className={styles.optionsContainer}>
      {questionValues.map((questionValue, i) => {
        return (
          <RatingQuestionOption
            key={questionValue}
            questionId={props.questionId}
            questionValue={questionValue}
            currentlySelectedOption={props.currentlySelectedOption}
            optionSelected={props.optionSelected}
            surveyId={props.surveyId}
          />
        );
      })}
    </div>
    <h1
      className={styles.selectionIndicator}
      style={{
        background: optionColors[props.currentlySelectedOption]
      }}
    />
  </div>
);

export default ratingQuestionOptions;
