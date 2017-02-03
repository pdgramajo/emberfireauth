import Ember from 'ember';

export default Ember.Controller.extend({
    firebaseApp: Ember.inject.service(),
    resetInputFileComp:false,
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
      /**
   * Delete a file from Firebase storage
   *
   * @param {string} url File HTTPS URL
   * @return {Promise} Resolves when deleted.
   */
  deleteFile(url) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('firebaseApp').storage().refFromURL(url).delete().then(() => {
        Ember.run(null, resolve, null);
      }).catch((error) => {
        Ember.run(null, reject, error);
      });
    });
  },
  history: [],
  
  hasHistory: function(){
    return this.get('history.length')>1;
  }.property('history.length'),
  
  watchHistory: function(){
    this.get('history').pushObject(this.get('currentPath'));
  }.observes('currentPath'),
  funcResetInput(){
      this.get('resetInputFile').resetInput();
  },
  
  actions: {
   openModal(){
        this.set('resetInputFileComp',false);
    },
    goBack: function(){
       // implement your own history popping that actually works ;)
       this.get('history').popObject();
       window.history.back(); 
       this.get('history').popObject();
     },
      selectedFiles(files, resetInput) {
         this.set('imgFile',files);
          this.set('resetInputFile', resetInput);
      },
    }
});
