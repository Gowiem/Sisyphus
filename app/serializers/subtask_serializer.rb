class SubtaskSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title, :description

  has_one :project_group, embed_key: :mongo_id
  has_one :parent_task, embed_key: :mongo_id
end