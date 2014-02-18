module ApplicationHelper

  def serialized_user
    if @current_user 
      if @current_user.teacher?
        TeacherSerializer.new(@current_user).to_json(root: false)
      elsif @current_user.student?
        StudentSerializer.new(@current_user).to_json(root: false)
      end
    end
  end
end
