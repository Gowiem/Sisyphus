class ProjectGroupsController < ApplicationController
  before_filter :set_project_group, only: [:show, :edit]

  def index
    @project_groups = current_user.project_groups
    render :json => @project_groups
  end

  def show
    render :json => @project_group
  end

  private

  def set_project_group
    @project_group = ProjectGroup.find(params[:id])
  end
end