// app/routes/application.js
import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
      console.log(this.get('session'));
   return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});