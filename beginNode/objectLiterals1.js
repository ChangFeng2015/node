/**
 * Created by Dave on 2017/3/14.
 */
var foo_1 = {};
console.log(foo_1);
foo_1.bar = 123;
console.log(foo_1);

var foo_2 = {
    bar : 123,
    bas : {
        bas1 : 'some string',
        bas2 : 456
    },
    bat : 'abc'
};
console.log(foo_2);

var foo_3 = {
    bar : 123,
    bas : [{
        qux : 1
    },
        {
        qux : 2
    },{
        qux : 3
        }]
};

console.log(foo_3.bar);
console.log(foo_3.bas[0].qux);
console.log(foo_3.bas[1]);


