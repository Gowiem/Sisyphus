class Subtask < Task

  ## Need Trackable's to be saved before we generate description so we can find them
  after_save :update_trackable_with_description

  field :is_disputed, type: Boolean, default: false

  belongs_to :project_group
  # Key the belongs_to required_task relation off of 'parent_task'
  belongs_to :parent_task, class_name: "RequiredTask"
  has_and_belongs_to_many :students
  embeds_many :comments

  def shares_group_with(user)
    user.project_groups.any? { |group| self.project_group == group }
  end

  private
    def update_trackable_with_description
      history_track = self.history_tracks.last
      history_track.add_description
      history_track.save!
    end
end