class HistoryTrackerSerializer < BaseSerializer
  attributes :id, :action, :created_at, :modifier_id, :subject_type, :subject_id

  def subject_id
    return object.association_chain.last['id'].to_s
  end

  def subject_type
    return object.association_chain.last['name']
  end

  def modifier_id
    return object.modifier_id.to_s
  end
end