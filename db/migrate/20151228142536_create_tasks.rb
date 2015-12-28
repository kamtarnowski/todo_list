class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :completed
      t.string :status
      t.string :title
      t.text :description

      t.timestamps null: false
    end
  end
end
