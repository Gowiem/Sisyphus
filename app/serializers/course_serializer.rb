class CourseSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title, :semester, :code, :section

  has_one :teacher, embed_key: :mongo_id
  has_many :projects, embed_key: :mongo_id
end

