class ProjectGroup < BaseDocument
  
  field :name, type: String

  belongs_to :project
  has_and_belongs_to_many :students
  has_many :subtasks

  def histories
    # TODO: Without loading the comments below the history_tracks.entires is empty..
    # I'm not sure what the deal with this is and I'd really like to figure it out
    # soon.
    comments = self.subtasks.map(&:comments).map(&:entries).flatten
    histories = self.subtasks.map(&:history_tracks).map(&:entries).flatten

    histories.delete_if { |hist| hist.description == nil }
  end
end




