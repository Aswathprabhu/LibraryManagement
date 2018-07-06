import Route from '@ember/routing/route';

export default Route.extend({
  templateName:'newauthor',
  model(params){
     return this.store.findRecord('author', params["editauthor_id"]);
  }
});
