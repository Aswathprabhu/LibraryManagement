import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({

isLogged:service('session'),
notifications:service('notification-messages'),
  beforeModel()
  {

   if(this.get('isLogged').getlog())
   {
     this.get('notifications').success('You are already Logged In!',{
       autoClear:true,
       clearDuration: 1000
       });
       this.transitionTo("dashboard","");
   }
  },
  model()
  {
    return {};
  },

});
