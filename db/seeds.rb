# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "--- CREATING SEED DATA ---"

teach = Teacher.create!(:email => "teach@email.com", :password => "testing12", :password_confirmation => "testing12")

gowie = Student.create!(:email => "gowie@email.com", :password => "testing12", :password_confirmation => "testing12")
craig = Student.create!(:email => "craig@email.com", :password => "testing12", :password_confirmation => "testing12")
maple = Student.create!(:email => "maple@email.com", :password => "testing12", :password_confirmation => "testing12")
john = Student.create!(:email => "john@email.com", :password => "testing12", :password_confirmation => "testing12")
sarah = Student.create!(:email => "sarah@email.com", :password => "testing12", :password_confirmation => "testing12")
mark = Student.create!(:email => "mark@email.com", :password => "testing12", :password_confirmation => "testing12")

sisyphus = Project.create!(
  :title => "Sisyphus Project", 
  :users => [ teach, gowie, craig, maple, john, sarah, mark ]
)

puts "--- Created Projects: #{sisyphus.title}"
puts "--- Project has associated Users: #{sisyphus.users.entries.to_yaml}"
