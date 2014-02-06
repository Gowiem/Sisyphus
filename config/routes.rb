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
  # devise_for :super_admins
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

  devise_for :students, controllers: { sessions: 'sessions' }
  devise_for :teachers, controllers: { sessions: 'sessions' }

  resources :projects, :constraints => FormatTest.new(:json)
  resources :courses, :constraints => FormatTest.new(:json)
  resources :project_groups, :constraints => FormatTest.new(:json)
  resources :subtasks, :constraints => FormatTest.new(:json)
  resources :students, :constraints => FormatTest.new(:json)
  resources :comments, :constraints => FormatTest.new(:json)
  resources :semesters,:constraints => FormatTest.new(:json)

  resources :project_groups, :constraints => FormatTest.new(:json) do
    resources :history_trackers, only: [:index, :show]
  end

  # devise_for :teachers
  # devise_scope :teacher do
  #   get "/teachers/login" => "devise/sessions#new", :as => "teacher_login"
  #   get "/teachers/logout" => "devise/sessions#destroy", :as => "teacher_logout"
  #   get "/teachers/register" => "devise/registrations#new", :as => "teacher_register"
  # end

  # devise_for :students
  # devise_scope :student do
  #   get "/students/login" => "devise/sessions#new", :as => "student_login"
  #   get "/students/logout" => "devise/sessions#destroy", :as => "student_logout"
  #   get "/students/register" => "devise/registrations#new", :as => "student_register"
  # end

  root :to => "ember#index", as: :ember_root, :constraints => FormatTest.new(:html)

  ## Catch all Route which will just render ember, and ember can figure out the route
  get '*path' => 'ember#index', :constraints => FormatTest.new(:html)
end
