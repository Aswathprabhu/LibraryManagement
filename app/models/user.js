import DS from 'ember-data';

export default DS.Model.extend({
  roleid:DS.attr('string'),
  userid:DS.attr("string"),
  name:DS.attr("string"),
  email:DS.attr("string"),
  password:DS.attr("string")

});
