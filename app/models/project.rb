class Project < BaseDocument

  ## Fields
  field :title, :type => String

  # Relationships
  belongs_to :teacher
  has_many :project_groups
  has_and_belongs_to_many :students
end
