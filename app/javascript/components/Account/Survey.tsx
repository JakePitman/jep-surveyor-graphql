import React from "react";
import RatingQuestion from "../RatingQuestions/ratingQuestion/RatingQuestion";
import styles from "../RatingQuestions/index.module.scss";
import { Mutation } from "react-apollo";

import deleteRatingQuestionMutation from "./gqlOperations/deleteRatingQuestionMutation";

const deleteQuestion = (e: React.FormEvent<HTMLButtonElement>) => {
  // console.log("delete question clicked");
  // const targetElement: any = e.target;
  // const questionId = targetElement.dataset.questionId;
  // const targetUrl = this.removeJsonFromUrl(this.props.ratingQuestionsUrl);
  // console.log(targetUrl);
  alert("delete clicked");
};

const removeJsonFromUrl = () => {
  return "string";
};

interface Props {
  surveyData: {
    name: string;
    ratingQuestions: { id: any; title: string }[];
  };
}

class Survey extends React.Component<Props> {
  state = {
    questions: this.props.surveyData.ratingQuestions
  };

  render() {
    return (
      <div>
        <h2>{this.props.surveyData.name}</h2>
        <div className={styles.list}>
          {this.state.questions.map(question => (
            <RatingQuestion
              key={question.id}
              deleteQuestion={deleteQuestion}
              question={question}
              ratingQuestionsUrl={removeJsonFromUrl()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Survey;
