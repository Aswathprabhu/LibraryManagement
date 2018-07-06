import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {computed} from '@ember/object';

export default Controller.extend({
  isStudent:service('session'),
  newmodel:null,
  queryParams:['pageNumber'],
  pageNumber:0,
  pageSize:5,
  pages:computed('newmodel','pageSize',function(){
  var pages=[];
  var temparray=this.get('newmodel');
  for(let i=0;i<temparray.length;i=i+parseInt(this.get('pageSize'))){
    pages.push(temparray.slice(i,i+parseInt(this.get('pageSize'))));
  }
  return pages;
  }),
  paginatedContent:computed('pages','pageNumber',function(){
  return this.get('pages') [this.get('pageNumber')]
  }),
   actions:{
     fetch(str)
     {
     this.transitionToRoute("authordetail",str);
     }
   }
});
