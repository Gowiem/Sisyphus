class TeacherSerializer < UserSerializer
  has_many :courses, embed: :id, embed_key: :mongo_id 
end
