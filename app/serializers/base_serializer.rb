class BaseSerializer < ActiveModel::Serializer
  def id
    object._id.to_s
  end
end