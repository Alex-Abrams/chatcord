# @comments.each do |comment|
#   json.set! comment.id do
#     json.partial! 'api/comments/comment', comment: comment
#     # json.userName @comments.users.pluck(:id)
#   end
# end
# json.userId @server_member.user_id
# json.serverId @server_member.server_id


@server_members.each do |server_member|
  json.set! server_member.id do
    json.userId server_member.user_id
    json.serverId server_member.server_id
  end
end


# @servers.each do |server|
#   json.set! server.id do
#     json.partial! 'api/servers/server', server: server
#     json.memberIds server.server_members.pluck(:user_id)
#   end
# end
