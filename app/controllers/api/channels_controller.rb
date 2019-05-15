class Api::ChannelsController < ApplicationController

  def index
    # byebug
    # @channels = Channel.where("server_id = ?", params[:server_id]) #Bug 1
    # @channels = Channel.all
    # @channels = defined?(params[:server_id]) != nil ? Channel.where("server_id = ?", params[:server_id]) : Channel.where("server_id = ?", 1)
    ################
    # id_for_server = defined?(params[:server_id]) ? params[:server_id] : 1
    # @channels = Channel.where("server_id = ?", id_for_server)

    if params[:server_id]
      # debugger
      @channels = Channel.where("server_id = ?", params[:server_id])
      # render "api/servers"
    else
      redirect_to :back
    end


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

  def index_params

  end

  def channel_params
    params.require(:channel).permit(:title);
  end
end
