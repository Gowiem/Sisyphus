class SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token, if: :json_request?

  # Found this gem through SO: http://stackoverflow.com/questions/5690406/rails-using-devise-with-single-table-inheritance
  def create
    ret = super
    sign_in(resource.type.underscore, resource.type.constantize.send(:find, resource.id)) unless resource.type.nil?
    ret
  end

  private 

  def json_request?
    request.format.json?
  end
end