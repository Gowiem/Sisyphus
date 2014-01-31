class HistoryTracker
  include Mongoid::Audit::Tracker

  field :description

  def add_description
    user = User.find(self.modifier_id.to_s)

    # Grab the last item in the association_chain, which should be the item
    # that was updated
    subject_meta = self.association_chain.last

    action = self.action == 'create' ? 'added a new' : 'updated a'
    self.description = "#{user.full_name} #{action} #{subject_meta['name']}"
  end
end