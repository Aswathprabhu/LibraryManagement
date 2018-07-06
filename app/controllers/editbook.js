import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  notifications:service('notification-messages'),
  actions:{
    save:function(id){
      this.get('model').save();
      this.get('notifications').success('Book Updated Successfully',{
        autoClear:true,
        clearDuration: 1000
        });
      this.transitionToRoute("bookdetail",id);
      }
    }
});
