json.partial! 'api/comments/comment', comment: @comment

#
# json.comment do
#   json.partial! 'api/comments/comment', comment: @comment
#   json.userName @comment.users.pluck(:id)
# end
