import * as React from "react";
import ResponseCount from "./responseCount"
// import * as styles from "./index.module.scss";

interface Props {
  responseData: {
    "strongly-disagree": number,
    "disagree": number,
    "neutral": number,
    "agree": number,
    "strongly-agree": number
  };
}

const Report = ( props: Props ) => (
  <React.Fragment>
    <ResponseCount responseTitle="Strongly Agree" responseCount={props.responseData["strongly-agree"]}/>
    <ResponseCount responseTitle="Agree" responseCount={props.responseData["agree"]}/>
    <ResponseCount responseTitle="Neutral" responseCount={props.responseData["neutral"]}/>
    <ResponseCount responseTitle="Disagree" responseCount={props.responseData["disagree"]}/>
    <ResponseCount responseTitle="Strongly Disagree" responseCount={props.responseData["strongly-disagree"]}/>
</React.Fragment>
)

export default Report