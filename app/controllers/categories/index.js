import Ember from 'ember';

export default Ember.Controller.extend({
    
    
    actions:{
      viewDetails(data){
           this.transitionToRoute('categories.category',data);
        },
    }
    
});
