require 'rails_helper'

RSpec.describe "tasks/index", type: :view do
  before(:each) do
    assign(:tasks, [
      Task.create!(
        :user => nil,
        :completed => 1,
        :status => "Status",
        :title => "Title",
        :description => "MyText"
      ),
      Task.create!(
        :user => nil,
        :completed => 1,
        :status => "Status",
        :title => "Title",
        :description => "MyText"
      )
    ])
  end

  it "renders a list of tasks" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Status".to_s, :count => 2
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
