import * as React from "react";
import axios from "axios";
import * as styles from "./index.module.scss";
import RatingQuestion from "./ratingQuestion/RatingQuestion";
import NewQuestionForm from "./newQuestionForm/NewQuestionForm";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

interface Question {
  id: string;
  title: string;
}

interface RatingQuestionsProps {
  questions: Question[];
  ratingQuestionsUrl: string;
  firstFiveRatingQuestions: any;
}

class RatingQuestions extends React.Component<RatingQuestionsProps, {}> {
  state = {
    questions: this.props.firstFiveRatingQuestions,
    newQuestionTitle: ""
  };

  //------------------------NEW QUESTION FUNCTIONS----------------------------

  //UPDATE UI AFTER POST REQUEST
  updateUiAfterPost = newQuestion => {
    const updatedQuestions: any = this.state.questions.concat(newQuestion);
    this.setState({ questions: updatedQuestions });
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
    const targetUrl = this.removeJsonFromUrl(this.props.ratingQuestionsUrl);
    axios
      .delete(`${targetUrl}/${questionId}.json`)
      .then(res => {
        const data: any = this.state.questions;
        const filteredQuestions = data.filter(
          (question: Question) => question.id.toString() != questionId
        );
        this.setState({ questions: filteredQuestions });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //---------------------------------------------------------------------------

  componentDidMount() {
    axios
      .get(this.props.ratingQuestionsUrl)
      .then(res => {
        this.setState({ questions: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={styles.list} data-automation-id="questions-list">
        <NewQuestionForm
          ratingQuestionsUrl={this.props.ratingQuestionsUrl}
          updateUiAfterPost={this.updateUiAfterPost}
        />
        {this.state.questions.map(question => (
          <RatingQuestion
            key={question.id}
            deleteQuestion={this.deleteQuestion}
            question={question}
            ratingQuestionsUrl={this.removeJsonFromUrl(
              this.props.ratingQuestionsUrl
            )}
          />
        ))}
      </div>
    );
  }
}

export default RatingQuestions;
