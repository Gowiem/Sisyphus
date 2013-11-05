class RequiredTaskSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title, :due_date, :is_completed

  has_one :project, embed_key: :mongo_id
  has_many :subtasks, embed_key: :mongo_id

  def subtasks
    object.subtasks.select { |st| st.shares_group_with(current_student) }
  end
end