class UserSerializer < BaseSerializer
  attributes :id, :email, :first_name, :last_name
  attribute :_type, :key => :type
  def attributes
    hash = super
    hash[:current_user] = true if current_student == object
    hash
  end
end