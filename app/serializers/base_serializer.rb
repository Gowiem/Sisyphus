class BaseSerializer < ActiveModel::Serializer
  def id
    "#{object._id}"
  end
end