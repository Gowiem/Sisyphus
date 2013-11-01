class Comment < BaseDocument
  include Mongoid::Timestamps
  
  field :body, type: String

  validates_presence_of :body

  belongs_to :user
  embedded_in :subtask
end