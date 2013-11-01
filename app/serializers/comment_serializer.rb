class CommentSerializer < BaseSerializer
  embed :ids
  attributes :id, :body, :created_at, :updated_at

  has_one :user, embed_key: :mongo_id
  has_one :subtask, embed_key: :mongo_id
end