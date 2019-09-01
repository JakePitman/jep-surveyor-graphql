import * as React from "react";
import Report from "../Report"
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

const SurveyReport = ( props: SurveyProps ) => (

      <div className={styles.surveyResponsesContainer}>
        <h1>{props.surveyName}</h1>
        <Report responseData={props.responseData}/>
      </div>
)

export default SurveyReport;
