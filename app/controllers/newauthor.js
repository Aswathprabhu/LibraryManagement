import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
notifications: service('notification-messages'),
isStudent:service('session'),



  actions:{
    save()
    {
      let newauthor=this.get('model');
      this.get('store').createRecord('author',newauthor).save();
      this.get('store').findAll('author').then(res=>
      {
        res.forEach(item=>{
          if(item.name===newauthor.name){
          this.get('notifications').success('Author added Successfully',{
            autoClear:true,
            clearDuration: 1000
            });
            this.transitionToRoute("authordetail",item.id);
          }
        });
      });

    }
  }
});
