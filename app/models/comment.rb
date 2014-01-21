class Comment < BaseDocument
  include Mongoid::Timestamps
  include Mongoid::Audit::Trackable
  
  field :body, type: String
  field :is_disputed, type: Boolean, default: false

  validates_presence_of :body

  belongs_to :user
  embedded_in :subtask

  ## Mongoid Audit
  track_history :scope          => :subtask,
                :modifier_field => :modifier,
                :version_field  => :version,
                :track_create   =>  true,
                :track_update   =>  true,
                :track_destroy  =>  true
end