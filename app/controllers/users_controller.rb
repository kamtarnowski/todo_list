class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :update, :destroy, :active_stats]

  def index
    @users = User.order(created_at: :desc)
    respond_with @users
  end

  def show
    # raise "error" if current_user.id != params[:id].to_i
    if params[:task].present?
      respond_with([@user, @user.tasks.active, @user.tasks.inactive])
    else
      respond_with @user
    end
  end

  def update
    @user.update(user_params) ? respond_with(@user) : false
  end

  def destroy
    @user.destroy ? respond_with(@user) : false
  end

  def create
    user = User.new(user_params)
    user.save ? respond_with(user) : false
  end

  def active_stats
    first_scope = @user.tasks.active.select{ |t| t.completed.between?(0, 20)}.size
    second_scope = @user.tasks.active.select{ |t| t.completed.between?(21, 40)}.size
    third_scope = @user.tasks.active.select{ |t| t.completed.between?(41, 60)}.size
    fourth_scope = @user.tasks.active.select{ |t| t.completed.between?(61, 80)}.size
    fifth_scope = @user.tasks.active.select{ |t| t.completed.between?(81, 99)}.size
    respond_with [first_scope, second_scope, third_scope, fourth_scope, fifth_scope]
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :username,
        :id, :password, :password_confirmation)
    end
end
