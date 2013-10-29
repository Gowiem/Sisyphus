class SubtasksController < ApplicationController

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

  private 

    def subtask_params
      params.require(:subtask).permit(:title, :type, :project_group_id, :parent_task_id)
    end

end
