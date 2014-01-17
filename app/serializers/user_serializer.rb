class UserSerializer < BaseSerializer
  attributes :id, :email, :phone
  attribute :first_name, :key => :firstName
  attribute :last_name, :key => :lastName
  attribute :_type, :key => :type
end