class SubtasksController < ApplicationController
  before_action :set_subtask, only: [:update, :destroy]
  serialization_scope :current_student

  # POST /subtasks.json
  def create
    @subtask = Subtask.new(subtask_params)

    respond_to do |format|
      if @subtask.save
        format.json { render json: @subtask }
      else
        format.json { render json: @subtask.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @subtask.update(subtask_params)
        format.json { head :no_content }
      else
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @subtask.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private 

    def set_subtask
      @subtask = Subtask.find(params[:id])
    end

    def subtask_params
      params.require(:subtask).permit(:title, :type, :project_group_id, 
        :parent_task_id, :is_completed, {:student_ids => []})
    end

end
