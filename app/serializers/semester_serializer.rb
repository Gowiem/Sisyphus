class SemesterSerializer < BaseSerializer
  has_many :courses, embed: :id, embed_key: :mongo_id
end