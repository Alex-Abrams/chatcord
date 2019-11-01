# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :title, presence: true

  belongs_to :server, optional: true,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server


  has_many :comments,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: :Comment

  def title_too_long
    if title.length > 20
      errors[:title] << "too long"
    end
  end
end
