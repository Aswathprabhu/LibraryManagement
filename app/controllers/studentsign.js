import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  isStudent:service('session'),
  notifications:service('notification-messages'),


     actions:{
       adduser:function(str)
       {
         let newuser=this.get('model');

         newuser.roleid=str;
         this.get('store').createRecord('user',newuser).save();
         this.get('notifications').success('Account Created Successfully',{
           autoClear:true,
           clearDuration: 1000
           });
         this.transitionToRoute("dashboard",newuser.name);

       }
     }
});
