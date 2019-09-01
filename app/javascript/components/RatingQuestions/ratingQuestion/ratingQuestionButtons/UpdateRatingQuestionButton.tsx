import React, { ReactEventHandler } from "react";
import { Button } from "@cultureamp/kaizen-component-library";
import { string } from "prop-types";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

interface Props {
  questionId: string;
  updatedQuestionTitle: string;
  handleUpdate: () => void;
}

const UpdateQuestionTitleMutation = gql`
  mutation($questionId: ID!, $updatedTitle: String!) {
    updateRatingQuestion(id: $questionId, title: $updatedTitle) {
      ... on RatingQuestion {
        id
        title
      }
      ... on DocumentNotFoundError {
        errors
      }
    }
  }
`;

const RatingQuestionButton = (props: Props) => {
  return (
    <Mutation
      mutation={UpdateQuestionTitleMutation}
      variables={{
        questionId: props.questionId,
        updatedTitle: props.updatedQuestionTitle
      }}
      onCompleted={(data: any | Error) => {
        props.handleUpdate();
      }}
    >
      {(postMutation: () => void) => (
        <Button label={"update"} onClick={postMutation} />
      )}
    </Mutation>
  );
};

export default RatingQuestionButton;
