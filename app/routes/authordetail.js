import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
  isLogged:service('session'),

  beforeModel()
  {
   if(!this.get('isLogged').getlog())
   this.transitionTo("loginalert");
},
model(params){
    return this.get('store').findRecord('author',params["author_id"]).then(response =>{

      return this.get('store').findAll('book').then(res=>{
        var books=res.content.filterBy('_data.author',response.name);
        response.set('books',books);
        return response;
      });

    });
}
});
