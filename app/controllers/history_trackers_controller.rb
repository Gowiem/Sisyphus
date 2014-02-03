class HistoryTrackersController < ApplicationController
  before_filter :authenticate!

  def index
    puts "Params: #{params}"
    exclude_old = params[:exclude_old] ? true : false
    project_group = ProjectGroup.find(params[:project_group_id])
    @histories = project_group.histories(exclude_old)
    render json: @histories
  end

  def show
    @history = HistoryTracker.find(params[:id])
    render json: @history
  end
end
