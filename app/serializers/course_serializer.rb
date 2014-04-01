class CourseSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title, :code, :section

  has_one :semester, embed_key: :mongo_id
  has_many :projects, embed_key: :mongo_id
end

