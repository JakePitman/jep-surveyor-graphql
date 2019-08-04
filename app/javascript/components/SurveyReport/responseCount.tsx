import * as React from "react"
import * as styles from "./responseCount.module.scss";

interface ResponseCountProps {
  responseTitle: string;
  responseCount: number;
}

const optionColors: any = {
  "Strongly Disagree": "#d31d3b",
  Disagree: "#ea7b04",
  Neutral: "#f2da00",
  Agree: "#b9f100",
  "Strongly Agree": "#3dce04"
};

const ResponseCount = (props: ResponseCountProps) => (
  <div className={styles.responseCountContainer} style={{"background": optionColors[props.responseTitle]}}>
    <h1>{props.responseTitle}</h1>
    <h1>{props.responseCount}</h1>
  </div>
)

export default ResponseCount