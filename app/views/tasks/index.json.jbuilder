json.array!(@tasks) do |task|
  json.extract! task, :id, :user_id, :completed, :status, :title, :description
  json.url task_url(task, format: :json)
end
