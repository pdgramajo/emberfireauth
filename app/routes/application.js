import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
   return this.get('session').fetch().catch(function() {});
  },
  isEmpty(){
     return  Ember.isEmpty(this.get('controller.email')) || Ember.isEmpty(this.get('controller.password'));
  },
  actions: {
    signIn: function() {
      
   /*   const options = {
         provider: 'password',
         email: 'pdgramajo@gmail.com',
         password: 'pablo123'
      };*/

      if(!this.isEmpty()){

           const options = {
              provider: 'password',
              email: this.get('controller.email'),
              password: this.get('controller.password')
           };
           
           this.get('session').open('firebase', options).then(function(data) {
             console.log(data.currentUser);
           }).catch(function(){
               alert('los datos son incorrectos');  
           });
        }else{
          alert('completa los campos');  
        }
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
