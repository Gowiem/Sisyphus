class ProjectSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title

  has_one :teacher, embed_key: :mongo_id
  has_many :students, embed_key: :mongo_id
  has_many :project_groups, embed_key: :mongo_id
end
