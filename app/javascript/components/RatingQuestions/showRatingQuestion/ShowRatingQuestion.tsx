import React from "react";
import * as styles from "./ShowRatingQuestion.module.scss";
import axios from "axios";
import { questionColumn } from "./RatingQuestion.module.scss";
interface RatingQuestionProps {
  question: { title: string; id: string };
  deleteQuestion: any;
  ratingQuestionsUrl: string;
}

class ShowRatingQuestion extends React.Component<RatingQuestionProps> {
  questionData = { ...this.props.question };

  state = {
    updatedQuestionNameInput: "",
    questionTitle: this.props.question.title
  };

  //------------------------UPDATE TITLE FUNCTIONS--------------------------

  updateQuestionNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ updatedQuestionNameInput: e.target.value });
  };

  updateQuestionName = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.state.updatedQuestionNameInput) {
      axios
        .put(`${this.props.ratingQuestionsUrl}/${this.questionData.id}.json`, {
          title: this.state.updatedQuestionNameInput
        })
        .then(res => {
          this.setState({
            questionTitle: this.state.updatedQuestionNameInput,
            updatedQuestionNameInput: ""
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert("Please enter something first!");
    }
  };

  //----------------------DELETE QUESTION FUNCTIONS----------------------------

  removeJsonFromUrl = (url: string) => {
    const splitUrl = url.split(".");
    splitUrl.splice(-1);
    return splitUrl.join(".");
  };

  deleteQuestion = (e: React.FormEvent<HTMLButtonElement>) => {
    const targetElement: any = e.target;
    const questionId = targetElement.dataset.questionId;
    const targetUrl = this.props.ratingQuestionsUrl;
    axios
      .delete(`${targetUrl}/${questionId}.json`)
      .then(res => {
        window.location.href = this.props.ratingQuestionsUrl;
      })
      .catch(err => {
        console.log(err);
      });
  };

  //-----------------------------------------------------------------------

  render() {
    return (
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{this.state.questionTitle}</h1>

        <div className={styles.changeTitleContainer}>
          <input
            className={styles.changeTitleInput}
            type="text"
            value={this.state.updatedQuestionNameInput}
            placeholder="new title"
            onChange={this.updateQuestionNameInput}
          />
          <button
            className={styles.updateButton}
            onClick={this.updateQuestionName}
          >
            Update
          </button>

          <button
            className={styles.updateButton}
            data-question-id={this.questionData.id}
            onClick={this.deleteQuestion}
          >
            Delete Question
          </button>
        </div>

        <a href={this.props.ratingQuestionsUrl} className={styles.backLink}>
          back
        </a>
      </div>
    );
  }
}

export default ShowRatingQuestion;
