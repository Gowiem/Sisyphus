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

bobby = Student.create!(
  email: "bobby@email.com", 
  first_name: "Bobby", 
  last_name: "Berry",
  phone: "555-555-5554",
  password: "password12", 
  password_confirmation: "password12")

lexi = Student.create!(
  email: "lexi@email.com",
  first_name: "Lexi",
  last_name: "Kuo",
  phone: "555-555-5555",
  password: "password12", 
  password_confirmation: "password12")

davey = Student.create!(
  email: "davey@email.com",
  first_name: "Davey",
  last_name: "Reardon",
  phone: "555-555-5556",
  password: "password12", 
  password_confirmation: "password12")

laurie = Student.create!(
  email: "laurie@email.com",
  first_name: "Laurie",
  last_name: "Park",
  phone: "555-555-5557",
  password: "password12", 
  password_confirmation: "password12")

nick = Student.create!(
  email: "nick@email.com", 
  first_name: "Nick", 
  last_name: "Lynch",
  phone: "555-555-5554",
  password: "password12", 
  password_confirmation: "password12")

eric = Student.create!(
  email: "eric@email.com",
  first_name: "Eric",
  last_name: "Carlyle",
  phone: "555-555-5555",
  password: "password12", 
  password_confirmation: "password12")

holly = Student.create!(
  email: "holly@email.com",
  first_name: "Holly",
  last_name: "Doe",
  phone: "555-555-5556",
  password: "password12", 
  password_confirmation: "password12")

jane = Student.create!(
  email: "jane@email.com",
  first_name: "Jane",
  last_name: "Doe",
  phone: "555-555-5557",
  password: "password12", 
  password_confirmation: "password12")

## Project Groups
##################
team = ProjectGroup.create!( name: "Capstone Team", students: [ gowie, craig, maple, john, sarah, nicole, mark ]);
projectGroup1 = ProjectGroup.create!( name: "Alpha Team", students: [ dave, laura, bob, alex ]);
projectGroup2 = ProjectGroup.create!( name: "Beta Team", students: [ davey, laurie, bobby, lexi ]);
projectGroup3 = ProjectGroup.create!( name: "Epsilon Team", students: [ eric, holly, jane, nick]);

projectGroup4 = ProjectGroup.create!( name: "Zeta Team", students: [ gowie, craig, maple, john, sarah, nicole, mark ]);
projectGroup5 = ProjectGroup.create!( name: "Eta Team", students: [ dave, laura, bob, alex ]);
projectGroup6 = ProjectGroup.create!( name: "Theta Team", students: [ davey, laurie, bobby, lexi ]);
projectGroup7 = ProjectGroup.create!( name: "Lambda Team", students: [ eric, holly, jane, nick]);

projectGroup8 = ProjectGroup.create!( name: "Zeta Team", students: [ gowie, craig, maple, john, sarah, nicole, mark ]);
projectGroup9 = ProjectGroup.create!( name: "Eta Team", students: [ dave, laura, bob, alex ]);
projectGroup10 = ProjectGroup.create!( name: "Theta Team", students: [ davey, laurie, bobby, lexi ]);
projectGroup11 = ProjectGroup.create!( name: "Lambda Team", students: [ eric, holly, jane, nick]);

projectGroup12 = ProjectGroup.create!( name: "Mu Team", students: [ gowie, craig, maple, john, sarah, nicole, mark ]);
projectGroup13 = ProjectGroup.create!( name: "A Team", students: [ dave, laura, bob, alex ]);
projectGroup14 = ProjectGroup.create!( name: "B Team", students: [ davey, laurie, bobby, lexi ]);
projectGroup15 = ProjectGroup.create!( name: "F Team", students: [ eric, holly, jane, nick]);

projectGroup16 = ProjectGroup.create!( name: "Mu Team", students: [ gowie, craig, maple, john, sarah, nicole, mark ]);
projectGroup17 = ProjectGroup.create!( name: "A Team", students: [ dave, laura, bob, alex ]);
projectGroup18 = ProjectGroup.create!( name: "B Team", students: [ davey, laurie, bobby, lexi ]);
projectGroup19 = ProjectGroup.create!( name: "F Team", students: [ eric, holly, jane, nick]);

