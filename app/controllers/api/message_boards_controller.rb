class Api::MessageBoardsController < ApplicationController
  def show
    @message_board = MessageBoard.find_by(params[:id])
  end

  def create
    @message_board = MessageBoard.new
    @message_board.channel_id = params[:channel_id]
  end

end
