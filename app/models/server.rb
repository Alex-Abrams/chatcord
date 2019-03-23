# == Schema Information
#
# Table name: servers
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  image_url  :string
#  user_id    :integer          not null
#  comment_id :integer          not null
#  admin_id   :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :title, presence: true

  has_many :users,
    primary_key: :id,
    foreign_key: :id,
    class_name: :User

  belongs_to :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :User

  def title_too_long
    if title.length > 20
      errors[:title] << "too long"
    end
  end
end
