import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('posts', function() {
      this.route('create');
      this.route('view', {path: 'view/:id'});
    });
});

export default Router;
