import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    login(){
      this.transitionToRoute("login");
    }
  }
});
