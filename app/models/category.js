import DS from 'ember-data';

export default DS.Model.extend({
	title:DS.attr('string'),
	drinks: DS.hasMany('drink'),
	imageUrl : DS.attr('string')
});
