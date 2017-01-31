import BaseController from '../../controllers/base-controller';

export default BaseController.extend({
    actions:{
        
        saveCategory(){
            const title = this.get('title');
            console.log('title=> ',title);
            this.uploadImage().then((url)=>{
		           
		             var newCategory = this.get('store').createRecord('category', {
                          title: title,
                          imageUrl:url
                        });
                        var self = this;
                        newCategory.save().then(function(category){
                            self.transitionToRoute('categories.category', category);
                        }).catch(function(e){
                            console.log('error: ',e);
                        });
			        this.set('title','');
			        this.set('imgFile','');
            })
        }
    }
});
