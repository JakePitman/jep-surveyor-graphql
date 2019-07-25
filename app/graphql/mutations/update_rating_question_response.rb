require "http"

module Mutations
  class UpdateRatingQuestionResponse < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :previous_response, String, required: true
    argument :updated_response, String, required: true

    type Types::UpdateRatingQuestionResponseResult

    def resolve(id: nil, previous_response: nil, updated_response: nil)
      begin
        HTTP.post("POSTBIN_ENDPOINT_GOES_HERE", :json => {:id => id.to_s, :previous_response => previous_response, :updated_response => updated_response})
        {id: id, previous_response: previous_response, updated_response: updated_response}
      rescue Mongoid::Errors::DocumentNotFound => e
        e
      end
    end
  end
end