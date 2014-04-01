class SemestersController < ApplicationController
  before_filter :authenticate!
  before_filter :set_semester, only: [:show, :edit]

  def index
    @semesters = current_user.semesters
    render :json => @semesters
  end

  def show
    render :json => @semester
  end

  def new
    @semester = Semester.new
  end

  def edit
  end

  def create
    @semester = Semester.new(semester_params)

    respond_to do |format|
      if @semester.save
        format.json { render action: 'show', status: :created, location: @semester }
      else
        format.json { render json: @semester.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_semester
      @semester = Semester.find(params[:id])
    end

    def semester_params
      params[:semester]
    end
end