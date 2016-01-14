# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => Settings.smtp_user,
  :password             => Settings.smtp_password,
  :authentication       => :login,
  :enable_starttls_auto => true,
  :openssl_verify_mode  => 'none'
}
