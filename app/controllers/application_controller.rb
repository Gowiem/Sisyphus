class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery
  after_filter :set_csrf_cookie

  respond_to :html, :json

  before_filter :update_sanitized_params, if: :devise_controller?

  def set_csrf_cookie
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def authenticate!
    :authenticate_student! || :authenticate_teacher!
    @current_user = current_user
  end

  def current_user
    @current_user = super
    @current_user ||= student_signed_in? ? current_student : current_teacher
  end

  def update_sanitized_params
    devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:name, :email, :password, :password_confirmation)}
  end

  protected

  def verified_request?
    super || form_authenticity_token == request.headers['X-CSRF-TOKEN']
  end
end
