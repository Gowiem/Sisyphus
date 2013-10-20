class ProjectGroup
  include Mongoid::Document

  field :name, type: String

  belongs_to :project
  has_and_belongs_to_many :students
end
