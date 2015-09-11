angular.module('starter')
    .factory('Feature', function($resource){
        return $resource('http://mobii.dev/api/Feature/:featureId', {featureId:'@id'}, {
            query: {
                isArray: true,
                method: 'GET',
                params: {},
                transformResponse: function (data) {
                  return angular.fromJson(data).results;
                }
            }
        });
    });
