module Types
  class MutationType < Types::BaseObject

    field :create_user, mutation: Mutations::CreateUser
    field :signin_user, mutation: Mutations::SignInUser
    field :create_rating_question, mutation: Mutations::CreateRatingQuestion
    field :update_rating_question, mutation: Mutations::UpdateRatingQuestion

    field :update_rating_question_response, mutation: Mutations::UpdateRatingQuestionResponse

    field :delete_rating_question, mutation: Mutations::DeleteRatingQuestion
    field :create_survey, mutation: Mutations::CreateSurvey

  end
end
