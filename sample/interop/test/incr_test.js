if ( typeof exports !== "undefined" || typeof require !== "undefined" ) {
    require("../test_helper");
    xx = require("../lib/incr");
    equals = assert.equal;
}

QUnit.module("incr module");

QUnit.test('increment' , function() {
         var inc = xx.increment;
         equals(inc(1), 2);
         equals(inc(-3), -2);
     });

if ( typeof exports !== "undefined" || typeof require !== "undefined" ) {
    QUnit.start();
}
