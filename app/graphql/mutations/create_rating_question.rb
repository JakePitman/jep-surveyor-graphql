module Mutations
  class CreateRatingQuestion < Mutations::BaseMutation
    argument :title, String, required: true
    argument :survey_id, ID, required: true

    type Types::CreateRatingQuestionResult

    def resolve(title: nil, survey_id: nil)
      begin
        survey = Survey.find(survey_id)
        survey.rating_questions.create!(title: title)
      rescue Mongoid::Errors::Validations => e
        puts "RESCUING #{e.class}"
        e
      rescue Mongoid::Errors::DocumentNotFound => e
        e
      end
    end
  end
end