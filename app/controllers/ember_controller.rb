class EmberController < ApplicationController
  before_filter :authenticate!

  def index
    @current_user = current_user
  end
  
end