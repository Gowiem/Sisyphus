class SemesterSerializer < BaseSerializer
  embed :ids, include: true
  
  attributes :id, :season, :year
  has_many :courses, embed: :id, embed_key: :mongo_id
end