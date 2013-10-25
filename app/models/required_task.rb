class RequiredTask < Task
  
  belongs_to :project
  has_many :subtasks
end