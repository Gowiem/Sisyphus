class Task < BaseDocument
  field :title
  field :description
  field :type, :type => String
end