Category.destroy_all
Task.destroy_all
User.destroy_all

########################### User ###############################
i = 0
20.times do
  User.create(email: "user#{i}@example.com", username: "Username #{i}", password: 'password', password_confirmation: 'password')
  i += 1
end
User.create(email: "user@example.com", username: "Username", password: 'password', password_confirmation: 'password')

########################### Tasks #################################
User.all.each do |u|
  task = Task.create(completed: rand(0..99), status: 0, title: FFaker::Lorem.word, description: FFaker::Lorem.sentence, user_id: u.id)
end
20.times do
  Task.create(completed: 100, status: 1, title: FFaker::Lorem.word, description: FFaker::Lorem.sentence)
end

########################### Categories #################################
10.times do
  Category.create(name: FFaker::Lorem.word)
end

##################################################################
##################################################################
