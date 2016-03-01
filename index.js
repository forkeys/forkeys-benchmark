var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

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

var testedKeys = [];

var testFunction = function(key) {
    testedKeys.push(key);
};

suite
    .add('forkeys(a, b)', function() {
        forkeys(testObject, testFunction);
    })
    .add('forkeys-compat(a, b)', function() {
        forkeys_c(testObject, testFunction);
    })
    .add('Object.keys(a).forEach(b)', function() {
        Object.keys(testObject).forEach(testFunction);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    });
