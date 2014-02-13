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

  # I wasn't able to use the typical approach others had used for this by using super and what not.
  # Check that out here: http://stackoverflow.com/questions/5690406/rails-using-devise-with-single-table-inheritance
  # Instead I hacked this together by looking at Devise's SessionsController#create method
  # Check that out here: https://github.com/plataformatec/devise/blob/master/app/controllers/devise/sessions_controller.rb?source=cc#L14
  # TODO: We could improve this so we don't need to key off of the params and just search Student or
  # Teacher against the email passed in. This would allow us to have one login point on the frontend
  # but would require a bit of work that I don't think is needed right now.
  def create
    type = params['student'] ? 'student' : 'teacher'
    self.resource = warden.authenticate!({ :scope => type, :recall => "sessions#new" })
    sign_in(resource.type.underscore, resource.type.constantize.send(:find, resource.id)) unless resource.type.nil?
    respond_with resource, :location => after_sign_in_path_for(resource)
  end

  private 

  def json_request?
    request.format.json?
  end
end