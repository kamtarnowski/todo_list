class CategoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    categories = Category.all
    respond_with categories
  end
end
