class ProjectGroupSerializer < BaseSerializer
  embed :id, include: true
  attributes :id, :name

  has_many :students, embed_key: "mongo_id", serializer: StudentShortSerializer
end