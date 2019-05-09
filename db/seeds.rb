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
# channel7 = Channel.create(title: "channel7", server_id: server3.id)
# channel8 = Channel.create(title: "channel8", server_id: server3.id)
