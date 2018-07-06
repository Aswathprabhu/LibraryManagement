import DS from 'ember-data';

export default DS.Model.extend({

   title:DS.attr("string"),
   author:DS.attr("string"),
   edition:DS.attr("string"),
   publisher:DS.attr("string"),
   quantity:DS.attr("string")
});
