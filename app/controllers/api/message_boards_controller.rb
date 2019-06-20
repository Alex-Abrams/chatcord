class Api::MessageBoardsController < ApplicationController
  def show
    @message_board = MessageBoard.find(params[:id])
  end

  def create
    @message_board = MessageBoard.new(message_board_params)

    if @message_board.save
      render :show
    else
      render json: @message_board.errors.full_messages, status: 422
    end
  end

  def new
    @message_board = MessageBoard.new
  end

  def message_board_params
    params.require(:message_board).permit(:channel_id);
  end

end
