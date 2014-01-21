class ProjectGroup < BaseDocument
  
  field :name, type: String

  belongs_to :project
  has_and_belongs_to_many :students
  has_many :subtasks

  def histories
    result = []

    result.concat(self.subtasks.map(&:history_tracks))

    comments = self.subtasks.map(&:comments).map(&:entries).flatten
    result.concat(comments.map(&:history_tracks))

    return result.flatten
  end
end




