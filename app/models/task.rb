class Task < BaseDocument
  include Mongoid::Audit::Trackable

  ## Need Trackable's to be saved before we generate description so we can find them
  after_save :update_trackable_with_description

  field :title
  field :is_completed, type: Boolean, default: false
  field :due_date, type: Date

  field :type, type: String

  ## Mongoid Audit
  track_history :modifier_field => :modifier,
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