import React from "react";
import { Button } from "@cultureamp/kaizen-component-library";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

interface Props {
  questionId: string;
  updatedQuestionTitle: string;
  handleDelete: (id: string) => void;
}

const DeleteRatingQuestionMutation = gql`
  mutation($questionId: ID!) {
    deleteRatingQuestion(id: $questionId){
      ...on Id {
        id
      }
      ...on ObjectPersistedError {
        errors
      }
      ...on DocumentNotFoundError {
        errors
      }
    }
  }
`;


const DeleteRatingQuestionButton = (props: Props) => {

  const deleteFuncWrapper = (id) => {
    props.handleDelete(id)
  }

  return (
    <Mutation
      mutation={DeleteRatingQuestionMutation}
      variables={{
        questionId: props.questionId,
      }}
      onCompleted={(data: any | Error) => {
        deleteFuncWrapper(props.questionId)
      }}
    >
      {(postMutation: () => void) => (
        <Button label={"delete"} onClick={postMutation} />
      )}
    </Mutation>
  );
};

export default DeleteRatingQuestionButton;
