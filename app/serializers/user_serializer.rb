class UserSerializer < BaseSerializer
  attributes :id, :email, :phone, :first_name, :last_name

  attribute :last_sign_in_at, :key => :last_login
  attribute :_type, :key => :type
end