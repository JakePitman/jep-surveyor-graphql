import * as React from "react";
import * as styles from "./NewQuestionForm.module.scss";
import axios from 'axios'

interface NewQuestionFormProps {
  ratingQuestionsUrl: string
  updateUiAfterPost: any
  //newQuestionTitle: string
}

class NewQuestionForm extends React.Component<NewQuestionFormProps, {}> {

  state = {
    newQuestionTitle: ""
  }

  updateNewQuestionTitleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newQuestionTitle: e.target.value });
  };

  sendNewQuestionTitleData = (e: React.FormEvent<HTMLButtonElement>) => {
    if (this.state.newQuestionTitle) {
      axios
        .post(this.props.ratingQuestionsUrl, {
          title: this.state.newQuestionTitle
        })
        .then(res => {
          this.setState({newQuestionTitle: ""})
          this.props.updateUiAfterPost(res.data)
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert("Please enter something first!");
    }
  };
  
  render(){
    return(
      <div className={styles.formContainer}>
        <input
          className={styles.formInput}
          type="text"
          value={this.state.newQuestionTitle}
          placeholder="New Question Name"
          onChange={this.updateNewQuestionTitleData}
        />
        <br />
        <button
          className={styles.formButton}
          onClick={this.sendNewQuestionTitleData}
        >
          Add question
        </button>
      </div>
    )
  }
}

export default NewQuestionForm;
