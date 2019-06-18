# message boards

json.server do
  json.extract! @message_board, :id, :channel_id
  json.commentIds @message_board.comments.pluck(:id)
end
