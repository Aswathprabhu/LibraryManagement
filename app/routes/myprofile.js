import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  memberid:service('session'),


  model()
  {
   return this.get('store').findRecord('user',this.get('memberid').getId()).then(res=>{
     return res});

  }
});
