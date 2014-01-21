class UserSerializer < BaseSerializer
  attributes :id, :email, :phone, :first_name, :last_name
  attribute :_type, :key => :type
end