# json.partial! 'api/servers/server', server: @server

json.server do
  json.partial! 'api/servers/server', server: @server
  json.channelIds @server.channels.pluck(:id)
end
