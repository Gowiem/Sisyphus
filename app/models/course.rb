class Course < BaseDocument 

	## Fields
	field :semester, :type => String
  field :code, :type => String
	field :title, :type=> String
  field :section, :type=> String

	# Relationships
	belongs_to :teacher
	has_many :projects
end