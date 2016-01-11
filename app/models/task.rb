class Task < ActiveRecord::Base
  belongs_to :user

  after_create :update_status
  after_update :update_status

  validates_presence_of :title, :description
  # validates :status, inclusion: { in: ['active', 'finished'] }
  validates :completed, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

  enum status: [:active, :finished]

  scope :active, -> { where(status: 0) }
  scope :inactive, -> { where(status: 1) }

  private
    def update_status
      self.completed == 100 ? self.update_column(:status, 1) : self.update_column(:status, 0)
    end
end
