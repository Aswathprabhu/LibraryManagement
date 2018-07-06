import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notifications: service('notification-messages'),
  isStudent:service('session'),


  actions:{
    save()
    {
      let newbook=this.get('model');

      this.get('store').findAll('book').then(res => {

      return res;
    }).then(res=>
    {
      let flag=0;
      res.forEach(item=>
      {
        if(item.author===newbook.author)
        {
          flag=1;
        }
      });
      if(flag===0)
      {
        alert("Please add the Author first");
        this.transitionToRoute("newauthor");
      }
      else {
        {
            this.get('store').createRecord('book',newbook).save();
            this.get('notifications').success('Book added Successfully',{
              autoClear:true,
              clearDuration: 1000
              });
            this.transitionToRoute("books");
        }
      }
    });

    }
  }
});
