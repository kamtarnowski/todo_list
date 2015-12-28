class AddIndexesToTask < ActiveRecord::Migration
  def change
    add_index :tasks, :completed
    add_index :tasks, :status
    add_index :tasks, :title
  end
end
