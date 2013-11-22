class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google_oauth2
    user = User.from_omniauth(request.env["omniauth.auth"])
    @current_user = user
    puts "google_oauth2 ------> \n\n\n\n\n\n\n\n\n\n current_user #{@current_user} \n\n\n\n"
    if user.persisted?
      puts "\n\n\n\n\n\n\n user is persisted!"
      flash.notice = "Signed in Through Google!"
      sign_in_and_redirect user
    else
      puts "\n\n\n\n\n\n\n user not persisted!"
      session["devise.user_attributes"] = user.attributes
      flash.notice = "You are almost Done! Please provide a password to finish setting up your account"
      redirect_to new_user_registration_url
    end
  end
end