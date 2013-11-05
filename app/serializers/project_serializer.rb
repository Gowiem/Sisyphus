class ProjectSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :title

  has_one :teacher, embed_key: :mongo_id
  has_many :required_tasks, embed_key: :mongo_id
  has_many :students, embed_key: :mongo_id
  has_many :project_groups, embed_key: :mongo_id

  def project_groups
    object.project_groups.select { |group| group.students.include? current_student }
  end

  def students
    object.students.select { |s| s.shares_group_with(current_student) }
  end
end
