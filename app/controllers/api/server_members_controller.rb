class Api::ServerMembersController < ApplicationController
  def index
    @server_members = ServerMember.where("server_id = ?", params[:server_id])
  end

  def new
  @server_member = ServerMember.new
  end

  def create
    @server_member = ServerMember.new(server_member_params)

    @server_member.save!
    #   render :index
    # else
    #   render json: @server_member.errors.full_messages, status: 422
    # end
  end

  private

  def server_member_params
    params.permit(:user_id, :server_id)
  end
end
