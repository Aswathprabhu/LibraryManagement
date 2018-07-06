import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  isStudent:service('session'),

  role:true,
  init()
  {
    this._super(...arguments);
    this.set('role',this.get('isStudent').getState());

  },
  notifications: service('notification-messages'),
  actions:{
    authordetail:function(str)
    {

      this.get('store').findAll('author').then(res=>{
        res.forEach((item)=> {

          if(item.name===str)
          {
           this.transitionToRoute("authordetail",item.id);
          }

        });
      });
    },
   pick:function(id)
   {
     this.get('store').findRecord('book',id).then(res=>{
       if(parseInt(res.quantity)>0)
      {
       res.set('quantity',parseInt(res.quantity)-1);
       res.save();
       this.get('notifications').success('Book Picked Successfully',{
         autoClear:true,
         clearDuration: 1000
       });
         this.transitionToRoute("books");

      }
      else {
        this.get('notifications').danger('No Stocks available',{
          autoClear:true,
          clearDuration: 1000
        });
      }
    });
   },
   submit:function(id)
   {
     this.get('store').findRecord('book',id).then(res=>{
       res.set('quantity',parseInt(res.quantity)+1);
       res.save();

       this.get('notifications').success('Book Submitted Successfully',{
         autoClear:true,
         clearDuration: 1000
         });
         this.transitionToRoute("books");
          });
   },
   edit:function(id)
   {
     this.transitionToRoute("editbook",id);
   },
   delete:function(id)
   {
     this.get('store').findRecord('book',id).then(response =>{
				response.destroyRecord();
        this.get('notifications').success('Book Deleted Successfully',{
          autoClear:true,
          clearDuration: 1000
          });
			});
			this.transitionToRoute('books');
		}


  }
});
