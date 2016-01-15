class AddCategoryToTask < ActiveRecord::Migration
  def change
    add_reference :tasks, :category, index: true, foreign_key: true
  end
end
