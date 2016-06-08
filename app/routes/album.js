import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(album) {
    return album.get('tracks');
  }
});
