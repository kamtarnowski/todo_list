class TaskWorker
  include Sidekiq::Worker
  def perform(user_id, title)
    user = User.find(user_id)
    TaskMailer.task_finished(user, title).deliver_now
  end
end
