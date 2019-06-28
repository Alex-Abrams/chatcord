# message boards

json.message_board do
  json.extract! @message_board, :id, :channel_id, :title
  json.commentIds @message_board.comments.pluck(:id)
end
