var Benchmark = require('benchmark');

var forkeys = require('forkeys');
var forkeys_c = require('forkeys-compat');

var testObject = {
    first_key: 'blablabla',
    second: 3,
    third: 1983,
    'numero-four': 1837373,
    'this-is-hard!': [
        [
            1, 2, 4
        ],
        [
            1996, 3, 1
        ]
    ]
};

var results = [];

var suite = new Benchmark.Suite;

suite
    .add('forkeys(a, b)', function() {
        forkeys(testObject, function(key) {
            // dummy functionality here
        });
    })
    .add('forkeys-compat(a, b)', function() {
        forkeys_c(testObject, function(key) {
            // dummy functionality here
        });
    })
    .add('Object.keys(a).forEach(b)', function() {
        Object.keys(testObject).forEach(function(key) {
            // dummy functionality here
        });
    })
    .on('cycle', function(event) {
        console.log(event.target.name + ": " + event.target.hz);
    })
    .run({
        async: true
    });
