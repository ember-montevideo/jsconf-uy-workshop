import Ember from 'ember';

export default Ember.Component.extend({
  player: Ember.inject.service(),

  click() {
    this.get('player').play(this.get('title'), this.get('source'));
  }
});
