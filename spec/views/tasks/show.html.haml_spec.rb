require 'rails_helper'

RSpec.describe "tasks/show", type: :view do
  before(:each) do
    @task = assign(:task, Task.create!(
      :user => nil,
      :completed => 1,
      :status => "Status",
      :title => "Title",
      :description => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Status/)
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/MyText/)
  end
end
