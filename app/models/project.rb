class Project < BaseDocument

  ## Fields
  field :title, :type => String
  field :description, :type => String

  # Relationships
  belongs_to :course
  has_many :project_groups
  has_and_belongs_to_many :students
  has_many :required_tasks

  def filter_groups(user)
    self.project_groups = self.project_groups.select { |group| group.students.include? user }
  end
  
end
