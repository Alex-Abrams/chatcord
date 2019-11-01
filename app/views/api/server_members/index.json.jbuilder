@server_members.each do |server_member|
  json.set! server_member.id do
    json.userId server_member.user_id
    json.serverId server_member.server_id
  end
end
