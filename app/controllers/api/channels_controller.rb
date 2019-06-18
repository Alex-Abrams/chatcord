class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.where("server_id = ?", params[:server_id])
  end

  def new
    @channel = Channel.new
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:server_id]
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private


  def channel_params
    params.require(:channel).permit(:title)
  end
end
