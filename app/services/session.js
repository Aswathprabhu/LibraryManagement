import Service from '@ember/service';

export default Service.extend({
  isStudent:false,
  memberid:null,
  isLogged:false,
  setlog(value)
  {
    this.set('isLogged',value);
  },
  getlog()
  {
    return this.get('isLogged');
  },
  setState(value)
  {
    this.set('isStudent',value);
  },
  getState()
  {
    return this.get('isStudent');
  },
  setId(value)
  {
    this.set('memberid',value);
  },
  getId()
  {
    return this.get('memberid');
  }
});
