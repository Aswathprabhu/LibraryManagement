import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | loginalert', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:loginalert');
    assert.ok(route);
  });
});
