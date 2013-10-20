class TeacherSerializer < UserSerializer
  attributes :id

  has_many :projects, embed: :id, embed_key: :mongo_id 
end
