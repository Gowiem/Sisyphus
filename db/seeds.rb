# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "--- CREATING SEED DATA ---"

teach = Teacher.create!(:email => "mark@email.com", :password => "password12", :password_confirmation => "password12")

gowie = Student.create!(:email => "gowie@email.com", :password => "password12", :password_confirmation => "password12")
craig = Student.create!(:email => "craig@email.com", :password => "password12", :password_confirmation => "password12")
maple = Student.create!(:email => "maple@email.com", :password => "password12", :password_confirmation => "password12")
john = Student.create!(:email => "john@email.com", :password => "password12", :password_confirmation => "password12")
sarah = Student.create!(:email => "sarah@email.com", :password => "password12", :password_confirmation => "password12")

devs = ProjectGroup.create!( name: "Developers", students: [ gowie, craig ])
design = ProjectGroup.create!( name: "Designers", students: [ maple, john, sarah ])

sisyphus = Project.create!(
  title: "Sisyphus Project", 
  students: [ gowie, craig, maple, john, sarah ],
  teacher: teach,
  project_groups: [ design, devs ]
)

puts "--- Created Project: #{sisyphus.title}"
puts "--- Project has teacher: #{sisyphus.teacher} \n"
puts "--- Project has associated students: #{sisyphus.students.entries} \n"
puts "--- Project has Project Groups: #{sisyphus.project_groups.entries}"
