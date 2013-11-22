module ApplicationHelper

  def user_signed_in?
    @user_signed_in ||= student_signed_in? ? true : teacher_signed_in?
  end

  def serialized_user
    puts "serailized_user -----> \n\n\n\n\n\n\n\n current_user: #{@current_user}"
    if @current_user 
      if @current_user.teacher?
        TeacherSerializer.new(@current_user).to_json(root: false)
      elsif @current_user.student?
        StudentSerializer.new(@current_user).to_json(root: false)
      end
    end
  end
end
