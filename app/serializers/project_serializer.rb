class ProjectSerializer < BaseSerializer
  attributes :id, :title

  # has_many :users, embed: :objects
end
