import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  isStudent:service('session'),

  role:false,
  init()
  {
    this._super(...arguments);
    this.set('role',this.get('isStudent').getState());
   },


	actions:{
		displaydetail(id){
			this.transitionToRoute('bookdetail',id);
		},
    edit:function(id)
    {
      this.transitionToRoute("editauthor",id);
    },
    addbook()
    {
      this.transitionToRoute("newbook");
    }
	}
});
