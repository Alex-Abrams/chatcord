json.extract! user, :id, :username, :email
json.joined_servers user.server_joins.pluck(:id)
