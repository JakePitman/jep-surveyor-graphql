import React from "react";
import RatingQuestion from "../RatingQuestions/ratingQuestion/RatingQuestion";
import styles from "../RatingQuestions/index.module.scss";

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

  deleteQuestion = (id: string) => {
    const remainingQuestions: any = this.state.questions.filter(q => q.id !== id)
    this.setState({questions: remainingQuestions})
    console.log("TARGET QUESTION", remainingQuestions)
  };

  render() {
    return (
      <div>
        <h2>{this.props.surveyData.name}</h2>
        <div className={styles.list}>
          {this.state.questions.map(question => (
            <RatingQuestion
              key={question.id}
              deleteQuestion={this.deleteQuestion}
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
