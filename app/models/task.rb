class Task < BaseDocument
  field :title
  field :is_completed, type: Boolean, default: false
  field :due_date, type: Date

  field :type, type: String
end