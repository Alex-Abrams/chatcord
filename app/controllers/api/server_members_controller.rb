class Api::ServerMembersController < ApplicationController
  def index
    puts params
    @server_members = ServerMember.where("server_id = ?", params[:server_id])
  end
end
