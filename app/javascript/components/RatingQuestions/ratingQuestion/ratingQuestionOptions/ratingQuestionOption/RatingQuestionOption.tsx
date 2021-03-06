import * as styles from "./RatingQuestionOption.module.scss";
import * as React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import ls from "local-storage";
import jwtDecode from "jwt-decode";

interface RatingQuestionOptionProps {
  questionId: string;
  questionValue: string;
  currentlySelectedOption: string;
  optionSelected: React.ChangeEventHandler;
  surveyId: string;
}

const UpdateQuestionResponseMutation = gql`
  mutation(
    $questionId: ID!
    $surveyId: ID!
    $responseId: String!
    $value: Int!
  ) {
    updateRatingQuestionResponse(
      questionId: $questionId
      surveyId: $surveyId
      responseId: $responseId
      value: $value
    ) {
      ... on RatingQuestionResponse {
        questionId
        surveyId
        responseId
        value
      }
      ... on DocumentNotFoundError {
        errors
      }
    }
  }
`;

const generateResponseId = (surveyId, questionId) => {
  const token = ls("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;
  return `${surveyId}-${questionId}-${userId}`;
};
const valueConverter = value => {
  switch (value) {
    case "strongly-disagree":
      return 1;
    case "disagree":
      return 2;
    case "neutral":
      return 3;
    case "agree":
      return 4;
    case "strongly-agree":
      return 5;
    default:
      throw `Invalid string passed to value converter: ${value} `;
  }
};

const RatingQuestionOption = (props: RatingQuestionOptionProps) => {
  return (
    <Mutation
      mutation={UpdateQuestionResponseMutation}
      variables={{
        questionId: props.questionId,
        surveyId: props.surveyId,
        responseId: generateResponseId(props.surveyId, props.questionId),
        value: valueConverter(props.questionValue)
      }}
      onCompleted={(data: any | Error) => {}}
    >
      {(postMutation: () => void) => (
        <div className={styles.optionContainer} onClick={postMutation}>
          <input
            className={styles.optionInput}
            type="radio"
            name={props.questionId}
            value={props.questionValue}
            onChange={props.optionSelected}
          />
          <p className={styles.optionValue}>{props.questionValue}</p>
        </div>
      )}
    </Mutation>
  );
};

export default RatingQuestionOption;
