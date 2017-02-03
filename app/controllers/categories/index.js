import BaseController from '../../controllers/base-controller';


export default BaseController.extend({
    
    
    actions:{
      viewDetails(data){
           this.transitionToRoute('categories.category',data);
        },
              notifyOpened() {
        this.get('notify').info('Opened');
      },

    
    }
    
});
