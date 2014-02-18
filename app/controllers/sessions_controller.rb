class SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token, if: :json_request?

  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    if signed_out
      render json: {
        'csrf-param' => request_forgery_protection_token,
        'csrf-token' => form_authenticity_token
      }
    else
      render json: { error: "Failed to sign out. Please try again later" }, status: 401
    end
  end

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