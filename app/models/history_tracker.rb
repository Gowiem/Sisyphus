class HistoryTracker < BaseDocument
  include Mongoid::Audit::Tracker

  field :description

  def add_description
    user = User.find(self.modifier_id.to_s)
    subtask = Subtask.find(self.association_chain.first['id'].to_s)

    self.description = "#{user.full_name} #{readable_action} '#{subtask.title}'"
  end


  private 
    def readable_action
      type = self.association_chain.last['name']
      if type == 'Subtask'
        return subtask_readable_action
      elsif type == 'comments'
        return "commented on"
      end
    end

    def subtask_readable_action
      if self.action == 'update'
        if self.modified['is_disputed']
          "disputed"
        elsif self.modified['is_completed']
          "completed"
        elsif self.modified['is_completed'] == false
          "uncompleted"
        else
          "edited"
        end
      else
        "created"
      end
    end
end