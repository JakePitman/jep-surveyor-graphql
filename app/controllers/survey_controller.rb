class SurveyController < ApplicationController
  def report 
    @survey_id = params[:survey_id]
    @survey_name = Survey.find(@survey_id).name
    @response_data = HTTP.get("http://localhost:8080/responses/?survey_id=#{@survey_id}")
  end
end