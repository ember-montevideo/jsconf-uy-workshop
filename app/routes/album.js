import Ember from 'ember';

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),

  afterModel(album) {
    if (this.get('fastboot.isFastBoot')) {
      return album.get('tracks');
    }
  }
});
