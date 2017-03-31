/**
 * Created by Dave on 2017/3/14.
 */
var foo = {bas : 123};
var bar = {bas : foo.bas};
bar.bas = 123;
console.log(foo.bas);