import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  @computed
  blabla() {
    return 'blabla';
  }
});
