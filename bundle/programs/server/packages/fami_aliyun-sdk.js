(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var ALY;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/fami_aliyun-sdk/aliyun-sdk.js                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
// Write your package code here!
ALY = Npm.require('aliyun-sdk');
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['fami:aliyun-sdk'] = {}, {
  ALY: ALY
});

})();

//# sourceMappingURL=fami_aliyun-sdk.js.map
