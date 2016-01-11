class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.order(created_at: :desc)
    respond_with @users
  end

  def show
    # raise "error" if current_user.id != params[:id].to_i
    respond_with @user
  end

  def update
    @user.update(user_params) ? respond_with(@user) : false
  end

  def destroy
    @user.destroy ? respond_with(@user) : false
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :username, :id)
    end
end
