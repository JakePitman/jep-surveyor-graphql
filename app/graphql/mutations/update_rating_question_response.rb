module Mutations
  class UpdateRatingQuestionResponse < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :previous_response, String, required: true
    argument :updated_response, String, required: true

    type Types::UpdateRatingQuestionResponseResult

    def resolve(id: nil)
      begin
        target_question = RatingQuestion.find(id)
        {id: id}
      rescue Mongoid::Errors::DocumentNotFound => e
        e
      end
    end
  end
end