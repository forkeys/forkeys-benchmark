# forkeys-benchmark

Benchmarking for [forkeys](http://github.com/forkeys/forkeys) and [forkeys-compat](http://github.com/forkeys/forkeys-compat) against Vanilla JavaScript and popular alternatives.

## Results

Function | Ops/sec | % faster than slowest
--- | --- | ---
`forkeys(a, b)` | 687,027 |
`forkeys-compat(a, b)` | 675,891 |
`Object.keys(a).forEach(b)` | 639,124 | 

## Outputs

    forkeys(a, b): 687027.1413794049
    forkeys-compat(a, b): 675891.2375011845
    Object.keys(a).forEach(b): 639124.5415610641

## License

[The Unlicense](http://unlicense.org) (see [distributed LICENSE file](/LICENSE))
