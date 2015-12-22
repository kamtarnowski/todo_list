class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find(params[:id])
    raise "error" if current_user.id != params[:id].to_i
    respond_with @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      respond_with @user
    else
      false
    end
  end

  private
    def user_params
      params.permit(:email, :username, :password, :password_confirmation, :id)
    end
end
