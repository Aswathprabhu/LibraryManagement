import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  notifications: service('notification-messages'),
  isStudent:service('session'),
  router:service(),
  role:false,
  loginstatus:false,
  memberid:null,
  init()
  {
    this._super(...arguments);
    this.set('role',this.get('isStudent').getState());
    this.set('loginstatus',this.get('isStudent').getlog());
    this.set('memberid',this.get('isStudent').getId());
  },
  actions:{
  logout()
  {
    this.get('notifications').warning('LoggedOut',{
      autoClear:true,
      clearDuration:1000
      });
      location.reload();
      this.get('isStudent').setState(false);
      this.get('isStudent').setlog(false);
  },

 }
});
