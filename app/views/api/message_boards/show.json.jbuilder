# message boards

json.message_board do
  json.extract! @message_board, :id, :channel_id
  json.commentIds @message_board.comments.pluck(:id)
  # json.title @message_board.channel.pluck(:title)
end
