class HistoryTrackersController < ApplicationController
  before_filter :authenticate!

  def index
    project_group = ProjectGroup.find(params[:project_group_id])
    @histories = project_group.histories
    render json: @histories
  end

  def show
    @history = HistoryTracker.find(params[:id])
    render json: @history
  end
end
