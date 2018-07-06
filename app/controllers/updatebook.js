import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  isStudent:service('session'),
  notifications:service('notification-messages'),
  booktitle:null,
  names:[],
  value:null,
  actions:
  {
    foo(book)
    {
      this.set('value',book);
      this.set('booktitle',book.title);
    },
    update()
    {
       this.get('store').findRecord('book',this.get('value').id).then(res=>{
          res.set('quantity',parseInt(res.quantity)+parseInt(this.get('quantity')));
          res.save();
          this.get('notifications').success('Book Quantity Updated Successfully',{
            autoClear:true,
            clearDuration: 1000
       });
          this.transitionToRoute("books");
     });
    },

  }

});
