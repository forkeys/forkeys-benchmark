'use strict';

const Benchmark = require('benchmark');
const forkeys = require('forkeys');
const forkeys_c = require('forkeys-compat');

const SUITE_COUNT = 20;

const testObject = {
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

let results = {
    'forkeys(a, b)': [],
    'forkeys-compat(a, b)': [],
    'Object.keys(a).forEach(b)': []
};

for (let i = 0; i < SUITE_COUNT; i++) {
    (new Benchmark.Suite)
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
            results[event.target.name].push(event.target.hz);

            console.log(`[${i}]: ${event.target.name}`);
        })
        .on('complete', function() {
            console.log(`Cycle ${i} complete`);

            if (i === SUITE_COUNT - 1) {
                for (let key in results) {
                    let average = results[key].map(function(x,i,arr){return x/arr.length}).reduce(function(a,b){return a + b});
                    console.log(`${key}: ${average}`);
                }
            }
        })
        .run();
}
