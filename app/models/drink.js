import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	description:DS.attr('string'),
	category: DS.belongsTo('category'),
	imageUrl : DS.attr('string'),
	imageId: DS.attr('string'),
	images : DS.hasMany('image')
});
