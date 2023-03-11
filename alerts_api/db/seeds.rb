2.times do |index|
  User.create!({ email: "user#{index}@example.com", password: 'password',
                 password_confirmation: 'password' })
  rescue StandardError => e
    puts e
end
