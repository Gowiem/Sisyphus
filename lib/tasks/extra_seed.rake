namespace :extra_seed do

  desc "Scout Team"
  task scout_team: :environment do
    teacher = Teacher.where(
      email: "lauraivanka@gmail.com",
      first_name: "Laura",
      last_name: "Ivanka",
      phone: "Change Me",
      password: "password12",
      password_confirmation: "password12").first_or_create

    lexi = Student.create!(
      email: "lexi1@email.com",
      first_name: "Lexi",
      last_name: "Kuo",
      phone: "555-555-5555",
      password: "password12", 
      password_confirmation: "password12")

    davey = Student.create!(
      email: "davey1@email.com",
      first_name: "Davey",
      last_name: "Reardon",
      phone: "555-555-5556",
      password: "password12", 
      password_confirmation: "password12")

    laurie = Student.create!(
      email: "laurie1@email.com",
      first_name: "Laurie",
      last_name: "Park",
      phone: "555-555-5557",
      password: "password12", 
      password_confirmation: "password12")

    nick = Student.create!(
      email: "nick1@email.com", 
      first_name: "Nick", 
      last_name: "Lynch",
      phone: "555-555-5554",
      password: "password12", 
      password_confirmation: "password12")

    projectGroup = ProjectGroup.create!( name: "Mock Team", students: [ nick, laurie, davey, lexi ]);

    s14_semester = Semester.create!(
      season: "Spring",
      year: "2014",
      teacher: teacher)

    lauras_course = Course.create!(
      semester: s14_semester,
      code: "ST1000",
      title: "Scout Team",
      section: "1")

    project = Project.create!(
      title: "Scout",
      students: [ nick, laurie, davey, lexi ],
      course: lauras_course,
      description: "Mock project for the Scout team to checkout.",
      project_groups: [ projectGroup ])

    req_task1 = RequiredTask.create!(
      title: "Research",
      project: project,
      due_date: Date.new(2014, 4, 21),
      modifier: nick)
    
    req_task2 = RequiredTask.create!(
      title: "Prototype",
      project: project,
      due_date: Date.new(2014, 4, 21),
      modifier: nick)

  end

  desc "Marks Engineering class"
  task marks_clazz: :environment do
    Student.where({ email: "sivak.mark@gmail.com" }).delete

    ## Teacher
    teach = Teacher.create!(
        email: "sivak.mark@gmail.com",
        first_name: "Mark",
        last_name: "Sivak",
        phone: "978-621-3770",
        password: "password123",
        password_confirmation: "password123")

    # Courses
    ##########
    marks_course = Course.create!(
      teacher: teach,
      semester: "Spring 2014",
      code: "GE1110",
      title: "Engineering Design",
      section: "1")

    ## Teams
    ##########

    ## Team A
    # Khaled Alroumi
    # Peter Battinelli
    # Turky Almadhi
    # Alexander Caraballo

    s1 = Student.create!(
      email: "alroumi.k@husky.neu.edu",
      first_name: "Khaled",
      last_name: "Alroumi",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s2 = Student.create!(
      email: "battinelli.p@husky.neu.edu",
      first_name: "Peter",
      last_name: "Battinelli",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s3 = Student.create!(
      email: "almadhi.t@husky.neu.edu",
      first_name: "Turky",
      last_name: "Almadhi",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s4 = Student.create!(
      email: "caraballo.a@husky.neu.edu",
      first_name: "Alexander",
      last_name: "Caraballo",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    team_a = ProjectGroup.create!( name: "Team α",
                                   students: [ s1, s2, s3, s4 ])

    ## Team β
    # Matthew Alto
    # Elizabeth Aguerrevere
    # Luke Fisher
    # Juan Azar Camara
    # Daniel Blohm

    s5 = Student.create!(
      email: "alto.m@husky.neu.edu",
      first_name: "Matthew",
      last_name: "Alto",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s6 = Student.create!(
      email: "aguerrevere.e@husky.neu.edu",
      first_name: "Elizabeth",
      last_name: "Aguerrevere",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")
    
    s7 = Student.create!(
      email: "fisher.lu@husky.neu.edu",
      first_name: "Luke",
      last_name: "Fisher",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s8 = Student.create!(
      email: "azarcamara.j@husky.neu.edu",
      first_name: "Juan",
      last_name: "Azar Camara",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s9 = Student.create!(
      email: "blohm.d@husky.neu.edu",
      first_name: "Daniel",
      last_name: "Blohm",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    team_b = ProjectGroup.create!( name: "Team β",
                                   students: [ s5, s6, s7, s8, s9 ])

    ## Team γ
    # Austin Deangelis
    # Caroline Angele
    # Paige Hendersen
    # Andreas Aghamianz

    s10 = Student.create!(
      email: "deangelis.a@husky.neu.edu",
      first_name: "Austin",
      last_name: "Deangelis",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s11 = Student.create!(
      email: "angele.c@husky.neu.edu",
      first_name: "Caroline",
      last_name: "Angele",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s12 = Student.create!(
      email: "hendersen.p@husky.neu.edu",
      first_name: "Paige",
      last_name: "Hendersen",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s13 = Student.create!(
      email: "aghamianz.a@husky.neu.edu",
      first_name: "Andreas",
      last_name: "Aghamianz",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    team_c = ProjectGroup.create!( name: "Team γ",
                                   students: [ s10, s11, s12, s13 ])

    # Team δ
    # Alexander Crisara
    # Nicholas Fanning
    # Maxwell Garnick
    # Christopher Kerr

    s14 = Student.create!(
      email: "crisara.a@husky.neu.edu",
      first_name: "Alexander",
      last_name: "Crisara",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s15 = Student.create!(
      email: "fanning.n@husky.neu.edu",
      first_name: "Nicholas",
      last_name: "Fanning",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s16 = Student.create!(
      email: "garnick.m@husky.neu.edu",
      first_name: "Maxwell",
      last_name: "Garnick",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s17 = Student.create!(
      email: "kerr.chr@husky.neu.edu",
      first_name: "Christopher",
      last_name: "Kerr",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    team_d = ProjectGroup.create!( name: "Team β",
                                   students: [ s14, s15, s16, s17 ])

    # Team θ
    # Agamemnon Despopoulos
    # Kevin Reilly
    # Benjamin Fox
    # Parth Patel

    s18 = Student.create!(
      email: "despopoulos.a@husky.neu.edu",
      first_name: "Agamemnon",
      last_name: "Despopoulos",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s19 = Student.create!(
      email: "reilly.kevi@husky.neu.edu",
      first_name: "Kevin",
      last_name: "Reilly",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s20 = Student.create!(
      email: "fox.be@husky.neu.edu",
      first_name: "Benjamin",
      last_name: "Fox",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s21 = Student.create!(
      email: "patel.part@husky.neu.edu",
      first_name: "Parth",
      last_name: "Patel",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    team_e = ProjectGroup.create!( name: "Team θ",
                                   students: [ s18, s19, s20, s21 ])

    # Team π
    # Matthew Guerin
    # Michael Hassett
    # Adam Byberg
    # Taylor Clark

    s22 = Student.create!(
      email: "guerin.mat@husky.neu.edu",
      first_name: "Matthew",
      last_name: "Guerin",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s23 = Student.create!(
      email: "hassett.mi@husky.neu.edu",
      first_name: "Michael",
      last_name: "Hassett",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s24 = Student.create!(
      email: "byberg.a@husky.neu.edu",
      first_name: "Adam",
      last_name: "Byberg",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s25 = Student.create!(
      email: "clark.t@husky.neu.edu",
      first_name: "Taylor",
      last_name: "Clark",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    team_f = ProjectGroup.create!( name: "Team π",
                                   students: [ s22, s23, s24, s25 ])

    # Team λ
    # Ryan Brady
    # Joshua Eichel
    # Tianming Yang
    # Luke Thompson

    s26 = Student.create!(
      email: "brady.r@husky.neu.edu",
      first_name: "Ryan",
      last_name: "Brady",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s27 = Student.create!(
      email: "eichel.j@husky.neu.edu",
      first_name: "Joshua",
      last_name: "Eichel",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s28 = Student.create!(
      email: "yang.tia@husky.neu.edu",
      first_name: "Tianming",
      last_name: "Yang",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    s29 = Student.create!(
      email: "thompson.lu@husky.neu.edu",
      first_name: "Luke",
      last_name: "Thompson",
      password: "password12",
      phone: "555-555-5555",
      password_confirmation: "password12")

    team_g = ProjectGroup.create!( name: "Team π",
                               students: [ s26, s27, s28, s29 ])

    mdp_project = Project.create!(
      title: "Major Design Project",
      students: [  s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29 ],
      course: marks_course,
      description: "Presents the engineering design process using case studies for a variety of engineering disciplines. Develops problem-solving skills used in engineering design. Introduces students to the use of spreadsheet tools to solve engineering problems including data reduction, and visualization of data and functions. Design topics include problem formulation and specification, creativity, evaluation tools, patents, ergonomics, system design, manufacturing, ethics in engineering, and presentation techniques. Presents engineering graphics focusing on developing three-dimensional visualization skills and computer-aided design (CAD) application. Students develop an original design solution to a technical problem as a term project.",
      project_groups: [ team_a, team_b, team_c, team_d, team_e, team_f, team_g ])

    req_task1 = RequiredTask.create!(
      title: "Project Proposal",
      project: mdp_project,
      due_date: Date.new(2014, 3, 28),
      modifier: teach)

    req_task2 = RequiredTask.create!(
      title: "Background and Patent Search",
      project: mdp_project,
      due_date: Date.new(2014, 4, 1),
      modifier: teach)

    req_task3 = RequiredTask.create!(
      title: "Problem Formulation and Goals",
      project: mdp_project,
      due_date: Date.new(2014, 4, 4),
      modifier: teach)

    req_task4 = RequiredTask.create!(
      title: "Possible Designs and Design Analysis",
      project: mdp_project,
      due_date: Date.new(2014, 4, 11),
      modifier: teach)

    req_task5 = RequiredTask.create!(
      title: "Presentation",
      project: mdp_project,
      due_date: Date.new(2014, 4, 15),
      modifier: teach)

    req_task6 = RequiredTask.create!(
      title: "Implementation and Conclusions",
      project: mdp_project,
      due_date: Date.new(2014, 4, 18),
      modifier: teach)
  end

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
    @course = Course.create!(
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
      course: @course,
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

  desc "Seed database with origin seed data from db/seed.rb"
  task sisyphus: :environment do
    Rake::Task['extra_seed:scenario2'].invoke
    puts "Seeding database with Sisyphus project data..."

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

    team = ProjectGroup.create!( name: "Capstone Team", students: [ gowie, craig, maple, john, sarah, nicole, mark ])

    sisyphus = Project.create!(
      title: "Sisyphus Project", 
      students: [ gowie, craig, maple, john, sarah, mark, nicole ],
      course: @course,
      description: "Senior Interactive Media Capstone course. Fall 2013 - Spring 2014. Taught by Mark Sivak.",
      project_groups: [ team ])

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
  end
end
