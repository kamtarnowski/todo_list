class CategoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    categories = Category.all
    respond_with categories
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy ? respond_with(category) : false
  end

  def create
    category = Category.new(category_params)
    category.save ? respond_with(category) : false
  end

  private
    def category_params
      params.require(:category).permit(:name)
    end
end
