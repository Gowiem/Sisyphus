class Subtask < Task
  field :is_disputed, type: Boolean, default: false

  belongs_to :project_group
  # Key the belongs_to required_task relation off of 'parent_task'
  belongs_to :parent_task, class_name: "RequiredTask"
  has_and_belongs_to_many :students
  embeds_many :comments

  def shares_group_with(user)
    user.project_groups.any? { |group| self.project_group == group }
  end
end