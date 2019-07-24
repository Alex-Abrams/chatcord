json.extract! user, :id, :username, :email
# expirmental at the moment
json.joined_servers user.server_joins.pluck(:id)