## Semesters
##################

s14_semester = Semester.create!(
  season: "Spring",
  year: "2014",
  teacher: teach)

f13_semester = Semester.create!(
  season: "Fall",
  year: "2013",
  teacher: teach)

# Courses
##########
capstone_course = Course.create!(
  semester: f13_semester,
  code: "IM4702",
  title: "Interactive Capstone 2",
  section: "32087")

software_dev_course = Course.create!(
  semester: s14_semester,
  code: "CS4500",
  title: "Software Development",
  section: "12345")

mad_course = Course.create!(
  semester: s14_semester,
  code: "CS5450",
  title: "Mobile Application Development",
  section: "08542")

## Projects
##################
sisyphus = Project.create!(
  title: "Sisyphus Project", 
  students: [ gowie, craig, maple, john, sarah, mark, nicole, bob, alex, dave, laura, davey, laurie, lexi, bobby, eric, holly, jane, nick ],
  course: capstone_course,
  description: "Senior Interactive Media Capstone course. Fall 2013 - Spring 2014. Taught by Mark Sivak.",
  project_groups: [ team, projectGroup1, projectGroup2, projectGroup3]
)

project1 = Project.create!(
  title: "Research Project", 
  students: [ gowie, craig, maple, john, sarah, mark, nicole, bob, alex, dave, laura, davey, laurie, lexi, bobby, eric, holly, jane, nick  ],
  course: capstone_course,
  project_groups: [  projectGroup4, projectGroup5, projectGroup6, projectGroup7 ]
)

project2 = Project.create!(
  title: "Luzhanqi AI", 
  students: [ gowie, craig, maple, john, sarah, mark, nicole, bob, alex, dave, laura, davey, laurie, lexi, bobby, eric, holly, jane, nick  ],
  course: software_dev_course,
  project_groups: [ projectGroup8, projectGroup9,  projectGroup10, projectGroup11]
)

project3 = Project.create!(
  title: "Specification Memo", 
  students: [ gowie, craig, maple, john, sarah, mark, nicole, bob, alex, dave, laura, davey, laurie, lexi, bobby, eric, holly, jane, nick  ],
  course: software_dev_course,
  project_groups: [ projectGroup12, projectGroup13, projectGroup14, projectGroup15 ]
)

project4 = Project.create!(
  title: "App Pitch", 
  students: [ gowie, craig, maple, john, sarah, mark, nicole, bob, alex, dave, laura, davey, laurie, lexi, bobby, eric, holly, jane, nick ],
  course: mad_course,
  project_groups: [ projectGroup16, projectGroup19, projectGroup17, projectGroup18 ]
)

## Tasks
#########

# Required Tasks
req_task1 = RequiredTask.create!(
  title: "User Experience",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21),
  modifier: gowie)

req_task2 = RequiredTask.create!(
  title: "User Interface",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21),
  modifier: gowie)

req_task3 = RequiredTask.create!(
  title: "Branding",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21),
  modifier: gowie)

req_task3 = RequiredTask.create!(
  title: "Development",
  project: sisyphus,
  due_date: Date.new(2014, 4, 21),
  modifier: gowie)

puts "--- Create Super Admin: #{super_admin.email}"
puts "--- Created Project: #{sisyphus.title}"
puts "--- Project has Course: #{sisyphus.course.title} \n"
puts "--- Project has Students: #{sisyphus.students.entries.map(&:full_name)} \n"
puts "--- Project has Project Groups: #{sisyphus.project_groups.entries.map(&:name)}"
puts "--- Project has Required Tasks: #{sisyphus.required_tasks.map(&:title)}"
puts "--- TheCourses: #{Course.all.length}"
puts "--- Team Subtasks: #{team.subtasks.map(&:title)}"
