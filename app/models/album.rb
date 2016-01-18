class Album < ActiveRecord::Base
  belongs_to :task
  has_many :images, dependent: :destroy
end
