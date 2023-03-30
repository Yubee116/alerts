2.times do |index|
  User.create!({ first_name: "User#{index}", last_name: 'Example', username: "User#{index}", email: "user#{index}@example.com", password: 'password',
                 password_confirmation: 'password' })
  rescue StandardError => e
    puts e
end

Alert.create({ alert_type: 'portal_opened', tag: ['version2.3.9', 'production'], description: 'A portal was opened',
               origin: '123.89.00.2' })
Alert.create({ alert_type: 'portal_opened', tag: ['version1.8.9', 'staging'], description: 'A portal was opened',
               origin: '192.168.0.2' })
Alert.create({ alert_type: 'portal_closed', tag: ['version2.0.6', 'development'], description: 'A portal was closed',
               origin: '127.0.0.1' })
Alert.create({ alert_type: 'portal_opened', tag: ['version2.3.9', 'production'], description: 'A portal was opened',
               origin: '123.89.54.2' })
Alert.create({ alert_type: 'portal_closed', tag: ['version1.3.9', 'staging'], description: 'A portal was closed',
               origin: '123.89.13.2' })
