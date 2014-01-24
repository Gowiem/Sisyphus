# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

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
  email: "teacher@email.com",
  first_name: "Johnny",
  last_name: "Capstone",
  phone: "555-555-5552",
  password: "password12",
  password_confirmation: "password12")

## Students
############
gowie = Student.create!(
  email: "gowie.matt@gmail.com",
  first_name: "Matt",
  last_name: "Gowie",
  phone: "484-680-2290",
  password: "password12",
  password_confirmation: "password12")

craig = Student.create!(
  email: "rjbcc58@gmail.com",
  first_name: "Craig", 
  last_name: "Berry",
  phone: "603-321-7060",
  password: "password12",
  password_confirmation: "password12")

maple = Student.create!(
  email: "kuo.maple@gmail.com",
  first_name: "Maple",
  last_name: "Kuo",
  phone: "626-782-1337",
  password: "password12", 
  password_confirmation: "password12")

john = Student.create!(
  email: "johnhreardoniv@gmail.com",
  first_name: "John",
  last_name: "Reardon",
  phone: "508-215-8000",
  password: "password12", 
  password_confirmation: "password12")

nicole = Student.create!(
  email: "npnussbaum@gmail.com",
  first_name: "Nicole",
  last_name: "Nussbaum",
  phone: "443-538-8184",
  password: "password12",
  password_confirmation: "password12")

sarah = Student.create!(
  email: "sarahlynnpark@gmail.com",
  first_name: "Sarah",
  last_name: "Park",
  phone: "443-983-1141",
  password: "password12",
  password_confirmation: "password12")

mark = Student.create!(
  email: "sivak.mark@gmail.com",
  first_name: "Mark",
  last_name: "Sivak",
  phone: "978-621-3770",
  password: "password12",
  password_confirmation: "password12")


# Random Students, for testing purposes
bob = Student.create!(
  email: "bob@email.com", 
  first_name: "Bob", 
  last_name: "Berry",
  phone: "555-555-5554",
  password: "password12", 
  password_confirmation: "password12")

alex = Student.create!(
  email: "alex@email.com",
  first_name: "Alex",
  last_name: "Kuo",
  phone: "555-555-5555",
  password: "password12", 
  password_confirmation: "password12")

dave = Student.create!(
  email: "dave@email.com",
  first_name: "Dave",
  last_name: "Reardon",
  phone: "555-555-5556",
  password: "password12", 
  password_confirmation: "password12")

laura = Student.create!(
  email: "laura@email.com",
  first_name: "Laura",
  last_name: "Park",
  phone: "555-555-5557",
  password: "password12", 
  password_confirmation: "password12")



## Project Groups
##################
team = ProjectGroup.create!( name: "Capstone Team", students: [ gowie, craig, maple, john, sarah, nicole, mark ]);
projectGroup1 = ProjectGroup.create!( name: "Alpha Team", students: [ dave, laura, bob, alex ]);

# Courses
##########
capstone_course = Course.create!(
  teacher: teach,
  semester: "Spring 2014",
  code: "IM4702",
  title: "Interactive Capstone 2",
  section: "32087")

software_dev_course = Course.create!(
  teacher: teach,
  semester: "Spring 2014",
  code: "CS4500",
  title: "Software Development",
  section: "12345")

mad_course = Course.create!(
  teacher: teach,
  semester: "Spring 2014",
  code: "CS5450",
  title: "Mobile Application Development",
  section: "08542")

fall_course = Course.create!(
  teacher: teach,
  semester: "Fall 2013",
  code: "CS4701",
  title: "Interactive Capstone 1",
  section: "57849")



## Projects
##################
sisyphus = Project.create!(
  title: "Sisyphus Project", 
  students: [ gowie, craig, maple, john, sarah, mark, nicole, bob, alex, dave, laura ],
  course: capstone_course,
  project_groups: [ team, projectGroup1 ]
)

## Tasks
#########

## Required Tasks
req_task1 = RequiredTask.create!(
  title: "User Experience",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21)
)

req_task2 = RequiredTask.create!(
  title: "User Interface",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21)
)

req_task3 = RequiredTask.create!(
  title: "Branding",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21)
)

req_task4 = RequiredTask.create!(
  title: "Development",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21)
)

## Subtasks
############

## No longer need these as we're actually going to use the project. WORD!

# dev_task1 = Subtask.create!(
#   title: "Integrate Google Oauth and Drive SDK",
#   project_group: team,
#   parent_task: req_task1,
#   students: [gowie],
# )
# dev_task2 = Subtask.create!(
#   title: "Develop the Teachers screen",
#   project_group: team,
#   parent_task: req_task1,
#   students: [craig]
# )
# design_task1 = Subtask.create!(
#   title: "Stlye the project screen",
#   project_group: team,
#   parent_task: req_task2,
#   students: [ sarah, maple ]
# )
# design_task2 = Subtask.create!(
#   title: "Style the home screen",
#   project_group: team,
#   parent_task: req_task2,
#   students: [ john ]
# )
# doc_task1 = Subtask.create!(
#   title: "Create the wiki",
#   project_group: team,
#   parent_task: req_task3,
#   students: [ maple, john ]
# )

## Comments
# comment1 = Comment.create!(
#   body: "I'll probably end up finishing this over christman break.",
#   user: gowie,
#   subtask: dev_task1
# )

puts "--- Create Super Admin: #{super_admin.email}"
puts "--- Created Project: #{sisyphus.title}"
puts "--- Project has Course: #{sisyphus.course.title} \n"
puts "--- Project has Students: #{sisyphus.students.entries.map(&:full_name)} \n"
puts "--- Project has Project Groups: #{sisyphus.project_groups.entries.map(&:name)}"
puts "--- Project has Required Tasks: #{sisyphus.required_tasks.map(&:title)}"
puts "--- TheCourses: #{Course.all.length}"
puts "--- Team Subtasks: #{team.subtasks.map(&:title)}"
