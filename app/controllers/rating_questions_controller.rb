class RatingQuestionsController < ApplicationController
  def index
    @rating_questions = RatingQuestion.all
  end

  def show
    @rating_question = RatingQuestion.find(params[:id])
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
