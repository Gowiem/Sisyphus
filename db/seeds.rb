# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "--- CREATING SEED DATA ---"

## Users
#########

## Super Admin
super_admin = SuperAdmin.create!(
  email: "superadmin@email.com",
  first_name: "Super",
  last_name: "Admin",
  phone: "555-555-5551",
  password: "password12", 
  password_confirmation: "password12")

## Teacher
teach = Teacher.create!(
  email: "mark@email.com",
  first_name: "Mark",
  last_name: "Sivak",
  phone: "555-555-5552",
  password: "password12", 
  password_confirmation: "password12")

## Students
gowie = Student.create!(
  email: "gowie@email.com",
  first_name: "Matt",
  last_name: "Gowie",
  phone: "555-555-5553",
  password: "password12",
  password_confirmation: "password12")

craig = Student.create!(
  email: "craig@email.com", 
  first_name: "Craig", 
  last_name: "Berry",
  phone: "555-555-5554",
  password: "password12", 
  password_confirmation: "password12")

maple = Student.create!(
  email: "maple@email.com",
  first_name: "Maple",
  last_name: "Kuo",
  phone: "555-555-5555",
  password: "password12", 
  password_confirmation: "password12")

john = Student.create!(
  email: "john@email.com",
  first_name: "John",
  last_name: "Reardon",
  phone: "555-555-5556",
  password: "password12", 
  password_confirmation: "password12")

sarah = Student.create!(
  email: "sarah@email.com",
  first_name: "Sarah",
  last_name: "Park",
  phone: "555-555-5557",
  password: "password12", 
  password_confirmation: "password12")

## Project Groups
##################
team = ProjectGroup.create!( name: "Capstone Team", students: [ gowie, craig, maple, john, sarah ]);

## Project
sisyphus = Project.create!(
  title: "Sisyphus Project", 
  students: [ gowie, craig, maple, john, sarah ],
  teacher: teach,
  project_groups: [ team ]
)

## Tasks
#########

## Required Tasks
req_task1 = RequiredTask.create!(
  title: "Develope the web app",
  project: sisyphus,
  due_date: Time.now + 10.days
)

req_task2 = RequiredTask.create!(
  title: "Design the web app",
  project: sisyphus,
  due_date: Time.now + 20.days
)

req_task3 = RequiredTask.create!(
  title: "Write documentation",
  project: sisyphus,
  due_date: Time.now + 15.days
)

## Subtasks
dev_task1 = Subtask.create!(
  title: "Integrate Google Oauth and Drive SDK",
  project_group: team,
  parent_task: req_task1,
  students: [gowie],
)

dev_task2 = Subtask.create!(
  title: "Develop the Teachers screen",
  project_group: team,
  parent_task: req_task1,
  students: [craig]
)

design_task1 = Subtask.create!(
  title: "Stlye the project screen",
  project_group: team,
  parent_task: req_task2,
  students: [ sarah, maple ]
)

design_task2 = Subtask.create!(
  title: "Style the home screen",
  project_group: team,
  parent_task: req_task2,
  students: [ john ]
)

doc_task1 = Subtask.create!(
  title: "Create the wiki",
  project_group: team,
  parent_task: req_task3,
  students: [ maple, john ]
)

## Comments
comment1 = Comment.create!(
  body: "I'll probably end up finishing this over christman break.",
  user: gowie,
  subtask: dev_task1
)

puts "--- Create Super Admin: #{super_admin.email}"
puts "--- Created Project: #{sisyphus.title}"
puts "--- Project has Teacher: #{sisyphus.teacher.full_name} \n"
puts "--- Project has Students: #{sisyphus.students.entries.map(&:full_name)} \n"
puts "--- Project has Project Groups: #{sisyphus.project_groups.entries.map(&:name)}"
puts "--- Project has Required Tasks: #{sisyphus.required_tasks.map(&:title)}"
puts "--- Team Subtasks: #{team.subtasks.map(&:title)}"
