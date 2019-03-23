class Api::ServersController < ApplicationController
  def index
    @servers = Server.all
  end

  def show
    @server = Server.find(params[:id])
  end

  def create
    @server = Server.new(server_params)

    if @server.save
      @server.admin_id = current_user.id
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
      if current_user.id == @server.admin_id
        @server.destroy
        render :show
      else
        render json: ["Only server creator may delete this server"], status: 403
      end
  end

  def update
    @server = Server.find(params[:id])
    if currentUser.id == @server.admin_id && @server && @server.update_attributes(server_params)
      render :show
    elsif !@server
      render json: ['Could not locate Server'], status: 400
    else
      render json: @server.errors.full_messages, status: 401
    end

  end

  private

  def server_params
    params.require(:server).permit(:title, :image_url)
  end

end
