import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  email:null,
  user:null,
  bool:null,
  res:null,
  isLogged:service('session'),

  beforeModel()
  {
   if(!this.get('isLogged').getlog())
   this.transitionTo("loginalert");
},
  model(params)
  {
    var user=params['dashboard_id'];
    return user;
  },
   setupController(controller,model){
     this._super(...arguments);
     controller.set('name',model);

   },


});
