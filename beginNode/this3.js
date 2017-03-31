/**
 * Created by Dave on 2017/3/14.
 */
var foo = {
    bar : 123
};

function bas() {
    if(this === global){
        console.log('called from global!');
    }
    if(this === foo){
        console.log('called from foo!');
    }
}

bas();

foo.bas = bas;
foo.bas();