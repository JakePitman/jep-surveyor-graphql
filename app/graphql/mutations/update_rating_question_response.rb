require "http"

module Mutations
  class UpdateRatingQuestionResponse < Mutations::BaseMutation
    argument :survey_id, ID, required: true
    argument :question_id, ID, required: true
    argument :response_id, String, required: true
    argument :value, Int, required: true
\
    type Types::UpdateRatingQuestionResponseResult

    def resolve(survey_id: nil, question_id: nil, response_id: nil, value: nil)
      begin
        HTTP.post("http://localhost:8080/responses", :json => {:survey_id => survey_id, :question_id => question_id, :response_id => response_id, :value => value})
        {survey_id: survey_id, question_id: question_id, response_id: response_id, value: value}
      rescue Mongoid::Errors::DocumentNotFound => e
        e
      end
    end
  end
end