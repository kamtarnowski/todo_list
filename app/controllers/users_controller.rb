class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find(params[:id])
    # respond_with @user
    render nothing: true
  end

  # def index
  #   render nothing: true
  # end
end
