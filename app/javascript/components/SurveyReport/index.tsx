import * as React from "react";
import Axios from "axios";

interface SurveyProps {
  survey_id: string;
}
class SurveyReport extends React.Component<SurveyProps> {
  state = {};

  componentDidMount() {
    Axios.get("http://localhost:8080/").then();
  }

  render() {
    return (
      <div>
        {this.props.survey_id}
        <h1 />
      </div>
    );
  }
}

export default SurveyReport;
