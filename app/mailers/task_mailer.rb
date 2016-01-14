class TaskMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def task_finished(user, title)
    @username = user.username
    @title = title
    mail(to: user.email, subject: "#{title} has been finished.")
  end
end
