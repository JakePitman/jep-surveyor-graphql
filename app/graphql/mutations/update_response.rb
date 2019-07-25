module Mutations
  class UpdateRatingQuestion < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :title, String, required: true

    type Types::UpdateRatingQuestionResult

    def resolve(id: nil, title: nil)
      begin
        target_question = RatingQuestion.find(id)
        target_question.title = title
        target_question.save
        {id: id, title: title}
      rescue Mongoid::Errors::DocumentNotFound => e
        e
      end
    end
  end
end