class Student < User

  has_and_belongs_to_many :projects
  has_and_belongs_to_many :project_groups
  has_and_belongs_to_many :subtasks

  def shares_group_with(user)
    self.project_groups.any? { |group| group.students.include? user }
  end
end
