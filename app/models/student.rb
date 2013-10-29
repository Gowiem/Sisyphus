class Student < User

  has_and_belongs_to_many :projects
  has_and_belongs_to_many :project_groups
  has_and_belongs_to_many :subtasks
end
