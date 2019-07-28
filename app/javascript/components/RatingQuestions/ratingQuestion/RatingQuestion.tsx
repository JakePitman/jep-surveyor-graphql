import * as React from "react";
import * as styles from "./RatingQuestion.module.scss";
import RatingQuestionButton from "./ratingQuestionButtons/RatingQuestionButton";
import UpdateRatingQuestionButton from "./ratingQuestionButtons/UpdateRatingQuestionButton";
import avulseString from "../../helperFunctions/avulseString";
import RatingQuestionOptions from "./ratingQuestionOptions/RatingQuestionOptions"

interface RatingQuestionProps {
  question: { title: string; id: string };
  deleteQuestion: any;
  ratingQuestionsUrl: string;
}

class RatingQuestion extends React.Component<RatingQuestionProps> {
  questionData = { ...this.props.question };

  state = {
    selectedOption: "Nothing selected",
    updatedQuestionNameInput: "",
    questionTitle: this.props.question.title
  };

  optionSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedOption: e.target.value });
  };

  //---------------------UPDATE QUESTION TITLE FUNCTIONS------------------

  updateQuestionNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ updatedQuestionNameInput: e.target.value });
  };

  updateActualTitle = () => {
    this.setState({
      questionTitle: this.state.updatedQuestionNameInput,
      updatedQuestionNameInput: ""
    });
  };

  render() {
    return (
      <div className={styles.questionContainer}>
        <div className={styles.questionContainer}>
          <div className={styles.questionColumn}>
            <a
              href={
                this.props.ratingQuestionsUrl
                  ? `${this.props.ratingQuestionsUrl}/${this.questionData.id}`
                  : null
              }
              className={styles.questionTitle}
            >
              "{avulseString(this.state.questionTitle, 70)}"
            </a>
            <div className={styles.changeTitleContainer}>
              <input
                className={styles.changeTitleInput}
                type="text"
                value={this.state.updatedQuestionNameInput}
                placeholder="new title"
                onChange={this.updateQuestionNameInput}
              />
              <UpdateRatingQuestionButton
                questionId={this.questionData.id}
                updatedQuestionTitle={this.state.updatedQuestionNameInput}
                handleUpdate={this.updateActualTitle}
              />
            </div>

            <RatingQuestionButton
              label="delete"
              data-question-id={this.questionData.id}
              clickHandler={this.props.deleteQuestion}
            />
          </div>
          <RatingQuestionOptions 
            questionId={this.questionData.id}
            currentlySelectedOption={this.state.selectedOption}
            optionSelected={this.optionSelected}
          />
        </div>
      </div>
    );
  }
}

export default RatingQuestion;
