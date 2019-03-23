# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all

User.create!(username: 'guest', password: 'password', email: 'guest@guest.com')
user2 = User.create!(username: 'guest1', password: 'password', email: 'guest1@guest.com')
user3 = User.create!(username: 'guest2', password: 'password', email: 'guest2@guest.com')
user4 = User.create!(username: 'guest3', password: 'password', email: 'guest3@guest.com')
user5 = User.create!(username: 'guest4', password: 'password', email: 'guest4@guest.com')


server1 = Server.create(title: "server1", image_url: "8awdja0whjd", admin_id: user2.id)
server2 = Server.create(title: "server2", image_url: "8awdja0whjd", admin_id: user3.id)
server3 = Server.create(title: "server3", image_url: "8awdja0whjd", admin_id: user4.id)
