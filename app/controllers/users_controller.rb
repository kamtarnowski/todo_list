class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.order(created_at: :desc)
    respond_with @users
  end

  def show
    @user = User.find(params[:id])
    # raise "error" if current_user.id != params[:id].to_i
    respond_with @user
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params) ? respond_with(@user) : false
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy ? respond_with(@user) : false
  end

  private
    def user_params
      params.require(:user).permit(:email, :username, :id)
    end
end
