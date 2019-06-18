class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where("msg_board_id= ?", params[:message_board_id])
    # might need to be message_board_id

  end

  def new
    @comment = Comment.new
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.msg_board_id = params[:mesage_board_id]  #might need to be :message_board_id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :msg_board_id, :user_id)
  end
end
