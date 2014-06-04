Package.describe({
  name: 'errors',
  summary: 'A local errors package for our projects'
});

Package.on_use(function (api) {
  /* Use or imply other packages. */
 api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
 

   /*
    * Add files that should be used with this
    * package.
    */
 api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
 if(api.export){
  api.export('Errors');
 }
});

Package.on_test(function (api) {
  api.use('errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');
  
  api.add_files('errors_tests.js', 'client');
});
