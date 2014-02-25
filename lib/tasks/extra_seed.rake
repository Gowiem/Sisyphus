namespace :extra_seed do
  desc "Create scenario 1 data for User Testing"
  task scenario1: :environment do
    puts "Dropping all old data..."
    Rake::Task['db:drop'].invoke
    puts "Seeding database with scenario 1 data..."
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
    @sam = Student.create!(
      email: "sam.doe@gmail.com",
      first_name: "Sam",
      last_name: "Doe",
      phone: "555-555-5555",
      password: "password12",
      password_confirmation: "password12")
    
    @bill = Student.create!(
      email: "bill.banana@gmail.com",
      first_name: "Bill", 
      last_name: "Banana",
      phone: "555-555-5555",
      password: "password12",
      password_confirmation: "password12")
    
    @sarah = Student.create!(
      email: "sarah.apple@gmail.com",
      first_name: "Sarah",
      last_name: "Apple",
      phone: "555-555-5555",
      password: "password12", 
      password_confirmation: "password12")
    
    @janet = Student.create!(
      email: "janet.orange@gmail.com",
      first_name: "Janet",
      last_name: "Orange",
      phone: "555-555-5555",
      password: "password12", 
      password_confirmation: "password12")
    
    ## Project Groups
    ##################
    @team = ProjectGroup.create!( name: "Team Alpha", students: [ @sam, @bill, @sarah, @janet ])
    
    # Courses
    ##########
    course = Course.create!(
      teacher: teach,
      semester: "Spring 2014",
      code: "IM4702",
      title: "Group Project Course",
      section: "32087")
    
    ## Projects
    ##################
    project = Project.create!(
      title: "Research Project", 
      students: [ @sam, @bill, @sarah, @janet ],
      course: course,
      description: "A research project to design and implement a product that everybody will love.",
      project_groups: [ @team ])
    
    ## Tasks
    #########
    
    # Required Tasks
    @req_task1 = RequiredTask.create!(
      title: "Research",
      project: project,
      due_date: Date.new(2014, 4, 21),
      modifier: @bill)
    
    @req_task2 = RequiredTask.create!(
      title: "Prototype",
      project: project,
      due_date: Date.new(2014, 4, 21),
      modifier: @janet)
    
    @req_task3 = RequiredTask.create!(
      title: "Final Product",
      project: project,
      due_date: Date.new(2014, 4, 21),
      modifier: @sarah)
    
    puts "--- Create Super Admin: #{super_admin.email}"
    puts "--- Created Project: #{project.title}"
    puts "--- Project has Project Groups: #{project.project_groups.entries.map(&:name)}"
    puts "--- Project has Required Tasks: #{project.required_tasks.map(&:title)}"
  end

  desc "Create scenario 2 data for User Testing"
  task scenario2: :environment do
    Rake::Task['extra_seed:scenario1'].invoke
    puts "Seeding database with scenario 2 data..."

    subtask1 = Subtask.create!(
      title: "Research current devices in today's markey",
      due_date: 2.days.ago,
      parent_task: @req_task1,
      is_completed: true,
      students: [ @bill ],
      description: "We need information on the devices currently being used by everyone in our target market. Find the top 10 devices and we should be good.",
      project_group: @team,
      modifier: @bill)

    subtask2 = Subtask.create!(
      title: "Research our competition",
      due_date: 10.days.from_now,
      parent_task: @req_task1,
      is_completed: false,
      students: [ @sam ],
      description: "What're they doing that we aren't? How can we learn from them?",
      project_group: @team,
      modifier: @sam)

    subtask3 = Subtask.create!(
      title: "Research our target audience",
      due_date: 2.days.from_now,
      parent_task: @req_task1,
      is_completed: false,
      students: [ @sarah ],
      description: "Who is our target demographic? What do they like? What do they dislike? How can we build a product which will be better suited to them?",
      project_group: @team,
      modifier: @sarah)

    subtask4 = Subtask.create!(
      title: "Create a presentation for the class to show what technology we plan to use",
      due_date: 5.days.from_now,
      parent_task: @req_task3,
      is_completed: false,
      students: [ @janet ],
      description: "What software will we use? Why are we using it?",
      project_group: @team,
      modifier: @janet)

    comment1 = Comment.create!(
      body: "I need help!",
      user: @sarah,
      subtask: subtask3,
      modifier: @sarah)

    comment2 = Comment.create!(
      body: "I should be able to knock this out by tomorrow",
      user: @janet,
      subtask: subtask4,
      modifier: @janet)

    comment3 = Comment.create!(
      body: "Awesome sauce",
      user: @bill,
      subtask: subtask4,
      modifier: @bill)

  end 
end
