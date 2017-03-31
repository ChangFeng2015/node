/**
 * Created by Dave on 2017/3/23.
 */
function foo() {
    this.foo = 123;
    console.log('is this global?:',this == global);
};

foo();
console.log(global.foo);

var newFoo = new foo();
console.log(newFoo.foo);