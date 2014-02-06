class TeacherSerializer < UserSerializer
  has_many :semesters, embed: :id, embed_key: :mongo_id 
end
