import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories',{ path: 'AllCategories' }, function() {
    this.route('new');
    this.route('category', { path: 'Category/:category_id' } ,function() {
      this.route('drinks', function() {});
    });
  });
});

export default Router;
