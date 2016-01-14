class Category < ActiveRecord::Base
  has_many :tasks, dependent: :nullify

  validates :name, presence: true
end
