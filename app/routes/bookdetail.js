import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({

  isLogged:service('session'),

  beforeModel() {
   if(!this.get('isLogged').getlog()) {
    this.transitionTo("loginalert");
   }
  },
  model(params) {
     return this.store.findRecord('book', params["book_id"]);
   }
});
