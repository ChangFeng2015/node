/**
 * Created by Dave on 2017/3/14.
 */
var foo = 123;
if(true)
{
    (function () {
       var foo = 456;
       console.log(foo);
    })();
};
console.log(foo);
