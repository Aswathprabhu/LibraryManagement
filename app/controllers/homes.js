import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  isStudent:service('session'),


  notifications: service('notification-messages'),
  actions:
  {
    submit:function()
    {

      this.get('notifications').warning('You need to Login',{
        autoClear:true,
        clearDuration: 1000
        });
     this.transitionToRoute("login");
    }
  }
});
