class UserSerializer < BaseSerializer
  attributes :id, :email, :first_name, :last_name, :phone
  attribute :_type, :key => :type
end