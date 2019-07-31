import * as React from "react";
import * as styles from "./RatingQuestionOption.module.scss";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

interface RatingQuestionOptionProps {
  questionId: string;
  questionValue: string;
  currentlySelectedOption: string,
  optionSelected: React.ChangeEventHandler;
}

const UpdateQuestionResponseMutation = gql`
  mutation(
    $questionId: ID!
    $surveyId: ID!
    $responseId: ID!
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

const RatingQuestionOption = (props: RatingQuestionOptionProps) => {
  return (
        <Mutation
          mutation={UpdateQuestionResponseMutation}
          // TODO pass in the clicked value instead of hardcoded value
          variables={{
            questionId: 12345,
            surveyId: 6543,
            responseId: 1234567890,
            value: 3
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
