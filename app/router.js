import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SimpleauthDemoENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('protected');
});

export default Router;
