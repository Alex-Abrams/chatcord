@servers.each do |server|
  json.set! server.id do
    json.partial! 'api/servers/server', server: server
    json.channelIds []
  end
end
