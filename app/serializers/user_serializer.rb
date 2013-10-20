class UserSerializer < BaseSerializer
  attributes :id, :email, :first_name, :last_name
  attribute :_type, :key => :type
end