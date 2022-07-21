# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.delete_all
# Server.delete_all
# Channel.delete_all
# MessageBoard.delete_all
# Comment.delete_all
# Foffline.delete_all
#
# ServerMember.delete_all

user1 = User.create!(username: 'guest', password: 'password', email: 'guest@guest.com')
user2 = User.create!(username: 'guest1', password: 'password', email: 'guest1@guest.com')
user3 = User.create!(username: 'guest2', password: 'password', email: 'guest2@guest.com')
user4 = User.create!(username: 'guest3', password: 'password', email: 'guest3@guest.com')
user5 = User.create!(username: 'guest4', password: 'password', email: 'guest4@guest.com')


# def grab_image(image_file)
#   File.open(File.join(Rails.root, "/app/assets/images/#{image_file}"))
# end


server1 = Server.create(title: "server1",
  image_url: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png", admin_id: user2.id, link: "https://chatcord.gg/" + "1zr" + rand(111...999).to_s)
server2 = Server.create(title: "Fun Times",
   image_url: "https://cdn.pixabay.com/photo/2019/10/17/12/20/turkeys-4556812_960_720.jpg", admin_id: user3.id, link: "https://chatcord.gg/" + "2qa" + rand(111...999).to_s)
server3 = Server.create(title: "Lets Rock!",
   image_url: "https://cdn.pixabay.com/photo/2019/10/16/18/52/wild-birds-4555168_960_720.jpg", admin_id: user4.id, link: "https://chatcord.gg/" + "3pt" + rand(111...999).to_s)
server4 = Server.create(title: "The Guild",
   image_url: "https://cdn.pixabay.com/photo/2019/10/16/10/12/double-exposure-4554077_960_720.jpg", admin_id: user4.id, link: "https://chatcord.gg/" + "4lk" + rand(111...999).to_s)
server5 = Server.create(title: "Jam Ultra Mega",
   image_url: "https://cdn.pixabay.com/photo/2019/10/05/06/04/disc-4527065__340.png", admin_id: user4.id, link: "https://chatcord.gg/" + "5zk" + rand(111...999).to_s)

user1joins1 = ServerMember.create(user_id: user1.id, server_id: server1.id)
user1joins2 = ServerMember.create(user_id: user1.id, server_id: server2.id)
user1joins3 = ServerMember.create(user_id: user1.id, server_id: server3.id)
user1joins4 = ServerMember.create(user_id: user1.id, server_id: server4.id)
user1joins5 = ServerMember.create(user_id: user1.id, server_id: server5.id)

user2joins1 = ServerMember.create(user_id: user2.id, server_id: server1.id)
user2joins2 = ServerMember.create(user_id: user2.id, server_id: server2.id)
user2joins4 = ServerMember.create(user_id: user2.id, server_id: server4.id)

channel1 = Channel.create(title: Faker::Music.band, server_id: user2.id)
channel2 = Channel.create(title: Faker::Music.band, server_id: user2.id)
channel3 = Channel.create(title: Faker::Music.band, server_id: user3.id)
channel4 = Channel.create(title: Faker::Music.band, server_id: user3.id)
channel5 = Channel.create(title: Faker::Music.band, server_id: user3.id)
channel6 = Channel.create(title: Faker::Music.band, server_id: user2.id)
channel7 = Channel.create(title: Faker::Music.band, server_id: user4.id)
channel9 = Channel.create(title: Faker::Music.band, server_id: user1.id)
channel10 = Channel.create(title: Faker::Music.band, server_id: server1.id)


Comment.create(channel_id: channel1.id, user_id: user1.id, username: user1.username, body: 'POGCHAMPS')
Comment.create(channel_id: channel1.id, user_id: user1.id, username: user1.username, body: 'chardie')
Comment.create(channel_id: channel1.id, user_id: user2.id, username: user2.username, body: 'where the boys at??')
Comment.create(channel_id: channel2.id, user_id: user2.id, username: user2.username, body: 'gg ex game 5v1')
Comment.create(channel_id: channel2.id, user_id: user2.id, username: user2.username, body: 'i aint hearing no fish')
Comment.create(channel_id: channel2.id, user_id: user2.id, username: user2.username, body: 'pitter patter')
Comment.create(channel_id: channel3.id, user_id: user2.id, username: user2.username, body: 'say a man eat his own head')
Comment.create(channel_id: channel3.id, user_id: user3.id, username: user3.username, body: 'i dream of a pruple tiger')
Comment.create(channel_id: channel4.id, user_id: user3.id, username: user3.username, body: 'where the money at?')
Comment.create(channel_id: channel4.id, user_id: user3.id, username: user3.username, body: 'GO SHARKS!!!!')
Comment.create(channel_id: channel5.id, user_id: user3.id, username: user3.username, body: 'godzilla was pretty cool')
Comment.create(channel_id: channel6.id, user_id: user3.id, username: user3.username, body: 'the expanse is the best show')
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: 'game of thrones season 7 and 8 sucked sooooooo much')
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: 'fire the thrusters to get me the hell out of here')
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: 'UNBELIEVABLE PLAY BY ARTTEEZY!')

Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel2.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel2.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel3.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel3.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel4.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel4.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel5.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)

Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel2.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel2.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel3.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel3.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel4.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel4.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel5.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)
Comment.create(channel_id: channel6.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::MichaelScott.quote)

Comment.create(channel_id: channel7.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)

Comment.create(channel_id: channel7.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel7.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user2.id, username: user2.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel9.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel10.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel10.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel10.id, user_id: user3.id, username: user3.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel10.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel10.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel10.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)
Comment.create(channel_id: channel10.id, user_id: user4.id, username: user4.username, body: Faker::TvShows::HeyArnold.quote)


Foffline.create(name: 'Ted')
Foffline.create(name: Faker::Games::Dota.hero)

12.times { Foffline.create(name: Faker::Games::Dota.unique.player) }
8.times { Foffline.create(name: Faker::Games::Dota.unique.hero) }
