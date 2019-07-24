# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string
#  channel_id :integer
#

class Comment < ApplicationRecord

  validates :body, presence: true

  belongs_to :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
