if ( typeof exports !== "undefined" || typeof require !== "undefined" ) {
    require("../test_helper");
    equals = assert.equal;
    ok = assert.ok;
}

QUnit.module("TAP spec compliance");

QUnit.test('Diagnostic lines' , function() {
               ok(true, "with\r\nmultiline\nmessage");
               equals("foo\nbar", "foo\r\nbar", "with\r\nmultiline\nmessage");
               equals("foo\r\nbar", "foo\nbar", "with\r\nmultiline\nmessage");
           });

if ( typeof exports !== "undefined" || typeof require !== "undefined" ) {
    QUnit.start();
}
