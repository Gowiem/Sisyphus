class CoursesController < ApplicationController

  def index
    @courses = current_user.courses
    render :json => @courses
  end

  def show
    render :json => @course
  end

  def new
    @course = Course.new
  end

  def edit
  end

  def create
    @course = Course.new(course_params)

    respond_to do |format|
      if @course.save
        format.html { redirect_to @project, notice: 'Course created succesfully.'}
        format.json { render action: 'show', status: :created, location: @course }
      else
        format.html { render action: 'new' }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

end
