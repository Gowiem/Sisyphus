class ProjectGroup < BaseDocument
  
  field :name, type: String

  belongs_to :project
  has_and_belongs_to_many :students
  has_many :subtasks

  def histories(exclude_old)
    # TODO: This is ugly as hell. Get somebody to walk through how I can do
    # this better.
    comments = self.subtasks.map(&:comments).map(&:entries).flatten
    histories = self.subtasks.map(&:history_tracks).map(&:entries).flatten

    if exclude_old
      mins_ago = Time.now - 5.minutes
      histories.delete_if { |hist| hist.created_at <= mins_ago }
    end

    histories.delete_if { |hist| hist.description.nil? }
  end
end




