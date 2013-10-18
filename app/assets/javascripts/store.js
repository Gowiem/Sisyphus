// http://emberjs.com/guides/models/defining-a-store/
console.log("--> Loading store.js")

Sis.Store = DS.Store.extend({
  // revision: 11,
  // adapter: DS.RESTAdapter.create()
});

// Sis.Adapter.map('project', {
//   users: { embedded: 'always' }
// })

Sis.ProjectAdapter = DS.RESTAdapter.extend({
  namespace: "student"
});
