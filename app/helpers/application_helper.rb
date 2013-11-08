module ApplicationHelper

  def user_signed_in?
    @user_signed_in ||= student_signed_in? ? true : teacher_signed_in?
  end
end
