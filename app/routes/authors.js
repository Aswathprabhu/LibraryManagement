import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({

  isLogged:service('session'),

  beforeModel()
  {
   if(!this.get('isLogged').getlog())
   this.transitionTo("loginalert");
  },
  model()
  {
    return this.get('store').findAll('author').then(response=>{

      return response;
    });
  },
  setupController(controller,model)
  {
    this._super(...arguments);
    controller.set('newmodel',model);
  }
});
