class Course < BaseDocument 

	## Fields
  field :code, :type => String
	field :title, :type=> String
  field :section, :type=> String

	# Relationships
	belongs_to :semester
	has_many :projects
end