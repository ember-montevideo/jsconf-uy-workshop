import RESTAdapter from 'ember-data/adapters/rest';
import Ember from 'ember';

export default RESTAdapter.extend({
  namespace: 'api',

  fastboot: Ember.inject.service(),

  host: Ember.computed(function() {
    if (this.get('fastboot.isFastBoot')) {
      return 'http://em-ng-workshop.herokuapp.com';
    }
  })
});
