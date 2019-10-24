class RatingQuestionsController < ApplicationController
  def index
    @rating_questions = RatingQuestion.all
  end

  def show
    @rating_question_id = params[:id]
    @survey_id = RatingQuestion.find(@rating_question_id).survey_id
    @rating_question_title = RatingQuestion.find(@rating_question_id).title
    @response_data = HTTP.get("http://#{ENV.fetch("ELIXIR_MS_HOSTNAME")}:8080/responses?survey_id=#{@survey_id}&question_id=#{@rating_question_id}")
  end

  def new
    @rating_question = RatingQuestion.new
  end

  def create
    @rating_question = RatingQuestion.new(question_params)
    if @rating_question.save
      ratingQuestionWithProperGodDamnId = {
        id: @rating_question._id.to_s,
        title: @rating_question.title
      }
      respond_to do |format|
        format.html  { redirect_to "/"}
        format.json  { render :json => ratingQuestionWithProperGodDamnId }
      end
    end
  end

  def edit
    @rating_question = RatingQuestion.find(params[:id])
  end

  def destroy
    RatingQuestion.find(params[:id]).destroy
    flash[:success] = "User deleted"
    respond_to do |format|
      format.html { redirect_to "/" }
      format.json { {id: params[:id]} }
    end
  end

  def update
    target_question = RatingQuestion.find(params[:id])
    if target_question.update_attributes(question_params)
      respond_to do |format|
        format.html {redirect_to "/"}
        format.json { target_question }
      end
    else
      render 'index'
    end
  end

  private

  def question_params
    params.require(:rating_question).permit(:title)
  end
end
