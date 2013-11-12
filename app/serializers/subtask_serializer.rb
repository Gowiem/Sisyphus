class SubtaskSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title, :due_date, :is_completed, :is_disputed 

  has_one :project_group, embed_key: :mongo_id
  has_one :parent_task, embed_key: :mongo_id, root: :required_tasks
  has_many :students, embed_key: :mongo_id
  has_many :comments, embed_key: :mongo_id
end