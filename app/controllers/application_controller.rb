class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def authenticate!
    :authenticate_student! || :authenticate_teacher!
    current_user
  end

  def current_user
    @current_user ||= student_signed_in? ? current_student : current_teacher
  end
end
