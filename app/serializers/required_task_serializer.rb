class RequiredTaskSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title

  has_one :project, embed_key: :mongo_id
  has_many :subtasks, embed_key: :mongo_id
end