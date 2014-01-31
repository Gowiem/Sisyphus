class SubtasksController < ApplicationController
  before_filter :authenticate!
  before_action :set_subtask, only: [:update, :destroy]

  def index
    ## TODO: Index action will only work for '/subtasks/?ids=2,3,4'
    ## Do we need it to work in it's regular fashion? Hopefully not..
    @subtasks = Subtask.find(params[:ids])
    render :json => @subtasks
  end

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
        format.json { render json: @subtask.errors, status: :unprocessable_entity }
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
      prams = params.require(:subtask).permit(:title, :type, :due_date, :project_group_id, 
        :parent_task_id, :is_disputed, :is_completed, {:comments => []}, {:student_ids => []})
      prams.merge({ modifier: @current_user })
    end
end
