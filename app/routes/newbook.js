import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({


  isStudent:service('session'),


  beforeModel()
  {
    if(!this.get('isStudent').getState())
    this.transitionTo("notfound");
   if(!this.get('isStudent').getlog())
   this.transitionTo("loginalert");

  },
  model()
  {
    // return this.store.findAll('user').then(rse=>
    // {
    //   console.log(rse);
    //   return rse;
    // });
    return {};
  }
});
