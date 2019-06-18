json.partial! 'api/comments/comment', comment: @comment


# json.comment do
#   json.partial! 'api/comments/comment', comment: @comment
#   json.userIds @comment.users.pluck(:id)
# end
