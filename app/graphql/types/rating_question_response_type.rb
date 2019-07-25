module Types
  class RatingQuestionResponseType < BaseObject
    field :id, ID, null: false
    field :previous_response, String, null: false
    field :updated_response, String, null: false
  end
end