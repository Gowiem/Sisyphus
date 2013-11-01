class CommentSerializer < BaseSerializer
  attributes :id, :body, :created_at, :updated_at

  has_one :user, embed_key: :mongo_id, embed: :id
end