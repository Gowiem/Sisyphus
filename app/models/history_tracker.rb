class HistoryTracker
  include Mongoid::Audit::Tracker

  field :description

  validates_presence_of :modifier_id

  def add_description
    user = User.find(self.modifier_id.to_s)

    # Grab the last item in the association_chain, which should be the item
    # that was updated
    subject_meta = self.association_chain.last

    # Get the model that was modified by using the class name to find by id
    subject = Kernel.const_get(subject_meta["name"]).find(subject_meta["id"])

    action = self.action == 'create' ? 'added a new' : 'updated a'
    self.description = "#{user.full_name} #{action} #{subject_meta['name']}"
  end
end