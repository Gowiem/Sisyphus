class StudentSerializer < UserSerializer

  has_many :projects, embed: :id, embed_key: :mongo_id
  has_many :project_groups, embed: :id, embed_key: :mongo_id
  has_many :subtasks, embed: :id, embed_key: :mongo_id
end
