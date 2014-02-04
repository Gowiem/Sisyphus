class Task < BaseDocument
  include Mongoid::Audit::Trackable

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
end