# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
Channel.delete_all
MessageBoard.delete_all

user1 = User.create!(username: 'guest', password: 'password', email: 'guest@guest.com')
user2 = User.create!(username: 'guest1', password: 'password', email: 'guest1@guest.com')
user3 = User.create!(username: 'guest2', password: 'password', email: 'guest2@guest.com')
user4 = User.create!(username: 'guest3', password: 'password', email: 'guest3@guest.com')
user5 = User.create!(username: 'guest4', password: 'password', email: 'guest4@guest.com')


server1 = Server.create(title: "server1", image_url: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png", admin_id: user2.id)
server2 = Server.create(title: "server2", image_url: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png", admin_id: user3.id)
server3 = Server.create(title: "server3", image_url: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png", admin_id: user4.id)
server4 = Server.create(title: "server4", image_url: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png", admin_id: user4.id)

channel1 = Channel.create(title: "channel1", server_id: user2.id)
channel2 = Channel.create(title: "channel2", server_id: user2.id)
channel3 = Channel.create(title: "channel3", server_id: user3.id)
channel4 = Channel.create(title: "channel4", server_id: user3.id)
channel5 = Channel.create(title: "channel5", server_id: user3.id)
channel6 = Channel.create(title: "channel6", server_id: user2.id)
channel7 = Channel.create(title: "general", server_id: user4.id)
channel9 = Channel.create(title: 'user1??', server_id: user1.id)
channel10 = Channel.create(title: 'should be server1', server_id: server1.id)

message_board1 = MessageBoard.create(channel_id: channel1.id)
message_board2 = MessageBoard.create(channel_id: channel2.id)
message_board3 = MessageBoard.create(channel_id: channel3.id)
message_board4 = MessageBoard.create(channel_id: channel4.id)
message_board5 = MessageBoard.create(channel_id: channel5.id)
message_board6 = MessageBoard.create(channel_id: channel6.id)
message_board7 = MessageBoard.create(channel_id: channel7.id)
message_board9 = MessageBoard.create(channel_id: channel9.id)
message_board10 = MessageBoard.create(channel_id: channel10.id)
