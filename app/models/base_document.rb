class BaseDocument
  include Mongoid::Document

  def mongo_id
    self._id.to_s
  end
end