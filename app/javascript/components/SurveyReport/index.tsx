import * as React from "react";
import ResponseCount from "./responseCount"
import * as styles from "./index.module.scss";

interface SurveyProps {
  surveyId: string;
  surveyName: string;
  responseData: {
    "strongly-disagree": number,
    "disagree": number,
    "neutral": number,
    "agree": number,
    "strongly-agree": number
  };
}

class SurveyReport extends React.Component<SurveyProps> {
  state = {};


  render() {
    return (
      <div className={styles.surveyResponsesContainer}>
        <h1>{this.props.surveyName}</h1>
        <ResponseCount responseTitle="Strongly Agree" responseCount={this.props.responseData["strongly-agree"]}/>
        <ResponseCount responseTitle="Agree" responseCount={this.props.responseData["agree"]}/>
        <ResponseCount responseTitle="Neutral" responseCount={this.props.responseData["neutral"]}/>
        <ResponseCount responseTitle="Disagree" responseCount={this.props.responseData["disagree"]}/>
        <ResponseCount responseTitle="Strongly Disagree" responseCount={this.props.responseData["strongly-disagree"]}/>
      </div>
    );
  }
}

export default SurveyReport;
