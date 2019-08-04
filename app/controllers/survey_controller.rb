class SurveyController < ApplicationController
  def report 
    @survey_id = params[:survey_id]
    @response_data = HTTP.get("http://localhost:8080/responses/?survey_id=#{@survey_id}")
  end
end