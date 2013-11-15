Sisyphus
========

## First things first: [GitHub Emoji](http://www.emoji-cheat-sheet.com/)

## Local Development Prereqs

- Install [RVM](http://rvm.io/)
- Install [Xcode Command Line Tools](https://developer.apple.com/downloads/index.action) - You may need a developer account. If you don't have one and can't download it then just get in contact with me. 
- Install ruby 2.0.0-p247 => `rvm install 2.0.0-p247`
- Install [Homebrew](http://brew.sh/) => `ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"`
- [Install MongoDB](http://docs.mongodb.org/manual/installation/) => `brew update && brew install mongodb`
- (optional) If you feel up to it follow [these steps](http://stackoverflow.com/a/5601077/1159410) so you don't have to start MongoDB everytime you want to run the local server.  

## Getting localhost up and running
Open up a terminal (terminal.app on OSX) and input the following:

- git clone the Project  => `git clone git@github.com:Gowiem/Sisyphus.git`
- Change into the Sisyphus project => `cd Sisyphus`
- Setup a [.rvmrc file](http://rvm.io/workflow/projects) => `rvm --rvmrc --create 2.0.0-p247@sisyphus`
- Run bundler to install the project's gems (Gems are just Ruby libraries) => `bundle install`
- Start the Rails Server => `rails server` or `rails s` for short
- Go to [localhost:3000](localhost:3000) in your browser and you should be all set. 

## Running the server once you've installed everything
Once you've gotten all of the above working and you've been able to check out the site at localhost:3000 you'll only need to do the following two things to get the server running again. 
- Start MongoDB, in a new terminal window => `mongod`
- Start the Rails server from the project directory => `cd ~/Workspace/Sisyphus && rails server` Note that '~/Workspace/Sisyphus' is the directory where you cloned the project and it may be in a different location depending on where you put it. 
- Login information => Email: firstname@email.com Password: password12

## Seed Data

###Need some data? 

Once you're all setup you can run the following command from the root directory of the project to populate your local database with seed data:

`rake db:seed`

###Want to change your password or change the data for some reason?

Check out 'db/seeds.rb'. It's just a simple ruby file which you can probably figure out and change depending on what you want. If you change something however and then run `rake db:seed` again you'll get an error because you're trying to create users which are already in the database, so to get around that do the following: 

1. Open the rails console => `rails console`
2. Clear out the database => `DatabaseCleaner.clean`
3. Exit rails console => `exit`
4. Re-seed the database => `rake db:seed`

## Useful Resources 

### For Designers
Note: all of these are fairly obvious as of right now, please feel free to add your own resources/tools here. 

- [Handlebar Templates](http://handlebarsjs.com/)
- [SASS](http://sass-lang.com/)
- [Bootstrap](http://getbootstrap.com/)

### For Developers

Important Gems/Libraries we're using:

- [Ember.js](https://github.com/emberjs/ember.js) (Frontend Framework)
- [Ember-Data](https://github.com/emberjs/data) (Client/Server persistence layer)
- [Active Model Serializers](https://github.com/rails-api/active_model_serializers) (Our JSON formatter)
- [Ember-Rails](https://github.com/emberjs/ember-rails) (Pulls in ember.js and ember-data, not doing much anymore)
- [Devise](https://github.com/plataformatec/devise) (Our Authentication plugin)
- [Mongoid](https://github.com/mongoid/mongoid) (Our ORM)
- [Bootstrap-Sass](https://github.com/thomas-mcdonald/bootstrap-sass) (Provides SASS version of Bootstrap for us)

Ember, Ember-Data, Rails Example Apps:


- [Rails Mongoid Devise Example](https://github.com/RailsApps/rails3-mongoid-devise) (Mongoid, Devise)
- [Simple Ember Example 1](https://github.com/dgeb/ember_data_example) (JavaScript)
- [Simple Ember Example 2](https://github.com/wulftone/rails-ember-example) (Coffeescript)
- [Simple Ember Example 3](https://github.com/bazzel/ember-sample2) - (CoffeeScript)
- [Mongoid Ember Example](https://github.com/evendis/rails-ember-mongo-bootstrap-demo) (Mongoid, CoffeeScript, Bootstrap)
- [Rails 4 Mongoid Example](https://github.com/mongoid/echo)

Random:

- [Rails/Ember Tutorial](http://www.cerebris.com/blog/2012/01/24/beginning-ember-js-on-rails-part-1/)
- [Configuring Rails for Mongoid](http://mongoid.org/en/mongoid/docs/rails.html)

