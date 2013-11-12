class StudentsController < ApplicationController
  before_action :set_student, only: [:update]

  def create
    if true
      user = Student.new(params[:student])
    end

    if user.save
      render json: user, status: :created
    else
      respond_with user
    end
  end

  def show
    respond_with current_user
  end

  def update
    respond_to do |format|
      if @student.update(student_params)
        format.json { head :no_content }
      else
        format.json { render json: @student.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    def set_student
      @student = Student.find(params[:id])
    end

    def student_params
      params.require(:student).permit(:task_ids)
    end

end