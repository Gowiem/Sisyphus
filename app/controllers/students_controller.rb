class StudentsController < ApplicationController
  before_action :set_student, only: [:update]

  def update
    respond_to do |format|
      if student_params.has_key?("password") && student_params["password"]
        if @student.update_with_password(student_params)
          # If we're updating the user's password then we need to sign 
          # the user back in so they're still auth'd.
          sign_in(@student, :bypass => true)
          format.json { head :no_content }
        else
          format.json { render json: @student.errors, status: :unprocessable_entity }
        end
      else
        no_password_params = student_params
        no_password_params.delete(:current_password)
        if @student.update(no_password_params)
          format.json { head :no_content }
        else
          format.json { render json: @student.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  private

    def set_student
      @student = Student.find(params[:id])
    end

    def student_params
      params.require(:student).permit(:task_ids, :first_name, :last_name, :email, :phone, :password, :password_confirmation, :current_password)
    end

end