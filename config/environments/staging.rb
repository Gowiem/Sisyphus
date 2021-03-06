Sisyphus::Application.configure do

  ## Our Config
  ###############

  config.ember.variant = :development
  config.action_mailer.default_url_options = { :host => 'sisyphus-staging.herokuapp.com' }
  config.action_mailer.raise_delivery_errors = true

  ## Default Config
  ###################

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = true

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true
end
