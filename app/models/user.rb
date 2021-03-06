class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :tasks, dependent: :nullify

  validates :username, presence: true

  def self.global_stats
    return [self.tasks.active.size, self.tasks.inactive.size]
  end
end
