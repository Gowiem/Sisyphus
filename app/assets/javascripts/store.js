// http://emberjs.com/guides/models/defining-a-store/

Sisyphus.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
