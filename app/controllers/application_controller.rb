require "application_responder"

class ApplicationController < ActionController::Base
  skip_before_filter :verify_signed_out_user
  self.responder = ApplicationResponder

  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :json, :html

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def home
    render 'layouts/application'
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
    devise_parameter_sanitizer.for(:account_update) << :username
  end
end
