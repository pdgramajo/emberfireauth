import Ember from 'ember';

export default Ember.Controller.extend({
    firebaseApp: Ember.inject.service(),
    imgFile:null,
    uploadImage(){ //https://github.com/rmmmp/emberfire-utils/blob/master/addon/services/firebase-util.js 
       return new Ember.RSVP.Promise((resolve, reject) => {
           const file = this.get('imgFile');
           const metadata = {'contentType': file.type };
           const storageRef = this.get('firebaseApp').storage().ref();
            storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
              var url = snapshot.metadata.downloadURLs[0];
                 resolve(url);
             }).catch(function(error) {
                  reject(error);
             });
        });
    },
    actions:{
      selectedFiles(files, resetInput) {
         this.set('imgFile',files);
      },
    }
});
