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
    $previousResponse: String!
    $updatedResponse: String!
  ) {
    updateRatingQuestionResponse(
      id: $questionId
      previousResponse: $previousResponse
      updatedResponse: $updatedResponse
    ) {
      ... on RatingQuestionResponse {
        id
        previousResponse
        updatedResponse
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
          key={props.questionValue}
          mutation={UpdateQuestionResponseMutation}
          variables={{
            questionId: props.questionId,
            previousResponse: props.currentlySelectedOption,
            updatedResponse: props.questionValue
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
