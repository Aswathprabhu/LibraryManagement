import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  notifications: service('notification-messages'),
  isStudent:service('session'),



  init()
  {
    this._super(...arguments);
    this.set('loginstatus',this.get('isStudent').getlog());
  },
  actions:{
    studentsign:function()
    {
      this.transitionToRoute("studentsign");
    },
    staffsign:function()
    {
      this.transitionToRoute("staffsign");
    },

      login:function(){
      let newmodel=this.get('model');
      let bool=null;
      let user=null;
      this.get('store').findAll('user').then(res => {

			return res;
    }).then(res=>
    {
      let flag=0;
      res.forEach(item=>
      {
        if(item.email===newmodel.email && item.password===newmodel.password)
        {
          bool=(item.roleid==="0")?false:true;
          user=item.name;
          this.get('isStudent').setlog(true);
          this.get('isStudent').setState(bool);
          this.get('isStudent').setId(item.id);
          this.transitionToRoute("dashboard",user);
          flag=1;
        }
      });
      if(flag===0)
      this.get('notifications').error('Wrong Credentials',{
        autoClear:true,
        clearDuration: 1000
        });
        else {
          {
            this.get('notifications').success('Logged In Successfully',{
              autoClear:true,
              clearDuration: 1000
              });
          }
        }
    });


    }
  }
});
