class TeacherSerializer < UserSerializer
  attributes :id

  has_many :courses, embed: :id, embed_key: :mongo_id 
end
