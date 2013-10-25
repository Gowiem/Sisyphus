class Subtask < Task

  belongs_to :project_group
  # Key the belongs_to required_task relation off of 'parent_task'
  belongs_to :parent_task, class_name: "RequiredTask"
end