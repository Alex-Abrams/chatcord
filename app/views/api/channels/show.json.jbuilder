
json.channel do
  json.partial! 'api/channels/channel', channel: @channel
  json.commentIds @channel.comments.pluck(:id)
end
