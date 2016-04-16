import Ember from 'ember';

const { computed } = Ember;

export default Ember.Service.extend({
  audio: computed(function() {
    return new Audio;
  }),
  play(title, source) {
    document.title = `▶︎ Now playing ${title}...`;
    let audio = this.get('audio');
    audio.src = source;
    audio.play();
  }
});
