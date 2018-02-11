(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().config(function($provide) {
  $provide.decorator('inputDirective', function($delegate, $log) {
    var directive = $delegate[0];
    angular.extend(directive.link, {
      post: function(scope, element, attr, ctrls) {
        element.on('compositionupdate', function(event) {
          element.triggerHandler('compositionend');
        })
      }
    });
    return $delegate;
  });
});