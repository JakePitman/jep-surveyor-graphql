import * as React from "react";
import * as styles from "./RatingQuestion.module.scss";
import RatingQuestionOption from "./ratingQuestionOption/RatingQuestionOption";
import RatingQuestionButton from "./ratingQuestionButton/RatingQuestionButton";
import avulseString from "../../helperFunctions/avulseString";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

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

  updateQuestionName = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.state.updatedQuestionNameInput) {
      // axios
      //   .put(`${this.props.ratingQuestionsUrl}/${this.questionData.id}.json`, {
      //     title: this.state.updatedQuestionNameInput
      //   })
      //   .then(res => {
      //     this.setState({
      //       questionTitle: this.state.updatedQuestionNameInput,
      //       updatedQuestionNameInput: ""
      //     });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      alert("update clicked");
    } else {
      alert("Please enter something first!");
    }
  };

  // TODO create & implement the updateQuestionResponse resolver
  UpdateQuestionResponseMutation = gql`
    mutation($email: String!, $password: String!) {
      signinUser(email: { email: $email, password: $password }) {
        token
      }
    }
  `;

  renderQuestionOptions = () => {
    return this.questionValues.map((questionValue, i) => {
      return (
        <Mutation
          mutation={this.UpdateQuestionResponseMutation}
          variables={{
            previousResponse: this.state.selectedOption,
            updatedResponse: questionValue
          }}
          onCompleted={(data: any | Error) => {}}
        >
          {(postMutation: () => void) => (
            <div onClick={postMutation}>
              <RatingQuestionOption
                key={questionValue}
                questionId={this.questionData.id}
                value={questionValue}
                optionSelected={this.optionSelected}
              />
            </div>
          )}
        </Mutation>
      );
    });
  };

  //----------------------------------------------------------------------
  questionValues = [
    "strongly-disagree",
    "disagree",
    "neutral",
    "agree",
    "strongly-agree"
  ];

  optionColors: any = {
    "strongly-disagree": "#d31d3b",
    disagree: "#ea7b04",
    neutral: "#f2da00",
    agree: "#b9f100",
    "strongly-agree": "#3dce04"
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
              <RatingQuestionButton
                label="update"
                clickHandler={this.updateQuestionName}
              />
            </div>

            <RatingQuestionButton
              label="delete"
              data-question-id={this.questionData.id}
              clickHandler={this.props.deleteQuestion}
            />
          </div>
          <div className={styles.answersColumn}>
            <div className={styles.optionsContainer}>
              {this.renderQuestionOptions()}
            </div>
            <h1
              className={styles.selectionIndicator}
              style={{
                background: this.optionColors[this.state.selectedOption]
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingQuestion;
