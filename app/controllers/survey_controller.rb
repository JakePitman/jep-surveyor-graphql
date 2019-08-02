class SurveyController < ApplicationController
  def report 
    @survey_id = params[:survey_id]
  end
end