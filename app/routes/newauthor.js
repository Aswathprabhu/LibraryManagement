import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({


  isStudent:service('session'),

  beforeModel()
  {
   if(!this.get('isStudent').getlog())
   this.transitionTo("loginalert");
   if(!this.get('isStudent').getState())
   this.transitionTo("notfound");
  },
model()
{
  return {};
}
});
