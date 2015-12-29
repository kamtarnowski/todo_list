User.destroy_all

########################### User ###############################
i = 0
20.times do
  User.create(email: "user#{i}@example.com", username: "Username #{i}", password: 'password', password_confirmation: 'password')
  i += 1
end
User.create(email: "user@example.com", username: "Username", password: 'password', password_confirmation: 'password')
##################################################################
##################################################################
##################################################################
##################################################################
