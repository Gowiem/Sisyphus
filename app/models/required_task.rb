class RequiredTask < Task
  
  belongs_to :project
  has_many :subtasks

  validates_presence_of :due_date
end