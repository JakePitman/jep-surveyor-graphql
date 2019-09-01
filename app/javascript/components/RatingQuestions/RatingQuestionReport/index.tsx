import React from "react";
import * as styles from "./index.module.scss";
import Report from "../../Report"

interface RatingQuestionReportProps {
  ratingQuestionTitle: string
  responseData: {
    "strongly-disagree": number,
    "disagree": number,
    "neutral": number,
    "agree": number,
    "strongly-agree": number
  };
}

class RatingQuestionReport extends React.Component<RatingQuestionReportProps> {
  render(){
    return(
      <div className={styles.ratingQuestionReportContainer} >
        <h1>HELLO WORLD</h1>
        <h2>{this.props.ratingQuestionTitle}</h2>
        {console.log(this.props.responseData)}
        <Report responseData={this.props.responseData} />
      </div>
    )
  }
}

export default RatingQuestionReport;
