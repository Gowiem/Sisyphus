class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  respond_to :html, :json

  before_filter :update_sanitized_params, if: :devise_controller?

  def authenticate!
    :authenticate_student! || :authenticate_teacher!
    # debugger
    puts "\n\n\n\n\n\n\n AUTHENTICATING USER - current_user: #{current_user} current_student: #{current_student}"
    @current_user = current_user
  end

  # def current_user
  #   @current_user ||= student_signed_in? ? current_student : current_teacher
  # end

  def update_sanitized_params
    devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:name, :email, :password, :password_confirmation)}
  end
end
