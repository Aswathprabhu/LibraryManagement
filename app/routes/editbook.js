import Route from '@ember/routing/route';

export default Route.extend({
  templateName:'newbook',
  model(params){
     return this.store.findRecord('book', params["editbook_id"]);
  }
});
