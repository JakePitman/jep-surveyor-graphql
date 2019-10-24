class SurveyController < ApplicationController
  def survey_report 
    @survey_id = params[:survey_id]
    @survey_name = Survey.find(@survey_id).name
    @response_data = HTTP.get("http://#{ENV.fetch("ELIXIR_MS_HOSTNAME")}:8080/responses/?survey_id=#{@survey_id}")
  end
end