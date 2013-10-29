Sisyphus::Application.routes.draw do

  ## FormatTest class is used to restrict requests to certain formats. We need 
  ## this with ember because if the user hits '/projects' they will get JSON, 
  ## which we don't want. We want them to load the ember app and ember will 
  ## get the JSON. 
  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      request.format == mime_type
    end
  end

  ## Routes
  ##########

  ## Rails Admin Routes
  devise_for :super_admins
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

  resources :projects, :constraints => FormatTest.new(:json)
  resources :project_groups, :constraints => FormatTest.new(:json)
  resources :subtasks, :constraints => FormatTest.new(:json)

  devise_for :students, :teachers

  devise_scope :student do 
    get "/login" => "devise/sessions#new", :as => "student_login"
    get "/logout" => "devise/sessions#destroy", :as => "student_logout"
    get "/register" => "devise/registrations#new", :as => "student_register"
  end

  root 'student/dashboard#index', :constraints => FormatTest.new(:html)

  ## Catch all Route which will just render ember, and ember can figure out the route
  get '*path' => 'student/dashboard#index', :constraints => FormatTest.new(:html)
end
