class Comment < BaseDocument
  include Mongoid::Timestamps
  include Mongoid::Audit::Trackable

  after_save :update_trackable_with_description
  
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

  private
    def update_trackable_with_description
      history_track = self.history_tracks.last
      history_track.add_description
      history_track.save!
    end
end