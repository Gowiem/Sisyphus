class ProjectGroup < BaseDocument
  
  field :name, type: String

  belongs_to :project
  has_and_belongs_to_many :students
  has_many :subtasks
end
