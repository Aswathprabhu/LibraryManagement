import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  isStudent:service('session'),
  notifications:service('notification-messages'),
  role:null,
  init()
  {
    this._super(...arguments);
    this.set('role',this.get('isStudent').getState());
  },
  actions:{
    save()
    {
      this.get('model').save();
      this.get('notifications').success('Details Updated Successfully',{
        autoClear:true,
        clearDuration: 1000
        });

    }
  }
});
