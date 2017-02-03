import BaseController from '../../base-controller';


export default BaseController.extend({
    actions:{
      save(){
           this.uploadImage().then((url)=>{
		                     	const  category = this.get('model');
		                      const drinkobj = this.store.createRecord('drink',{
		                            name: this.get('name'),
		                            description:this.get('description'),
		                            category:category,
		                            imageUrl:url
		                        });
		                	    drinkobj.save().then((drinkresponse)=>{
		                		                 category.get('drinks').pushObject(drinkresponse);
		                		                 category.save();
		                	                  },(error)=>{				
		                		                       alert('error',error);
		                	                  });	          
			                    this.set('name','');
			                    this.set('description','');
			                    this.set('imgFile',null);
			                    this.set('resetInputFileComp',true);
            });
      }
    }
});
