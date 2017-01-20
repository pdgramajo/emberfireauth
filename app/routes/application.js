import Ember from 'ember';
export default Ember.Route.extend({
   session: Ember.inject.service(),
  beforeModel: function() {
   return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      
      
      this.get('session').open('firebase',  {
      provider: 'password',
      email: 'pdgramajo@gmail.com',
      password: 'pablo123'
    }).then(function(data) {
        console.log(data.currentUser);
      });
      

    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
