import * as React from "react";
import Axios from "axios";

interface SurveyProps {
  survey_id: string;
}
class SurveyReport extends React.Component<SurveyProps> {
  state = {};

  componentDidMount() {
    Axios.get(
      `http://localhost:8080/responses/?survey_id=${this.props.survey_id}`
    )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.props.survey_id}</h1>
        {/* <p>{this.props.}</p> */}
      </div>
    );
  }
}

export default SurveyReport;
