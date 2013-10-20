class UserSerializer < BaseSerializer
  attributes :id
  attribute :_type, :key => :type
end