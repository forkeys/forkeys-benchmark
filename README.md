# forkeys-benchmark

Benchmarking for [forkeys](http://github.com/forkeys/forkeys) and [forkeys-compat](http://github.com/forkeys/forkeys-compat) against Vanilla JavaScript and popular alternatives.

## Results

Function | Ops/sec | % of slowest
--- | --- | ---
`forkeys(a, b)` | 687,027 |  107.494 %
`forkeys-compat(a, b)` | 675,891 | 105.753 %
`Object.keys(a).forEach(b)` | 639,125 | 100.000 %

## Outputs

    forkeys(a, b): 687027.1413794049
    forkeys-compat(a, b): 675891.2375011845
    Object.keys(a).forEach(b): 639124.5415610641

## License

[The Unlicense](http://unlicense.org) (see [distributed LICENSE file](/LICENSE))
