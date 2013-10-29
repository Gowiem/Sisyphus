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
  password: "password12", 
  password_confirmation: "password12")

## Teacher
teach = Teacher.create!(
  email: "mark@email.com",
  first_name: "Mark",
  last_name: "Sivak",
  password: "password12", 
  password_confirmation: "password12")

## Students
gowie = Student.create!(
  email: "gowie@email.com",
  first_name: "Matt",
  last_name: "Gowie",
  password: "password12",
  password_confirmation: "password12")

craig = Student.create!(
  email: "craig@email.com", 
  first_name: "Craig", 
  last_name: "Berry",
  password: "password12", 
  password_confirmation: "password12")

maple = Student.create!(
  email: "maple@email.com",
  first_name: "Maple",
  last_name: "Kuo",
  password: "password12", 
  password_confirmation: "password12")

john = Student.create!(
  email: "john@email.com",
  first_name: "John",
  last_name: "Reardon",
  password: "password12", 
  password_confirmation: "password12")

sarah = Student.create!(
  email: "sarah@email.com",
  first_name: "Sarah",
  last_name: "Park",
  password: "password12", 
  password_confirmation: "password12")

## Project Groups
##################
devs = ProjectGroup.create!( name: "Developers", students: [ gowie, craig ])
design = ProjectGroup.create!( name: "Designers", students: [ maple, john, sarah ])

## Project
sisyphus = Project.create!(
  title: "Sisyphus Project", 
  students: [ gowie, craig, maple, john, sarah ],
  teacher: teach,
  project_groups: [ design, devs ]
)

## Tasks
#########

## Required Tasks
dev_req_task1 = RequiredTask.create!(
  title: "Learn Ember.js",
  project: sisyphus
)

dev_req_task2 = RequiredTask.create!(
  title: "Write some Unit Tests",
  project: sisyphus
)

design_req_task1 = RequiredTask.create!(
  title: "Design all the things!",
  project: sisyphus
)

## Subtasks
dev_task1 = Subtask.create!(
  title: "Run through the Ember tutorial",
  project_group: devs,
  parent_task: dev_req_task1
)

dev_task2 = Subtask.create!(
  title: "Write Unit Tests for the frontend",
  project_group: devs,
  parent_task: dev_req_task2
)

design_task1 = Subtask.create!(
  title: "Design the tasks screen",
  project_group: design,
  parent_task: design_req_task1
)

puts "--- Create Super Admin: #{super_admin.email}"
puts "--- Created Project: #{sisyphus.title}"
puts "--- Project has Teacher: #{sisyphus.teacher.full_name} \n"
puts "--- Project has Students: #{sisyphus.students.entries.map(&:full_name)} \n"
puts "--- Project has Project Groups: #{sisyphus.project_groups.entries.map(&:name)}"
puts "--- Project has Required Tasks: #{sisyphus.required_tasks.map(&:title)}"
puts "--- Dev Subtasks: #{devs.subtasks.map(&:title)}"
puts "--- Design Subtasks: #{design.subtasks.map(&:title)}"
