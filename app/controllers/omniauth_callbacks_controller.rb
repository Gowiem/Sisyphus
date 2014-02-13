class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2
    @current_user = Student.from_omniauth(request.env["omniauth.auth"])
    if @current_user.persisted?
      puts "@current_user is persisted"
      sign_in_and_redirect @current_user, :event => :authentication
    else
      puts "@current_user not persisted"
      session["devise.google_data"] = request.env["omniauth.auth"]
      flash.notice = "You are almost Done! Please provide a password to finish setting up your account"
      redirect_to new_user_registration_url
    end
  end
end