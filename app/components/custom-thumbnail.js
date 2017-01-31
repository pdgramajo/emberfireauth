import Ember from 'ember';

export default Ember.Component.extend({
        classNames:['col-xs-12','col-sm-6','col-md-4','col-lg-3'],
    mouseEnter(){
           this.$().find('.caption').fadeIn(250);
     },
     mouseLeave(){
           this.$().find('.caption').fadeOut(250);
     },
     click(){
        this.sendAction('action', this.get('data'));
     }
});
