class ProjectGroupSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :name, :links

  has_one :project, embed_key: :mongo_id
  has_many :students, embed_key: :mongo_id
  has_many :subtasks, embed_key: :mongo_id


  ## http://emberjs.com/api/data/classes/DS.RESTAdapter.html#method_findHasMany
  def links
    return { "historyTrackers" => "/project_groups/#{object.mongo_id}/history_trackers" }
  end
end