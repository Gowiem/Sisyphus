class ProjectSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title

  has_one :course, embed_key: :mongo_id
  has_many :required_tasks, embed_key: :mongo_id
  has_many :students, embed_key: :mongo_id
  has_many :project_groups, embed_key: :mongo_id

  def project_groups
    if current_user.teacher?
      object.project_groups
    else
      object.project_groups.select { |group| group.students.include? current_user }
    end
  end

  def students
    if current_user.teacher?
      object.students
    else
      object.students.select { |s| s.shares_group_with(current_user) }
    end
  end
end
