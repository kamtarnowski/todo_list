require 'rails_helper'

RSpec.describe "tasks/edit", type: :view do
  before(:each) do
    @task = assign(:task, Task.create!(
      :user => nil,
      :completed => 1,
      :status => "MyString",
      :title => "MyString",
      :description => "MyText"
    ))
  end

  it "renders the edit task form" do
    render

    assert_select "form[action=?][method=?]", task_path(@task), "post" do

      assert_select "input#task_user_id[name=?]", "task[user_id]"

      assert_select "input#task_completed[name=?]", "task[completed]"

      assert_select "input#task_status[name=?]", "task[status]"

      assert_select "input#task_title[name=?]", "task[title]"

      assert_select "textarea#task_description[name=?]", "task[description]"
    end
  end
end
