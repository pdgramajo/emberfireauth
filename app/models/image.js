import DS from 'ember-data';

export default DS.Model.extend({
    drink: DS.belongsTo('drink'),
    url:DS.attr('string')
});
