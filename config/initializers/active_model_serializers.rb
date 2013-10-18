## Makes mongoid and active_model_serializers play nicely together
## https://gist.github.com/benedikt/1959907
Mongoid::Document.send(:include, ActiveModel::SerializerSupport)
Mongoid::Criteria.delegate(:active_model_serializer, :to => :to_a)