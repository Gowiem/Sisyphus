class Semester < BaseDocument

  ## Currently we define semester as a:
  ## 1. Season (Fall or Spring)
  ## 2. Year (YYYY)
  ##    ex. Fall 2009, Spring 2011, Spring 2014

  ##Fields
  field :season, :type => String
  field :year, :type => String

  ## Relationships
  belongs_to :teacher
  has_many :courses

end