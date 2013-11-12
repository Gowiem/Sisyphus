class Comment < BaseDocument
  include Mongoid::Timestamps
  
  field :body, type: String
  field :is_disputed, type: Boolean, default: false

  validates_presence_of :body

  belongs_to :user
  embedded_in :subtask
end