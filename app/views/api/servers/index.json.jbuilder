@servers.each do |server|
  json.set! server.id do
    json.partial! 'api/servers/server', server: server
    json.members server.server_members.pluck(:user_id)
  end
end
