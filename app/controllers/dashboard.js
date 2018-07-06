import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
isStudent:service('session'),

role:null,
init()
{
  this._super(...arguments);
  this.set('role',this.get('isStudent').getState());

}

});
