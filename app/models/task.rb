class Task < ActiveRecord::Base
  belongs_to :user

  validates_presence_of :title, :description
  validates :status, inclusion: { in: ['active', 'finished'] }
  validates :completed, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

  enum status: [:active, :finished]
end
