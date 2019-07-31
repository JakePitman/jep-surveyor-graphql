module Types
  class RatingQuestionResponseType < BaseObject
    field :question_id, ID, null: false
    field :survey_id, ID, null: false
    field :response_id, ID, null: false
    field :value, Int, null: false
  end
end