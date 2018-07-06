import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({

names:[],
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
  return this.get('store').findAll('book').then(response=>{
    response.forEach((item)=>{
       this.names.pushObject(item);
    });

    return response;
  });
},
setupController(controller)
{
  this._super(...arguments);

  controller.set('names',this.names);
}
});
